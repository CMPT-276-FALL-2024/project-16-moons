import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Overview = () => {
    const {id} = useParams(); // Get the recipe ID from the URL
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [error, setError] = useState(null);


    const fetchRecipeDetails = async () => {
        try {
            const response = await fetch(
                `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": process.env.REACT_APP_X_RAPID_HOST,
                        "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
                        "x-rapidapi-ua": process.env.REACT_APP_X_RAPIDAPI_UA,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch recipe details.");
            }

            const data = await response.json();
            setRecipeDetails(data);
        } catch (err) {
            setError(err.message);
        }
    };

    if (!recipeDetails && !error) {
        fetchRecipeDetails();
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="recipe-overview">
            <h1>{recipeDetails.title}</h1>
            <img src={recipeDetails.image} alt={recipeDetails.title} />
            <p><strong>Summary:</strong> {recipeDetails.summary}</p>
            <a href={recipeDetails.sourceUrl} target="_blank" rel="noopener noreferrer">
                View Full Recipe
            </a>
        </div>
    );
};

export default Overview;
