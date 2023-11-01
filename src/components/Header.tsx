import { NavLink } from "react-router-dom";
import MealLogo from "../images/meal.png";
import { Search } from "./Search";

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo-wrapper">
          <NavLink to="/">
            <img src={MealLogo} alt="meal-logo" className="header__logo" />
          </NavLink>
          <h1>Meals Planner</h1>
        </div>
        <Search />
        <div className="header__account">
          <NavLink to="/account" className="header__link">
            My Account
          </NavLink>
        </div>
      </div>
    </header>
  );
}
