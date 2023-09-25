import { useParams } from "react-router-dom";
import { Checkbox } from "../components/Checkbox";
import { RECIPES } from "../constants/recipes";
import { ReactComponent as StarIcon } from "../images/star-icon.svg";

export function RecipeDetail() {
  const { id } = useParams();
  const recipe = RECIPES.find((recipe) => recipe.id === id);

  if(!recipe){
    //TODO: ADD RECIPE NOT FOUND FALLBACK 
    return <>'ADD RECIPE NOT FOUND FALLBACK'</>
  }

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
            {recipe.ingredients.map((ingredient) => {
              const recipeString = `${ingredient.amount} ${ingredient.units} ${ingredient.name}`;
              return (
                <li>
                  <Checkbox
                    id={ingredient.name}
                    value={recipeString}
                    checked={false}
                    onChange={() => {}}
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
            <p>{`${idx + 1}. ${entry}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
