import { memo, useEffect, useMemo, useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "../styles/styles";

const createOtp = () => String(Math.floor(100000 + Math.random() * 900000));

function PhoneOtpModal({ onClose, onVerified, visible, t }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [error, setError] = useState("");

  const cleanedPhone = useMemo(() => phone.replace(/\D/g, ""), [phone]);
  const canSendOtp = cleanedPhone.length >= 10;
  const canVerifyOtp = otp.length === 6;

  useEffect(() => {
    if (!visible) {
      setPhone("");
      setOtp("");
      setSentOtp("");
      setError("");
    }
  }, [visible]);

  const sendOtp = () => {
    if (!canSendOtp) {
      setError(t("phoneInvalid"));
      return;
    }

    setError("");
    setOtp("");
    setSentOtp(createOtp());
  };

  const verifyOtp = () => {
    if (!sentOtp) {
      setError(t("otpSendFirst"));
      return;
    }

    if (otp !== sentOtp) {
      setError(t("otpInvalid"));
      return;
    }

    onVerified(`+91 ${cleanedPhone.slice(-10)}`);
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.otpOverlay}>
        <View style={styles.otpCard}>
          <Text style={styles.otpTitle}>{t("phoneLoginTitle")}</Text>
          <Text style={styles.otpSubtitle}>{t("phoneLoginSubtitle")}</Text>

          <TextInput
            keyboardType="phone-pad"
            maxLength={13}
            onChangeText={(value) => {
              setPhone(value);
              setOtp("");
              setSentOtp("");
              setError("");
            }}
            placeholder={t("phonePlaceholder")}
            placeholderTextColor="#9CA3AF"
            style={styles.otpInput}
            value={phone}
          />

          {sentOtp ? (
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
              <Text style={styles.otpDevHint}>
                {t("otpDevHint")} {sentOtp}
              </Text>
            </>
          ) : null}

          {error ? <Text style={styles.otpError}>{error}</Text> : null}

          <View style={styles.otpActions}>
            <TouchableOpacity
              style={styles.otpSecondaryButton}
              onPress={onClose}
            >
              <Text style={styles.otpSecondaryText}>{t("cancel")}</Text>
            </TouchableOpacity>
            {sentOtp ? (
              <TouchableOpacity
                disabled={!canVerifyOtp}
                style={[
                  styles.otpPrimaryButton,
                  !canVerifyOtp && styles.otpButtonDisabled,
                ]}
                onPress={verifyOtp}
              >
                <Text style={styles.otpPrimaryText}>{t("verifyOtp")}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                disabled={!canSendOtp}
                style={[
                  styles.otpPrimaryButton,
                  !canSendOtp && styles.otpButtonDisabled,
                ]}
                onPress={sendOtp}
              >
                <Text style={styles.otpPrimaryText}>{t("sendOtp")}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default memo(PhoneOtpModal);
