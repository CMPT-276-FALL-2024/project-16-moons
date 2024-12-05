import React, { useState } from "react";
import IngredientInput from "./ingredientsInput";
import IngredientList from "./ingredientList";
import SearchButton from "./searchButton";
import ChatbotComponent from "../../chatBot/chatbot-component";
import ScrollUp from "../../scrollUp/scrollUp";

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
            <div id="main">
                <ChatbotComponent></ChatbotComponent>
                <ScrollUp></ScrollUp>
            </div>
            <div className="sidebar">
                <IngredientInput addIngredient={addIngredient} />
                <IngredientList ingredients={ingredients} removeIngredient={removeIngredient} />
                <SearchButton className="search-button-SBI" ingredients={ingredients} />
            </div>
        </div>
    );
};

export default SearchByIngredients;
