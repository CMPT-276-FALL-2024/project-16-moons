import React from "react";
import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY_RANDOM_DISH;

const GenerateRandomDish = () => {
  // Recipe Data
  const [recipeData, setRecipeData] = useState(null);
  // API Verification Proccess
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const cachedRecipe = localStorage.getItem("ca");
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?number=1&apiKey=" + apiKey
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipe");
        }

        const data = await response.json();
        setRecipeData(data.recipes[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error} </p>;

  return (
    recipeData && (
      <div>
        <h1>{recipeData.title}</h1>
        <p>Cooking Time: {recipeData.readyInMinutes} minutes</p>
        <p>Servings: {recipeData.servings}</p>
        <img src={recipeData.image} alt={recipeData.title} />
      </div>
    )
  );
};

export default GenerateRandomDish;
