import React, { useState } from "react";
import IngredientInput from "./IngredientInput";
import IngredientList from "./IngredientList";
import RecipeList from "./RecipeList";
import SearchButton from "./SearchButton";

const app_key = REACT_APP_EDAMAM_API_KEY_SEARCH_BY_INGREDIENTS;
const app_id = REACT_APP_EDAMAM_APP_ID_SEARCH_BY_INGREDIENTS;

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
        const query = ingredients.join(",");
        const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`
        );

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
