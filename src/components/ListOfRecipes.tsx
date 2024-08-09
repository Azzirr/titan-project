// src/Recipes.tsx
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import recipesData from "@/content/titles/list-of-recipes-pl.json";

export default function ListOfRecipes() {
  // const { t } = useTranslation();

  // const recipeIds = recipesData.recipes.map((recipe) => recipe.id);

  return (
    <div>
      {/* {recipeIds.map((id) => (
        <div key={id}>
          <Link to="/current-recipe" className="no-decoration">
            <Button>{t(`recipes:recipe_${id}`)}</Button>
          </Link>
        </div>
      ))} */}
    </div>
  );
}
