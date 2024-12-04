import React, { useState } from "react";
import IngredientInput from "./ingredientsInput";
import IngredientList from "./ingredientList";
import SearchButton from "./searchButton";

const SearchByIngredients = () => {
    const [ingredients, setIngredients] = useState([]);

    const addIngredient = (ingredient) => {
        if (ingredient && !ingredients.includes(ingredient)) {
            setIngredients([...ingredients, ingredient]);
        }
    };

    const removeIngredient = (ingredientToRemove) => {
        setIngredients(ingredients.filter((ingredient) => ingredient !== ingredientToRemove));
    };

    return (
        <div className="page">
            <div className="sidebar">
                <IngredientInput addIngredient={addIngredient} />
                <IngredientList ingredients={ingredients} removeIngredient={removeIngredient} />
                <SearchButton ingredients={ingredients} />
            </div>
        </div>
    );
};

export default SearchByIngredients;
