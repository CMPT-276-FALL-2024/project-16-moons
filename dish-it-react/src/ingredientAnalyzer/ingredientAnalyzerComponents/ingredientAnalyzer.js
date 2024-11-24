import React, { useState } from "react";

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
        "https://api.edamam.com/api/nutrition-details?app_id=d4406b35&app_key=b6dea5d36362f9277434b75f9598104b",
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
      <h1>Ingredient Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter ingredients, separated by commas"
          className="user-input"
        />
        <button type="submit">Analyze</button>
      </form>
      {/* {error && <div style={{ color: "red" }}>{error}</div>}{" "} */}
      {nutrientsAnalysis && (
        <div className="nutritionFacts">
          <h2>Nutrition Facts</h2>
          <h4>Amount per serving</h4>
          <h3>
            <strong>Calories </strong> {nutrientsAnalysis.calories}
          </h3>
          <p> % Daily Value*</p>
          <div className="container">
            <div>
              {" "}
              <ul>
                <li>
                  <strong>Total Fat</strong>{" "}
                  {nutrientsAnalysis.totalNutrients.FAT.quantity.toFixed(1)}{" "}
                  {nutrientsAnalysis.totalNutrients.FAT.unit}
                  <ul className="subNutrients">
                    <li>
                      Satured Fat{" "}
                      {nutrientsAnalysis.totalNutrients.FASAT.quantity.toFixed(
                        1
                      )}{" "}
                      {nutrientsAnalysis.totalNutrients.FASAT.unit}
                    </li>
                    <li>
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
                    <li>
                      Dietary Fiber{" "}
                      {nutrientsAnalysis.totalNutrients.FIBTG.quantity.toFixed(
                        1
                      )}{" "}
                      {nutrientsAnalysis.totalNutrients.FIBTG.unit}
                    </li>
                    <li>
                      Total Sugars{" "}
                      {nutrientsAnalysis.totalNutrients.SUGAR.quantity.toFixed(
                        1
                      )}{" "}
                      {nutrientsAnalysis.totalNutrients.SUGAR.unit}
                    </li>
                    <li>
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
                </li>
                <li>
                  Vitamin D
                  {nutrientsAnalysis.totalNutrients.VITD.quantity.toFixed(1)}{" "}
                  {nutrientsAnalysis.totalNutrients.VITD.unit}
                </li>
                <li>
                  Calcium{" "}
                  {nutrientsAnalysis.totalNutrients.CA.quantity.toFixed(1)}{" "}
                  {nutrientsAnalysis.totalNutrients.CA.unit}
                </li>
                <li>
                  Iron {nutrientsAnalysis.totalNutrients.FE.quantity.toFixed(1)}{" "}
                  {nutrientsAnalysis.totalNutrients.FE.unit}
                </li>
                <li>
                  Potassium{" "}
                  {nutrientsAnalysis.totalNutrients.K.quantity.toFixed(1)}{" "}
                  {nutrientsAnalysis.totalNutrients.K.unit}
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientAnalyzer;
