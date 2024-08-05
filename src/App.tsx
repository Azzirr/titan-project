import "./App.css";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Roulette from "./pages/Roulette";
import Cart from "./pages/Cart";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <h1>{t("welcome")}</h1>
    </>
  );
}

export default App;
