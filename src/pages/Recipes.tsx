import { Card } from "../Layout/Card";
import { RecipeCard } from "../components/RecipeCard";
import { RECIPES, Recipe } from "../constants/recipes";

export function Recipes() {
  return (
    <div className="recipes">
      {RECIPES.map((recipe: Recipe) => (
        <Card key={recipe.id}>
          <RecipeCard id={recipe.id} title={recipe.title} picture={recipe.picture} preptime={recipe.preptime} />
        </Card>
      ))}
    </div>
  );
}
