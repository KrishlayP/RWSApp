import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources, supportedLanguages } from "./resources";

const getDeviceLanguage = () => {
  const locale = Localization.getLocales?.()[0];
  const languageCode = locale?.languageCode || "hi";
  return supportedLanguages.includes(languageCode) ? languageCode : "hi";
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    fallbackLng: "hi",
    lng: getDeviceLanguage(),
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
