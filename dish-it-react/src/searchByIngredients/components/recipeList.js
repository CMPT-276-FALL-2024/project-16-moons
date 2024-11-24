import React from "react";



const RecipeList = ({ recipes }) => {

    if (recipes.length === 0) {
        return <p>No recipes found. Try different ingredients.</p>;
    }
    return (
        <div className="recipe-list">
            {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card">
                    <img
                        className="recipe-image"
                        src={recipe.image}
                        alt={recipe.title}
                    />
                    <h3 className="recipe-title">{recipe.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
