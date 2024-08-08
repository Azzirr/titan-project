import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";

export default function CurrentRecipe() {
  const [recipeContent, setRecipeContent] = useState("");
  // TO DO - if need use Axios
  useEffect(() => {
    import(`../content/PL/pl-chicken.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setRecipeContent(text))
        .catch((error) => console.log(error));
    });
  }, []);
  return (
    <div>
      <Markdown>{recipeContent}</Markdown>
    </div>
  );
}
