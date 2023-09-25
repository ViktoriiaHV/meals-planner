import { useState } from "react";
import clockIcon from "../images/clock-icon.png";
import { ReactComponent as StarIcon } from "../images/star-icon.svg";
import { Recipe } from "../constants/recipes";
import { NavLink } from "react-router-dom";

export function RecipeCard({ id, title, picture, preptime }: Partial<Recipe>) {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleOnFavourite(e: React.MouseEvent<SVGSVGElement>) {
    e.stopPropagation();
    e.preventDefault()
    setIsFavourite(!isFavourite);
  }

  return (
    <NavLink to={`recipe/${id}`}>
      <div className="recipe-card">
        <img src={picture} alt={title} className="recipe-card__image" />
        <div className="recipe-card__info">
          <h3 className="recipe-card__heading">{title}</h3>
          <div className="recipe-card__time">
            <p>{preptime}'</p>
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
            onClick={handleOnFavourite}
          />
        </div>
      </div>
    </NavLink>
  );
}
