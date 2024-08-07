import Category from "@/components/Category";
import { CategoryProps } from "@/types/recipes/recipesInterfaces";
import { useTranslation } from "react-i18next";

export default function Recipes() {
  const { t } = useTranslation();

  const categories: CategoryProps[] = [
    { link: `/all`, buttonText: t("all") },
    { link: `/baked-goods`, buttonText: t("bakedGoods") },
    { link: `/drinks`, buttonText: t("drinks") },
    { link: `/breakfast`, buttonText: t("breakfast") },
    { link: `/poland-classics`, buttonText: t("polandClassics") },
    { link: `/american-style`, buttonText: t("americanStyle") },
    { link: `/asian-style`, buttonText: t("asianStyle") },
    { link: `/fast-food`, buttonText: t("fastFood") },
    { link: `/desserts`, buttonText: t("desserts") },
    { link: `/other`, buttonText: t("other") },
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <Category
          key={index}
          link={category.link}
          buttonText={category.buttonText}
        />
      ))}
    </div>
  );
}
