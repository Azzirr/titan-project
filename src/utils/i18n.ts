import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  pl: {
    translation: {
      welcome: "Dzień dobry!",
    },
  },
  en: {
    translation: {
      welcome: "Welcome!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  debug: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
