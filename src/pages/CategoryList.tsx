import Category from "@/components/Category";
import { CategoryProps } from "@/types/recipes/recipesInterfaces";
import { useTranslation } from "react-i18next";

export default function CategoryList() {
  const { t } = useTranslation();

  const categories: CategoryProps[] = [
    { link: `/category-list/all`, buttonText: t("all") },
    { link: `/category-list/baked-goods`, buttonText: t("bakedGoods") },
    { link: `/category-list/drinks`, buttonText: t("drinks") },
    { link: `/category-list/breakfast`, buttonText: t("breakfast") },
    { link: `/category-list/poland-classics`, buttonText: t("polandClassics") },
    { link: `/category-list/american-style`, buttonText: t("americanStyle") },
    { link: `/category-list/asian-style`, buttonText: t("asianStyle") },
    { link: `/category-list/fast-food`, buttonText: t("fastFood") },
    { link: `/category-list/desserts`, buttonText: t("desserts") },
    { link: `/category-list/other`, buttonText: t("other") },
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
