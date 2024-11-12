import React from "react";
import FoodFactComponent from "./foodFactComponent";
import "../index.css";

const SearchOption = () => {
    return (
        <section className="search">
            <img src="/images/Dish-It-Smaller.png" id="Dish-It-Search-Logo" alt="Dish it logo"/>
            <br />
            {/* <!-- Fun Fact --> */}
            <FoodFactComponent/>
            <div className="dropdown">
                <button>Let's chef it up!</button>
                <div className="content">
                <a href="recipe-search-results.html">Search By Recipe Name</a>
                <a href="ingredient-search-results.html">Search By Ingredients</a>
                <a href="ingredient-analyzer.html">Ingredient Analyzer</a>
                <a href="recipe-page.html">Random Recipe</a>
                </div>
            </div>
        </section>
    )
}

export default SearchOption;