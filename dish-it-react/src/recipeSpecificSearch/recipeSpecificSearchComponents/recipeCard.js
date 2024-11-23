import React from 'react';

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