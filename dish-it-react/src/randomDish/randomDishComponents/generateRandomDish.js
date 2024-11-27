import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollUp from "../../scrollUp/scrollUp";

const apiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;
const apiUa = process.env.REACT_APP_X_RAPIDAPI_UA;
const apiHost = process.env.REACT_APP_X_RAPID_HOST;

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
          "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?includeNutrition=true&number=1",
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
    console.log("attempt");
    fetchRecipeData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error} </p>;
  const summaryFiltered = recipeData.summary.replace(/<[^>]*>/g, "").trim();

  return (
    recipeData && (
      <div>
        <head>
          <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
          <title>Dish-It | Cooking All In One!</title>
        </head>
        <header className="header">
          <img
            className="logo"
            alt="Dish-It Logo"
            src="images/logoNavBar.png"
          ></img>
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <a className="main-nav-link" href="#home">
                  Summary
                </a>
              </li>
              <li>
                <Link to="/" className="main-nav-link">
                  Go back
                </Link>
              </li>
              <li>
                <a
                  className="main-nav-link"
                  href="https://docs.google.com/document/d/1JZCWgFncoqhTWbnXguZtalruUfB7CJaEjLOR9sbGqdo/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="section-summary" id="home">
            <h2 className="heading-secondary bottom-less-margin">
              {recipeData.title}
            </h2>
            <div className="grid grid--2-cols grid--center-v">
              {" "}
              <div>
                <img
                  src={recipeData.image}
                  alt={recipeData.title}
                  className="summary-image"
                />
              </div>
              <div>
                <p className="summary-description summary-margin">
                  {summaryFiltered}
                </p>
                <p className="summary-description">
                  This recipe will be ready in{" "}
                  <strong>{recipeData.readyInMinutes} minutes</strong> and is
                  for <strong>{recipeData.servings} servings</strong>
                </p>
              </div>
            </div>
          </section>
          <section className="section-extra-information">
            <div className="grid grid--3-cols">
              <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                  {recipeData.extendedIngredients.map((ingredient) => (
                    <li>
                      {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="instructions">
                <h2>Instructions</h2>
                {recipeData.analyzedInstructions[0].steps.map((instruction) => (
                  <li>
                    <strong>{instruction.number}</strong>. {instruction.step}
                  </li>
                ))}
              </div>
              <div className="nutrients">
                <h2>Nutrients</h2>
                <ul>
                  {" "}
                  {recipeData.nutrition.nutrients.map((nutrient) => (
                    <li>
                      <strong>
                        {nutrient.amount.toFixed(1)} {nutrient.unit}
                      </strong>{" "}
                      of {nutrient.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
        <ScrollUp></ScrollUp>
      </div>
    )
  );
};

export default GenerateRandomDish;
