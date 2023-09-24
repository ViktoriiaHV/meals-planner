import { Card } from "../Layout/Card";
import { RecipeCard } from "../components/RecipeCard";
import { RECIPES } from "../constants/recipes";

export function Recipes() {
  return (
    <div className="recipes">
      {RECIPES.map((recipe) => (
        <Card key={recipe.id}>
          <RecipeCard />
        </Card>
      ))}
    </div>
  );
}
