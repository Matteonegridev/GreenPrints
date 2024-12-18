import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "it",
    lng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["main", "form", "about", "footer", "faq"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
