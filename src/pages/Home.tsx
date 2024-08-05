import { useTranslation } from "react-i18next";
import { Beef, Shuffle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div>
        <Link to="/recipes" className="no-decoration">
          <Button className="w-[300px]">
            <Beef />
            <span className="ml-2 text-2xl">{t("recipes")}</span>
          </Button>
        </Link>
      </div>
      <div>
        <Link to="/roulette" className="no-decoration">
          <Button className="w-[300px]">
            <Shuffle />
            <div className="mr-2">
              <span className="ml-2 text-2xl">{t("roulette")}</span>
            </div>
          </Button>
        </Link>
      </div>
      <div>
        <Link to="/cart" className="no-decoration">
          <Button className="w-[300px]">
            <ShoppingCart />
            <div className="mr-[14px]">
              <span className="ml-2 text-2xl">{t("cart")}</span>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
