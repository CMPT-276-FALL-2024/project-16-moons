import React from 'react';
import '../recipeSpecificSearchPage.css';

function RecipeCard({ recipeName, recipeImage }) {
  return (
    <div className="search-result">
      <a href="./recipe-page.html">
        <img src={recipeImage} alt={recipeName} />
        <p>{recipeName}</p>
      </a>
    </div>
  );
}

export default RecipeCard;