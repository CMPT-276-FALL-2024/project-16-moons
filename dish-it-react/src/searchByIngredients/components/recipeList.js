import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeList = ({ recipes}) => {
    const navigate = useNavigate();
    if (recipes.length === 0) {
        return <p className="error-message-SBI">No recipes found. Try different ingredients.</p>;
    }
    return (
        <div className="recipe-list-1">
            {recipes.map((recipe) => (
                <div
                    key={recipe.id}
                    className="recipe-card-1"
                    onClick={() => navigate(`/recipe-overview/${recipe.id}`)} // Navigate with ID in the URL
                >
                    <img
                        className="recipe-image-1"
                        src={recipe.image}
                        alt={recipe.title}
                    />
                    <h3 className="recipe-title-1">{recipe.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
