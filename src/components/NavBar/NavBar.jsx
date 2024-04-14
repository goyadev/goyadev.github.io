import "./style.css";

import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <input
            class="checkbox"
            type="checkbox"
            name="hamburgercheckbox"
            id="checkboxburger"
          />

          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>

          <ul class="menu-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#bio">Bio</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
