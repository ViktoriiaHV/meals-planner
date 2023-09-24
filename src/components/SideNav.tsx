import { NavLink } from "react-router-dom";

export function SideNav() {
  return (
    <nav className="side-nav">
      <ul className="side-nav__list">
        <li className="side-nav__list-item">
          <NavLink to="/" className="side-nav__link">
            Recipes
          </NavLink>
        </li>
        <li className="side-nav__list-item">
          <NavLink to="/list" className="side-nav__link">
            Shopping List
          </NavLink>
        </li>
        <li className="side-nav__list-item">
          <NavLink to="/planner" className="side-nav__link">
            Planner
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
