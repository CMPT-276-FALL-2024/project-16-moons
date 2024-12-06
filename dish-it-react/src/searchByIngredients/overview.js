import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/general.css";
import OverviewNavbar from "./components/overviewNavbar.js";
import ChatbotComponent from "../chatBot/chatbot-component";

const Overview = () => {
  const { id } = useParams(); // Extract recipe ID from URL
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [error, setError] = useState(null);
  console.log(recipeDetails);
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

  const protein =
    recipeDetails?.summary?.match(/(\d+g of protein)/)?.[1] || "N/A";
  const fat = recipeDetails?.summary?.match(/(\d+g of fat)/)?.[1] || "N/A";
  const calories =
    recipeDetails?.summary?.match(/(\d+ calories)/)?.[1] || "N/A";

  return (
    <div>
      <OverviewNavbar />
      <ChatbotComponent />
      <main>
        <section className="recipe-results-SBI">
          <div className="grid grid--3-cols">
            <div className="results-image-container">
              <h1 className="results-title-SBI">{recipeDetails.title}</h1>
              <img
                src={recipeDetails.image}
                className="results-image-SBI"
                alt={recipeDetails.title}
              />
            </div>

            <div className="main-details">
              <div className="section-ingredients-SBI">
                <h2>Ingredients</h2>
                <ul className="ingredients-list">
                  {recipeDetails.extendedIngredients.map(
                    (ingredient, index) => (
                      <li key={ingredient.id}>
                        <b>
                          {ingredient.amount} {ingredient.unit}
                        </b>{" "}
                        of {ingredient.nameClean}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="section-ingredients-SBI">
                <h2>Nutrition Facts</h2>
                <li>
                  <b>
                    {calories !== "N/A" ? (<p>{calories}</p>) : (<p>Calories not available</p>)}
                    {protein !== "N/A" ? (<p>{protein}</p>) : (<p>Protein not available</p>)}
                    {fat !== "N/A" ? (<p>{fat}</p>) : (<p>Fat not available</p>)}
                  </b>
                </li>
              </div>

              <p className="servings-text-SBI">
                <strong>
                  This recipe is good for <b>{recipeDetails.servings}</b>{" "}
                  servings
                </strong>
              </p>
              <p></p>
              {recipeDetails.preparationMinutes ? (<p className="cooking-time-SBI">
                <strong>
                  <b>{recipeDetails.title}</b> will take{" "}
                  <b>{recipeDetails.preparationMinutes}</b> minutes to prepare
                  and <b>{recipeDetails.cookingMinutes}</b> minutes to cook.
                </strong>
              </p>):(<p className="cooking-time-SBI"> <strong>Time to prepare and cook this recipe is not available</strong></p>)}

              <a
                href={recipeDetails.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-link-SBI btn"
              >
                <span class="recipe-link-name">
                  <strong>View Full Recipe</strong>
                </span>
              </a>
            </div>
            {recipeDetails.analyzedInstructions >0 ? (<div className="section-instructions-SBI">
              <h2>Instructions:</h2>
              {recipeDetails.analyzedInstructions.map((instruction, index) => (
                <div key={index}>
                  <ol>
                    {instruction.steps.map((step) => (
                      <li key={step.number}>
                        <b>Step {step.number}:</b> {step.step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>): (<div className="section-instructions-SBI"><h2>No Instructions Immediately Available</h2></div>)}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Overview;
