import { RECIPES } from "../constants/recipes";
import { ReactComponent as StarIcon } from "../images/star-icon.svg";

const [recipe] = RECIPES;
console.log(recipe);

export function Recipe() {
  return (
    <div className="recipe">
      <header className="recipe__title">
        <h2>{recipe.title}</h2>
      </header>

      <img src={recipe.picture} alt={recipe.title} className="recipe__image" />

      <div className="recipe__toolbar">
        <p>Preparation time: {recipe.preptime} minutes</p>
        <div className="recipe__action-buttons">
          <button className="recipe__button">Add to Planner</button>
          <button className="recipe__button">Add to Shopping List</button>
          <StarIcon className={`recipe-card__star-icon`} />
        </div>
      </div>

      <div className="recipe__content">
        <div className="recipe__ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map(ingredient => <li>{ingredient.name}</li>)}
          </ul>
        </div>
        <div className="recipe__instructions"></div>
      </div>
    </div>
  );
}
