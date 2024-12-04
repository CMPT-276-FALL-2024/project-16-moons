import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Overview = () => {
    const { id } = useParams(); // Extract recipe ID from URL
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
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
                setRecipeDetails(data); // Store the fetched recipe details
            } catch (err) {
                setError(err.message); // Store the error if fetching fails
            }
        };

        fetchRecipeDetails();
    }, [id]); // Fetch details whenever `id` changes

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!recipeDetails) {
        return <p>Loading...</p>; // Display loading while fetching data
    }

    return (
        <div className="recipe-overview">
            <h1>{recipeDetails.title}</h1>

            <img src={recipeDetails.image} alt={recipeDetails.title} />

            {/*Using dangerous code to render HTML inside response */}
            <p>
                <strong>Summary:</strong>
                <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
            </p>
            
            <a href={recipeDetails.sourceUrl} target="_blank" rel="noopener noreferrer">
                View Full Recipe
            </a>
        </div>
    );
};

export default Overview;
