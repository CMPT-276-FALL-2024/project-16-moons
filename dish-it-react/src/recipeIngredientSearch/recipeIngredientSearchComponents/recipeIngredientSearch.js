import React from "react";
import { Link } from "react-router-dom";
function RecipeIngredientSearch() {
  return (
    <div>
      <div>
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
        <title>Dish-It | Cooking All In One!</title>
      </div>
      <header className="header">
        <Link to="/">
          <img
            className="logo"
            alt="Dish-It Logo"
            src="images/logoNavBar.png"
          ></img>
        </Link>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#how">
                How To Use
              </a>
            </li>
            <li>
              <Link to="/" className="main-nav-link">
                Back To Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>INSERT CODE HERE</main>
    </div>
  );
}

export default RecipeIngredientSearch;
