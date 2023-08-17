import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../public/locales/en/en.json";
import translationDE from "../public/locales/de/de.json";
import translationDU from "../public/locales/du/du.json";
import translationFR from "../public/locales/fr/fr.json";
import translationIT from "../public/locales/it/it.json";
import translationES from "../public/locales/es/es.json";

// this is for the translation on the application.
const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE },
  du: { translation: translationDU },
  fr: { translation: translationFR },
  it: { translation: translationIT },
  es: { translation: translationES },
};

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    localeDetect: false,
    resources,
    ns: ["translation"],
    defaultNS: "translation",
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
