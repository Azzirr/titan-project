import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CategoryProps } from "@/types/recipes/recipesInterfaces";
export default function Category({ link, buttonText }: CategoryProps) {
  return (
    <div className="w-[300px] h-[50px]">
      <Link to={link} className="no-decoration">
        <Button className="text-1xl">{buttonText}</Button>
      </Link>
    </div>
  );
}
