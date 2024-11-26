import React, { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY_RANDOM_DISH;

const GenerateRandomDish = () => {
  // Recipe Data
  const [recipeData, setRecipeData] = useState(null);
  // API Verification Process
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?includeNutrition=true&number=1&apiKey=" +
            apiKey
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
        <div className="hero" id="summary">
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
            <a href="#recipeinformation">
              <button>Let's Start Cooking! </button>
            </a>
          </div>
          <img
            src={recipeData.image}
            alt={recipeData.title}
            className="heroImg"
          />
        </div>
        <div className="recipeInformation" id="recipeinformation">
          <h1>Recipe Information</h1>
          <div className="gridContainer">
            {/* Recipe Information Block */}
            <div className="ingredientList gridBox">
              <h2>Ingredients</h2>
              <ul>
                {recipeData.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id || ingredient.name}>
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="altInformation gridBox">
              {/* Cooking Time & Serving Size Block */}
              <h3>Cooking Time</h3>
              <h3>{recipeData.readyInMinutes} minutes</h3>
              <h3>This recipe is for..</h3>
              <h3>{recipeData.servings} servings</h3>
            </div>
            <div className="nutrients gridBox">
              <h2>Nutrients</h2>
              <ul>
                {recipeData.nutrition?.nutrients?.map((nutrient, index) => (
                  <li key={nutrient.name || index}>
                    <strong>
                      {nutrient.amount} {nutrient.unit} {nutrient.name}
                    </strong>
                  </li>
                )) || <li>No nutrient information available.</li>}
              </ul>
            </div>
          </div>
        </div>
        {/* Instructions */}
        <div className="instructionsBackground" id="instructions">
          <h1>Instructions</h1>
          <div className="instructionsGrid">
            {recipeData.analyzedInstructions?.[0]?.steps?.length ? (
              recipeData.analyzedInstructions[0].steps.map((instruction, index) => (
                <div className="instructions" key={instruction.number || index}>
                  <p>
                    <strong>{instruction.number}</strong>. {instruction.step}
                  </p>
                </div>
              ))
            ) : (
              <p>No instructions available.</p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default GenerateRandomDish;
