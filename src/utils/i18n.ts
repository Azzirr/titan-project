import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  pl: {
    translation: {
      welcome: "Dzień dobry!",
      recipes: "Przepisy",
      cart: "Koszyk",
      roulette: "Ruletka",
      categories: "Kategorie",
    },
  },
  en: {
    translation: {
      welcome: "Welcome!",
      recipes: "Recipes",
      cart: "Cart",
      roulette: "Roulette",
      categories: "Categories",
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
