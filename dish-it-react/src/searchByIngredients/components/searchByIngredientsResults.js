import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import IngredientInput from "./ingredientsInput";
import IngredientList from "./ingredientList";
import RecipeList from "./recipeList";
import SearchButton from "./searchButton";
import SearchByIngredientsNavbar from "../components/searchByIngredientsNavbar.js";
import ChatbotComponent from "../../chatBot/chatbot-component";
import ScrollUp from "../../scrollUp/scrollUp";

const apiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;
const apiUa = process.env.REACT_APP_X_RAPIDAPI_UA;
const apiHost = process.env.REACT_APP_X_RAPID_HOST;

const SearchByIngredientsResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialIngredients = queryParams.get("ingredients")
        ? queryParams.get("ingredients").split(",")
        : [];

    const [ingredients, setIngredients] = useState(initialIngredients);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    const addIngredient = (ingredient) => {
        if (ingredient && !ingredients.includes(ingredient)) {
            setIngredients([...ingredients, ingredient]);
        }
    };

    const removeIngredient = (ingredientToRemove) => {
        setIngredients(ingredients.filter((ingredient) => ingredient !== ingredientToRemove));
    };

    useEffect(() => {
        if (ingredients.length === 0) return;

        const fetchRecipes = async () => {
            try {
                const query = ingredients.join("%2C");
                const response = await fetch(
                    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${query}&number=21&ignorePantry=true&ranking=2`,
                    {
                        method: "GET",
                        headers: {
                            "x-rapidapi-host": apiHost,
                            "x-rapidapi-key": apiKey,
                            "x-rapidapi-ua": apiUa,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch recipes.");
                }

                const data = await response.json();
                setRecipes(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchRecipes();
    }, [ingredients]);

    return (
        <div>
            <SearchByIngredientsNavbar></SearchByIngredientsNavbar>
            <ChatbotComponent></ChatbotComponent>
            <ScrollUp></ScrollUp>
            <div className="page">
                <div className="sidebar">
                    <IngredientInput addIngredient={addIngredient} />
                    <IngredientList ingredients={ingredients} removeIngredient={removeIngredient} />
                    <SearchButton ingredients={ingredients} />
                </div>
                <RecipeList recipes={recipes} />
            </div>
        </div>

    );
};

export default SearchByIngredientsResults;
