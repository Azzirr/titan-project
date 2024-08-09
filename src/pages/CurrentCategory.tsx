import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import recipesData from "@/content/titles/list-of-recipes-pl.json";

export default function CurrentCategory() {
  const { categoryName } = useParams<{ categoryName: string }>();

  const category = recipesData.categories.find(
    (category) => category.name.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div>
      <h1>Przepisy z kategorii: {categoryName}</h1>
      {category ? (
        <div>
          {category.recipes.map((recipe) => (
            <div key={recipe.id} className="">
              <Link to={`/recipe/${recipe.id}`} className="no-decoration">
                <Button className="text-1xl">{recipe.title}</Button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Brak przepisów dla tej kategorii.</p>
      )}
    </div>
  );
}
