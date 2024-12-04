import React, { useState } from "react";
import IngredientInput from "./ingredientsInput";
import IngredientList from "./ingredientList";
import RecipeList from "./recipeList";
import SearchButton from "./searchButton";
import ChatbotComponent from "../../chatBot/chatbot-component";
import ScrollUp from "../../scrollUp/scrollUp";

const apiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;
const apiUa = process.env.REACT_APP_X_RAPIDAPI_UA;
const apiHost = process.env.REACT_APP_X_RAPID_HOST;

const SearchByIngredients = () => {

    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [isSearched, setIsSearched] = useState(false);

    // add into list if not blank/already existed
    const addIngredient = (ingredient) => {
        if (ingredient && !ingredients.includes(ingredient)) {
            setIngredients((addedIngredients) => [...addedIngredients, ingredient]);
        }
    };

    const removeIngredient = (ingredientToRemove) => {
        setIngredients((addedIngredients) =>
        addedIngredients.filter((ingredient) => ingredient !== ingredientToRemove)
        );
    };

    //* Main logic: work flow is going to look like this:
    //* 1: search for a bunch of recipes using ingredients
    //* 2: when user press on one, search for the full detail using that specific ID
    //* 3: doesn't have instructions, go to external website to get all.
    // When Search is cliced, fetch from API
    const handleSearchClick = async () => {
        if (ingredients.length === 0) {
            setError("Please add some ingredients");
            return;
        }
        setIsSearched(true);

        try {
            const query = ingredients.join("%2C");   
            // default: 21 recipes, ignore pantry ingredients, minimize missing ingredients
            const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${query}&number=21&ignorePantry=true&ranking=2`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": apiHost,
                        "x-rapidapi-key": apiKey,
                        "x-rapidapi-ua": apiUa,
                    },
                }
            )

            if (!response.ok) {
                throw new Error("Failed to fetch recipes.");
            }

            const data = await response.json();
            setRecipes(data);
            } catch (err) {
            setError(err.message);
            }
};

    return (
        <div className="page">
            <div id="main"></div>
            <div className="sidebar">
                {/* Most field name are in their own files */}
                <IngredientInput addIngredient={addIngredient} />
                <IngredientList
                    ingredients={ingredients}
                    removeIngredient={removeIngredient}
                />
                <SearchButton onSearchClick={handleSearchClick} />
            </div>
            <RecipeList recipes={recipes} isSearched={isSearched}/>
            <ChatbotComponent />
            <ScrollUp />
        </div>
    );
};

export default SearchByIngredients;
