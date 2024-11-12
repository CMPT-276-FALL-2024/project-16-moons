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
      <div className="recipe">
        <div className="hero">
          <div>
            <h1>{recipeData.title}</h1>
            <h2>Summary</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              consectetur fugiat tempora! Recusandae veniam, distinctio libero
              aperiam assumenda voluptate vitae quod voluptatibus provident
              fugit mollitia voluptatem non eaque earum corporis.
            </p>
            {/* {recipeData.summary} */}
            <button>Let's Start Cooking!</button>
          </div>

          <img
            src={recipeData.image}
            alt={recipeData.title}
            className="heroImg"
          />
        </div>
        <div className="recipeInformation">
          <div>
            <h1>Recipe Information</h1>
            <div className="ingredientList">
              <h2>Ingredients</h2>
              <ul>
                {recipeData.extendedIngredients.map((ingredient) => (
                  <li>
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>Cooking Time: {recipeData.readyInMinutes} minutes</p>
          <p>Servings: {recipeData.servings}</p>
        </div>
        <div>
          <h2>Instructions</h2>
          <ol>
            {recipeData.analyzedInstructions[0].steps.map((instruction) => (
              <li>{instruction.step}</li>
            ))}
          </ol>
        </div>
      </div>
    )
  );
};

export default GenerateRandomDish;
