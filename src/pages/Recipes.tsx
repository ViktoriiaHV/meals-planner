import { useSelector } from "react-redux";
import { Card } from "../Layout/Card";
import { RecipeCard } from "../components/RecipeCard";
import { type Recipe } from "../constants/recipes";
import RootState from "../store";
import { createSelector } from "@reduxjs/toolkit";

const selectRecipesState = (state: RootState) => state.recipes;

const selectRecipeList = createSelector(
  selectRecipesState,
  (recipes) => recipes.recipeList
);
const selectRecipeSearch = createSelector(
  selectRecipesState,
  (recipes) => recipes.searchKeyword
);

const selectFilteredRecipes = createSelector(
  selectRecipeList,
  selectRecipeSearch,
  (list, search) => {
    return list.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
  }
);

export function Recipes() {
  const filteredRecipes = useSelector(selectFilteredRecipes);

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
