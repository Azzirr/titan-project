import "./App.css";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Home />
      <h1>{t("welcome")}</h1>
    </>
  );
}

export default App;
