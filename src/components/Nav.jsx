/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { sunIcon, moonIcon } from "./icons";

export default function Nav({ theme, toggleTheme }) {
  return (
    <nav className="split">
      <NavLink
        to="/"
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      >
        Popular UI
      </NavLink>
      <ul className="row">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link " + (isActive ? " active" : "")
            }
          >
            Popular
          </NavLink>
        </li>
        <li>
          <button className="btn secondary icon" onClick={toggleTheme}>
            {theme === "light" ? moonIcon : sunIcon}
          </button>
        </li>
      </ul>
    </nav>
  );
}
