import { NavLink } from "react-router-dom";
import { sunIcon, moonIcon } from "./icons";
import { ThemeConsumer } from "../context/theme";

// eslint-disable-next-line react/prop-types
export default function Nav({ toggleTheme }) {
  return (
    <ThemeConsumer>
      {(theme) => (
        <nav className="split">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
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
      )}
    </ThemeConsumer>
  );
}
