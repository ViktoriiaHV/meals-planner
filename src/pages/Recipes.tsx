import { useSelector } from "react-redux";
import { Card } from "../Layout/Card";
import { RecipeCard } from "../components/RecipeCard";
import { type Recipe } from "../constants/recipes";
import RootState from "../store";

export function Recipes() {
  const filteredRecipes = useSelector((state: RootState) =>
    state.recipes.recipeList.filter((recipe) =>
      recipe.title.includes(state.recipes.searchKeyword)
    )
  );
  return (
    <div className="recipes">
      {filteredRecipes.map((recipe: Recipe) => (
        <Card key={recipe.id}>
          <RecipeCard
            id={recipe.id}
            title={recipe.title}
            picture={recipe.picture}
            preptime={recipe.preptime}
          />
        </Card>
      ))}
    </div>
  );
}
