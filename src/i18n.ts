import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json";
// import de from "./languages/de.json";
import hindi from "./languages/hindi.json"

const resources = {
  en: {
    translation: en,
  },
  hindi: {
    translation: hindi,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
