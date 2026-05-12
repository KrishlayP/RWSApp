import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../data/appData";
import { styles } from "../styles/styles";

export default function LanguageScreen({ selectedLanguage, onSelectLanguage }) {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.languageContainer}>
      <TouchableOpacity
        style={styles.languageClose}
        onPress={() => onSelectLanguage(selectedLanguage || "hi")}
      >
        <Text style={styles.languageCloseText}>✕</Text>
      </TouchableOpacity>

      <View style={styles.langTopLogo}>
        <Text style={styles.splashLogo}>ॐ</Text>
      </View>

      <Text style={styles.languageTitle}>{t("selectLanguage")}</Text>
      <View style={styles.languageGrid}>
        {LANGUAGES.map((lang) => {
          const language = lang;
          return (
            <TouchableOpacity
              key={lang.id}
              style={[
                styles.languageTile,
                selectedLanguage === lang.id && styles.languageTileSelected,
              ]}
              onPress={() => onSelectLanguage(lang.id)}
            >
              <Text style={styles.languageMain}>{language.title}</Text>
              <Text style={styles.languageNative}>{language.native}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
