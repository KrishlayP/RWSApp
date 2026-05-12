import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { styles } from "../styles/styles";

export default function SplashScreen() {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.splashContainer}>
      <View style={styles.splashCenter}>
        <View style={styles.splashLogoWrap}>
          <Text style={styles.splashLogo}>ॐ</Text>
        </View>

        <Text style={styles.splashTitle}>{t("splashTitle")}</Text>
        <Text style={styles.splashSubtitle}>{t("splashSubtitle")}</Text>
      </View>

      <View style={styles.splashLoaderTrack}>
        <ActivityIndicator color="#F97316" size="small" />
      </View>
    </SafeAreaView>
  );
}
