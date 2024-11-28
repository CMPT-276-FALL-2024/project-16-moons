import React, { useState } from "react";
import IngredientInput from "./ingredientsInput";
import IngredientList from "./ingredientList";
import RecipeList from "./recipeList";
import SearchButton from "./searchButton";

const apiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;
const apiUa = process.env.REACT_APP_X_RAPIDAPI_UA;
const apiHost = process.env.REACT_APP_X_RAPID_HOST;

const SearchByIngredients = () => {

    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

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

    // When Search is cliced, fetch from API
    const handleSearchClick = async () => {
        if (ingredients.length === 0) {
            setError("Please add some ingredients");
            return;
        }

    try {
        const query = ingredients.join("%2");   
        // default: 10 recipes, ignore pantry ingredients, minimize missing ingredients
        const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients={query}&number=10&ignorePantry=true%ranking=2",
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
        setRecipes(data.hits);
        } catch (err) {
        setError(err.message);
        }
};

    return (
        <div>   {/*classNames to be set later*/}
            <IngredientInput addIngredient={addIngredient} />

            <IngredientList
                ingredients={ingredients}
                removeIngredient={removeIngredient}
            />

            <SearchButton onSearchClick={handleSearchClick} />

            <div className="recipe-list-container">
                <RecipeList recipes={recipes} />
            </div>
        </div>
    );
};

export default SearchByIngredients;
