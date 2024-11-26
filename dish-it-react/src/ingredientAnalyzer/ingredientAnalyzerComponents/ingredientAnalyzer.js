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
      ingr: ingredient.split(",").map((item) => item.trim()),
    };

    try {
      const response = await fetch(
        "https://api.edamam.com/api/nutrition-details?app_id=" +
          "cdcaac6b" +
          "&app_key=" +
          "090af090e285c5a3f51c901e67299657",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch analysis");
      }

      const data = await response.json();
      setNutrientsAnalysis(data);
    } catch (err) {
      setError(err.message); // Set error state to display to the user
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
      <section className="ingredient-analyzer-section grid grid--2-cols">
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
              placeholder="Usage Example: 10 oz of Chicken"
              className="user-input"
            />
            <button type="submit" className="btn">
              <p></p>
              Analyze
            </button>
          </form>
          {error && (
            <div className="error-message">
              Seems like your input is invalid.
            </div>
          )}{" "}
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
                      <li className="left-margin-extra">
                        Trans Fat{" "}
                        {nutrientsAnalysis.totalNutrients.FATRN.quantity.toFixed(
                          1
                        )}{" "}
                        {nutrientsAnalysis.totalNutrients.FATRN.unit}
                      </li>
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
                      <li className="left-margin-extra">
                        Dietary Fiber{" "}
                        {nutrientsAnalysis.totalNutrients.FIBTG.quantity.toFixed(
                          1
                        )}{" "}
                        {nutrientsAnalysis.totalNutrients.FIBTG.unit}
                      </li>
                      <li className="left-margin-extra">
                        Total Sugars{" "}
                        {nutrientsAnalysis.totalNutrients.SUGAR.quantity.toFixed(
                          1
                        )}{" "}
                        {nutrientsAnalysis.totalNutrients.SUGAR.unit}
                      </li>
                      <li className="left-margin-extra">
                        {nutrientsAnalysis.totalNutrients.SUGAR.label ===
                        "Sugars, total including NLEA"
                          ? "Includes - Added Sugars"
                          : ""}
                      </li>
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
                  <li>-</li>
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
                  <li>
                    {nutrientsAnalysis.totalDaily.FIBTG.quantity.toFixed(1)}
                    {""}
                    {nutrientsAnalysis.totalDaily.FIBTG.unit}
                  </li>
                  <li>-</li>
                  <li>-</li>
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
    </div>
  );
};

export default IngredientAnalyzer;
