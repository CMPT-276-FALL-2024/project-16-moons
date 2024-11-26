import FoodFactComponent from "./foodFactComponent";
import { Link } from "react-router-dom";
import React from "react";

const SearchOption = () => {
  function showRecipeSearch(){
    document.getElementById("recipe-search-section-homepage").style.visibility = "visible";
    document.getElementById("dropdown").style.visibility = "hidden";
  }

  function hideRecipeSearch(){
    document.getElementById("recipe-search-section-homepage").style.visibility = "hidden";
    document.getElementById("dropdown").style.visibility = "visible";
  }

  const [searchRecipe, setSearchRecipe] = React.useState("");
  return (
    <section className="search" id="search">
      <img
        src="/images/Dish-It-Smaller.png"
        id="Dish-It-Search-Logo"
        alt="Dish it logo"
      />
      <br />
      {/* <!-- Fun Fact --> */}
      <FoodFactComponent />
      <div id="dropdown">
        <button>Let's chef it up!</button>
        <div className="content">
          <p onClick={showRecipeSearch}>Search By Recipe Name</p>
          <a href="ingredient-search-results.html">Search By Ingredients</a>
          <Link to="/ingredient-analyzer">Ingredient Analyzer</Link>
          <Link to="/randomdish">Random Recipe</Link>
        </div>
      </div>
      <section>
        <div id="recipe-search-section-homepage">
          <div className="search-container">
            <input type="text" placeholder="Search For Recipe" id="search-input" onChange={(e) => setSearchRecipe(e.target.value)}/>
            <div>
              <Link to="/recipeSpecificSearch" state={{ recipe: searchRecipe }}>
                <button className="search-button">
                  <img id="search-icon" src="/images/search-icon.png" alt="search icon"/>
                </button> 
              </Link>
            </div>
          </div>
          <button onClick={hideRecipeSearch}>Back to see other features</button>
        </div>
      </section>
    </section>
  );
};

export default SearchOption;
