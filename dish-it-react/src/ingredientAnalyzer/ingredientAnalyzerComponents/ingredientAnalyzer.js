import React, { useState } from "react";
import { Link } from "react-router-dom";
// const apiKey = process.env.REACT_APP_EDAMAM_APP_KEY_INGREDIENT_ANALYZER;
// const apiId = process.env.REACT_APP_EDAMAM_APP_ID_INGREDIENT_ANALYZER;
const apiId = process.env.REACT_APP_EDAMAM_APP_ID_BACKUP;
const apiKey = process.env.REACT_APP_EDAMAM_API_KEY_BACKUP;

const IngredientAnalyzer = () => {
  const [error, setError] = useState(null);
  const [ingredient, setIngredient] = useState("");
  const [nutrientsAnalysis, setNutrientsAnalysis] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the jsonData with the ingredients
    const jsonData = {
      ingr: ingredient
        .split(",") // Split input by commas into an array of ingredients
        .map((item) => {
          // Normalize spaces (to ensure consistency like '1tsp' or '1 tsp')
          const normalizedItem = item.trim().replace(/\s+/g, " "); // Replace multiple spaces with a single space

          // Check if quantity/unit is missing and normalize the input
          if (!normalizedItem.match(/^\d+\s+\w+/)) {
            return `1 ${normalizedItem}`; // Default to 1 unit if missing quantity/unit
          }
          return normalizedItem; // Return the normalized input if it's already correct
        })
        .filter((item) => item.length > 0), // Filter out any empty strings
    };

    try {
      const response = await fetch(
        `https://api.edamam.com/api/nutrition-details?app_id=${apiId}&app_key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized: Tokens have run out");
        }
        if (response.status === 501) {
          throw new Error("Incorrect usage: Check your input data");
        }
        throw new Error("Failed to fetch analysis");
      }

      const data = await response.json();
      setNutrientsAnalysis(data);
      console.log(nutrientsAnalysis);
    } catch (err) {
      setError(err.message);

      // Handle alerts directly in the catch block
      if (err.message.includes("Tokens have run out")) {
        alert("Dish-It's has ran out of requests for today sorry!");
      } else if (err.message.includes("Incorrect usage")) {
        alert(
          "The request was incorrectly formatted. Refer to How To Use Section"
        );
      } else {
        alert(
          "The request was incorrectly formatted. Refer to How To Use Section"
        );
      }

      console.error("Error:", err.message); // Log the error
    }
  };

  return (
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
              <a href="#how" className="main-nav-link">
                How To Use
              </a>
            </li>
            <li>
              <Link to="/" className="main-nav-link">
                Go back
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section
        className="ingredient-analyzer-section grid grid--2-cols"
        id="main"
      >
        <div className="input">
          <h1>Ingredient Analyzer</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => {
                setIngredient(e.target.value);
                setError(null);
              }}
              placeholder="Usage Example: 10 oz Chicken, 1 cup rice"
              className="user-input"
            />
            <button type="submit" className="btn">
              <h2>Analyze</h2>
            </button>
          </form>
        </div>
        {nutrientsAnalysis && (
          <div className="nutritionFacts">
            <h2>Nutrition Facts</h2>
            <p>Amount per serving</p>
            <p>
              <strong>Calories: </strong> {nutrientsAnalysis.calories}
            </p>
            <div className="grid nutrition-grid--2-cols">
              <div>
                <p className="hidden">Amount</p>
                <ul>
                  <li>
                    <strong>Total Fat</strong>{" "}
                    {nutrientsAnalysis.totalNutrients.FAT.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalNutrients.FAT.unit}
                    <ul className="subNutrients">
                      <li className="left-margin-extra">
                        Satured Fat{" "}
                        {nutrientsAnalysis.totalNutrients.FASAT.quantity.toFixed(
                          1
                        )}{" "}
                        {nutrientsAnalysis.totalNutrients.FASAT.unit}
                      </li>
                      {nutrientsAnalysis.totalNutrients.FATRN && (
                        <li className="left-margin-extra">
                          Trans Fat{" "}
                          {nutrientsAnalysis.totalNutrients.FATRN.quantity.toFixed(
                            1
                          )}{" "}
                          {nutrientsAnalysis.totalNutrients.FATRN.unit}
                        </li>
                      )}
                    </ul>
                  </li>
                  <li>
                    <strong>Cholesterol</strong>{" "}
                    {nutrientsAnalysis.totalNutrients.CHOLE.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalNutrients.CHOLE.unit}
                  </li>
                  <li>
                    <strong>Sodium</strong>{" "}
                    {nutrientsAnalysis.totalNutrients.NA.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalNutrients.NA.unit}
                  </li>
                  <li>
                    <strong>Carbohydrate </strong>
                    {nutrientsAnalysis.totalNutrients.CHOCDF.quantity.toFixed(
                      1
                    )}{" "}
                    {nutrientsAnalysis.totalNutrients.CHOCDF.unit}
                    <ul className="subNutrients">
                      {nutrientsAnalysis.totalNutrients.FIBTG && (
                        <li className="left-margin-extra">
                          Dietary Fiber{" "}
                          {nutrientsAnalysis.totalNutrients.FIBTG.quantity.toFixed(
                            1
                          )}{" "}
                          {nutrientsAnalysis.totalNutrients.FIBTG.unit}
                        </li>
                      )}
                      {nutrientsAnalysis.totalNutrients.SUGAR && (
                        <li className="left-margin-extra">
                          Total Sugars{" "}
                          {nutrientsAnalysis.totalNutrients.SUGAR.quantity.toFixed(
                            1
                          )}{" "}
                          {nutrientsAnalysis.totalNutrients.SUGAR.unit}
                        </li>
                      )}
                      {nutrientsAnalysis.totalNutrients.SUGAR && (
                        <li className="left-margin-extra">
                          {nutrientsAnalysis.totalNutrients.SUGAR.label ===
                          "Sugars, total including NLEA"
                            ? "Includes - Added Sugars"
                            : ""}
                        </li>
                      )}
                    </ul>
                  </li>
                  <li>
                    <strong>Protein </strong>
                    {nutrientsAnalysis.totalNutrients.PROCNT.quantity.toFixed(
                      1
                    )}{" "}
                    {nutrientsAnalysis.totalNutrients.PROCNT.unit}
                  </li>
                  <li className="left-margin-extra">
                    Vitamin D
                    {nutrientsAnalysis.totalNutrients.VITD.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalNutrients.VITD.unit}
                  </li>
                  <li className="left-margin-extra">
                    Calcium{" "}
                    {nutrientsAnalysis.totalNutrients.CA.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalNutrients.CA.unit}
                  </li>
                  <li className="left-margin-extra">
                    Iron{" "}
                    {nutrientsAnalysis.totalNutrients.FE.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalNutrients.FE.unit}
                  </li>
                  <li className="left-margin-extra">
                    Potassium{" "}
                    {nutrientsAnalysis.totalNutrients.K.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalNutrients.K.unit}
                  </li>
                </ul>
              </div>
              <div>
                <p> % Daily Value*</p>
                <ul>
                  <li>
                    {nutrientsAnalysis.totalDaily.FAT.quantity.toFixed(1)}
                    {""}
                    {nutrientsAnalysis.totalDaily.FAT.unit}
                  </li>
                  <li>
                    {nutrientsAnalysis.totalDaily.FASAT.quantity.toFixed(1)}
                    {""}
                    {nutrientsAnalysis.totalDaily.FASAT.unit}
                  </li>
                  {nutrientsAnalysis.totalNutrients.FATRN && <li>-</li>}
                  <li>
                    {nutrientsAnalysis.totalDaily.CHOLE.quantity.toFixed(1)}
                    {""}
                    {nutrientsAnalysis.totalDaily.CHOLE.unit}
                  </li>
                  <li>
                    {nutrientsAnalysis.totalDaily.NA.quantity.toFixed(1)}
                    {""}
                    {nutrientsAnalysis.totalDaily.NA.unit}
                  </li>
                  <li>
                    {nutrientsAnalysis.totalDaily.CHOCDF.quantity.toFixed(1)}
                    {""}
                    {nutrientsAnalysis.totalDaily.CHOCDF.unit}
                  </li>
                  {nutrientsAnalysis.totalNutrients.FIBTG && (
                    <li>
                      {nutrientsAnalysis.totalDaily.FIBTG.quantity.toFixed(1)}
                      {""}
                      {nutrientsAnalysis.totalDaily.FIBTG.unit}
                    </li>
                  )}
                  {nutrientsAnalysis.totalNutrients.SUGAR && <li>-</li>}
                  {nutrientsAnalysis.totalNutrients.SUGAR && <li>-</li>}
                  <li>
                    {nutrientsAnalysis.totalDaily.PROCNT.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalDaily.PROCNT.unit}
                  </li>
                  <li>
                    {nutrientsAnalysis.totalDaily.VITD.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalDaily.VITD.unit}
                  </li>
                  <li>
                    {nutrientsAnalysis.totalDaily.CA.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalDaily.CA.unit}
                  </li>
                  <li>
                    {nutrientsAnalysis.totalDaily.FE.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalDaily.FE.unit}
                  </li>
                  <li>
                    {nutrientsAnalysis.totalDaily.K.quantity.toFixed(1)}{" "}
                    {nutrientsAnalysis.totalDaily.K.unit}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
      <section class="section-How-To-Use" id="how">
        <h1 className="how-to-use-Header">How To Use</h1>
        <p>Simply type into any food that you'd like for Dish-It to analyze!</p>
        <p>
          <strong>Example:</strong> 5 cups of cheese, 0.5 Oz of lettuce and 2/3
          cups of rice.
        </p>

        <li>
          <p>
            <strong>Accepted Units of Measurements</strong>
          </p>
          <ul>Cup/C</ul>
          <ul>Ounce/Oz</ul>
        </li>
      </section>
    </div>
  );
};

export default IngredientAnalyzer;
