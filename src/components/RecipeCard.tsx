import { useState } from "react";
import recipeImage from "../images/CroppedFocusedImage192072050-50-Roast-Potatoes-2019.jpg";
import clockIcon from "../images/clock-icon.png";
import { ReactComponent as StarIcon } from "../images/star-icon.svg";

export function RecipeCard() {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="recipe-card">
      <img src={recipeImage} alt="" className="recipe-card__image" />
      <div className="recipe-card__info">
        <h3 className="recipe-card__heading">roast potatoes</h3>
        <div className="recipe-card__time">
          <p>15'</p>
          <img
            src={clockIcon}
            alt="clock-icon"
            className="recipe-card__time-icon"
          />
        </div>
        <StarIcon
          className={`recipe-card__star-icon ${
            isFavourite && "recipe-card__star-icon--active"
          }`}
          onClick={() => setIsFavourite(!isFavourite)}
        />
      </div>
    </div>
  );
}
