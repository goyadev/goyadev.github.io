import "./style.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input
            className="checkbox"
            type="checkbox"
            name="hamburgercheckbox"
            id="checkboxburger"
          />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
