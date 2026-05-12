import { SafeAreaView, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { styles } from "../styles/styles";

export default function DevelopmentScreen({ title, onBack }) {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.devContainer}>
      <View style={styles.devHeader}>
        <IconButton icon="arrow-left" iconColor="#FFFFFF" onPress={onBack} />
      </View>

      <View style={styles.devContent}>
        <Text style={styles.devTitle}>{title}</Text>

        <Text style={styles.devText}>{t("underDevelopment")}</Text>
      </View>
    </SafeAreaView>
  );
}
