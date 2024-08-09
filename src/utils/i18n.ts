import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// TO DO - load english recipes

const resources = {
  pl: {
    translation: {
      welcome: "Dzień dobry!",
      recipes: "Przepisy",
      cart: "Koszyk",
      roulette: "Ruletka",
      //categories
      categories: "Kategorie",
      all: "Wszystko",
      bakedGoods: "Wypieki",
      drinks: "Napoje",
      breakfast: "Śniadanie",
      polandClassics: "Polskie Klasyki",
      americanStyle: "Styl Amerykański",
      asianStyle: "Styl Azjatycki",
      fastFood: "Fast Food",
      desserts: "Desery",
      other: "Pozostałe",
    },
  },
  en: {
    translation: {
      welcome: "Welcome!",
      recipes: "Recipes",
      cart: "Cart",
      roulette: "Roulette",
      //categories
      categories: "Categories",
      all: "All",
      bakedGoods: "Baked Goods",
      drinks: "Drinks",
      breakfast: "Breakfast",
      polandClassics: "Poland Classics",
      americanStyle: "American Style",
      asianStyle: "Asian Style",
      kebab: "Fast Food",
      desserts: "Desserts",
      other: "Other",
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
