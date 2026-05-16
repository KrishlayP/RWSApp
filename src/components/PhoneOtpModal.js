import { memo, useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, IconButton } from "react-native-paper";

import {
  requestOtp,
  verifyOtp as verifyOtpWithBackend,
} from "../services/otpService";
import { styles } from "../styles/styles";

function PhoneOtpModal({ onClose, onVerified, visible, t }) {
  const modalAnim = useRef(new Animated.Value(0)).current;
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const cleanedPhone = useMemo(() => phone.replace(/\D/g, ""), [phone]);
  const canSendOtp = cleanedPhone.length >= 10;
  const canVerifyOtp = otp.length === 6;

  useEffect(() => {
    if (visible) {
      Animated.spring(modalAnim, {
        toValue: 1,
        friction: 8,
        tension: 90,
        useNativeDriver: true,
      }).start();
    } else {
      modalAnim.setValue(0);
      setPhone("");
      setOtp("");
      setError("");
      setOtpRequested(false);
      setIsSending(false);
      setIsVerifying(false);
    }
  }, [modalAnim, visible]);

  const cardAnimatedStyle = {
    opacity: modalAnim,
    transform: [
      {
        translateY: modalAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [28, 0],
        }),
      },
      {
        scale: modalAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.92, 1],
        }),
      },
    ],
  };

  const overlayAnimatedStyle = {
    opacity: modalAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  const sendOtp = async () => {
    if (!canSendOtp) {
      setError(t("phoneInvalid"));
      return;
    }

    try {
      setIsSending(true);
      setError("");
      setOtp("");
      await requestOtp(cleanedPhone);
      setOtpRequested(true);
    } catch (err) {
      setError(err.message || t("otpSendFailed"));
    } finally {
      setIsSending(false);
    }
  };

  const verifyOtp = async () => {
    if (!otpRequested) {
      setError(t("otpSendFirst"));
      return;
    }

    try {
      setIsVerifying(true);
      setError("");
      const result = await verifyOtpWithBackend(otp);
      onVerified(result?.user?.contactValue || `+91${cleanedPhone.slice(-10)}`);
    } catch (err) {
      setError(err.message || t("otpInvalid"));
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Animated.View style={[styles.otpOverlay, overlayAnimatedStyle]}>
        <Animated.View style={[styles.otpCard, cardAnimatedStyle]}>
          <View style={styles.otpHeader}>
            <View style={styles.otpIconWrap}>
              <Text style={styles.otpIconText}>#</Text>
            </View>
            <IconButton
              icon="close"
              iconColor="#64748B"
              size={20}
              onPress={onClose}
              style={styles.otpCloseButton}
            />
          </View>
          <Text style={styles.otpTitle}>{t("phoneLoginTitle")}</Text>
          <Text style={styles.otpSubtitle}>{t("phoneLoginSubtitle")}</Text>

          <TextInput
            keyboardType="phone-pad"
            maxLength={13}
            onChangeText={(value) => {
              setPhone(value);
              setOtp("");
              setOtpRequested(false);
              setError("");
            }}
            placeholder={t("phonePlaceholder")}
            placeholderTextColor="#9CA3AF"
            style={styles.otpInput}
            value={phone}
          />

          {otpRequested || isSending ? (
            <>
              <TextInput
                keyboardType="number-pad"
                maxLength={6}
                onChangeText={(value) => {
                  setOtp(value.replace(/\D/g, ""));
                  setError("");
                }}
                placeholder={t("otpPlaceholder")}
                placeholderTextColor="#9CA3AF"
                style={styles.otpInput}
                value={otp}
              />
              <Text style={styles.otpDevHint}>{t("otpSmsHint")}</Text>
            </>
          ) : null}

          {error ? <Text style={styles.otpError}>{error}</Text> : null}

          <View style={styles.otpActions}>
            <Button
              mode="outlined"
              onPress={onClose}
              style={styles.otpPaperButton}
              labelStyle={styles.otpSecondaryText}
            >
              {t("cancel")}
            </Button>
            {otpRequested ? (
              <TouchableOpacity
                disabled={!canVerifyOtp || isVerifying}
                style={[
                  styles.otpPrimaryButton,
                  (!canVerifyOtp || isVerifying) && styles.otpButtonDisabled,
                ]}
                onPress={verifyOtp}
              >
                <Text style={styles.otpPrimaryText}>
                  {isVerifying ? t("pleaseWait") : t("verifyOtp")}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                disabled={!canSendOtp || isSending}
                style={[
                  styles.otpPrimaryButton,
                  (!canSendOtp || isSending) && styles.otpButtonDisabled,
                ]}
                onPress={sendOtp}
              >
                <Text style={styles.otpPrimaryText}>
                  {isSending ? t("pleaseWait") : t("sendOtp")}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

export default memo(PhoneOtpModal);
