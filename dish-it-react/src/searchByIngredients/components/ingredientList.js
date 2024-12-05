import React from "react";

// List of ingredients added, with the functionality of removing them provided in parent
const IngredientList = ({ ingredients, removeIngredient }) => {
    return (
        <div>
            <h3 id="ingredient-list-title">Your Ingredients:</h3>
            <div className="ingredient-list-container">
                <ul className="ingredient-list">
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">
                            {ingredient}
                            <button
                                className="remove-button"
                                onClick={() => removeIngredient(ingredient)}
                            >
                                &#10006;
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default IngredientList;
