import "./App.css";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Roulette from "./pages/Roulette";
import Cart from "./pages/Cart";
import CategoryList from "./pages/CategoryList";
import CurrentRecipe from "./pages/CurrentRecipe";
import CurrentCategory from "./pages/CurrentCategory";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-list" element={<CategoryList />} />
        <Route
          path="/category-list/:categoryName"
          element={<CurrentCategory />}
        />
        <Route path="/current-recipe" element={<CurrentRecipe />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <h1>{t("welcome")}</h1>
    </>
  );
}

export default App;
