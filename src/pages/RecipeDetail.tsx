import { NavLink, useParams } from "react-router-dom";
import { Checkbox } from "../components/Checkbox";
import { RECIPES } from "../constants/recipes";
import { ReactComponent as StarIcon } from "../images/star-icon.svg";
import { ReactComponent as BackIcon } from "../images/back-svgrepo-com.svg";
import { useState } from "react";
import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { addItems } from "../store/shoppingListSlice/shoppingListSlice";
import { RecipeFallback } from "./RecipeFallback";

export function RecipeDetail() {
  const { id } = useParams();
  const recipe = RECIPES.find((recipe) => recipe.id === id);
  const dispatch = useDispatch();

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  if (!recipe) {
    return <RecipeFallback />;
  }

  function onSelectHandler(ingredient: string) {
    setSelectedIngredients((prevState) => {
      if (prevState.includes(ingredient)) {
        return prevState.filter((item) => item !== ingredient);
      } else {
        return [...prevState, ingredient];
      }
    });
  }

  function addToShoppingList() {
    if (selectedIngredients.length > 0) {
      dispatch(addItems(selectedIngredients));
      setSelectedIngredients([]);
    }
  }

  return (
    <div className="recipe">
      <header className="recipe__title">
        <NavLink to="/recipes">
          <BackIcon width={10} />
        </NavLink>
        <h2>{recipe.title}</h2>
      </header>

      <img src={recipe.picture} alt={recipe.title} className="recipe__image" />

      <div className="recipe__toolbar">
        <p>Preparation time: {recipe.preptime} minutes</p>
        <div className="recipe__action-buttons">
          <Button className="recipe__button">Add to Planner</Button>
          <Button
            className="recipe__button"
            onClick={addToShoppingList}
          >{`Add ${
            selectedIngredients.length > 0 ? "selected" : "all"
          } to Shopping List`}</Button>
          <StarIcon className={`recipe-card__star-icon`} />
        </div>
      </div>

      <div className="recipe__content">
        <div className="recipe__ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => {
              const recipeString = `${ingredient.amount} ${ingredient.units} ${ingredient.name}`;
              return (
                <li key={ingredient.name}>
                  <Checkbox
                    id={ingredient.name}
                    value={recipeString}
                    checked={selectedIngredients.includes(ingredient.name)}
                    onChange={() => onSelectHandler(ingredient.name)}
                  />
                  <label htmlFor={ingredient.name}>{recipeString}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="recipe__instructions">
          <h3>Instructions</h3>
          {recipe.instructions.map((entry, idx) => (
            <p key={idx}>{`${idx + 1}. ${entry}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
