import { memo } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

import { styles } from "../styles/styles";

function NotificationPrompt({ onDismiss, t }) {
  return (
    <Pressable style={styles.notifyOverlay} onPress={onDismiss}>
      <Pressable style={styles.notifyCard}>
        <Text style={styles.notifyTitle}>{t("notificationPrompt")}</Text>
        <View style={styles.notifyActions}>
          <TouchableOpacity onPress={onDismiss}>
            <Text style={styles.notifyActionText}>{t("allow")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDismiss}>
            <Text style={styles.notifyActionText}>{t("dontAllow")}</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Pressable>
  );
}

export default memo(NotificationPrompt);
