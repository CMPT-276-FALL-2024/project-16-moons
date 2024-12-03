import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeList = ({ recipes }) => {
    const navigate = useNavigate();
    if (recipes.length === 0) {
        return <p>No recipes found. Try different ingredients.</p>;
    }
    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div
                    key={recipe.id}
                    className="recipe-card"
                    onClick={() => navigate(`/recipe-overview/${recipe.id}`)} // Navigate with ID in the URL
                >
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
