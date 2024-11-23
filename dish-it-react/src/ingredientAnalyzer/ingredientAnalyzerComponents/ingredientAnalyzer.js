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
        <div>
          <h2>Nutrition Facts</h2>
          <h4>Amount per serving</h4>
          <h3>
            <strong>Calories:</strong> {nutrientsAnalysis.calories}
          </h3>
          <ul>
            <li>
              {" "}
              <strong>Total Fat:</strong>{" "}
              {nutrientsAnalysis.totalNutrients.FAT.quantity} g
            </li>
            <li>Cholesterol</li>
            <li>Sodium</li>
            <li>
              <strong>Carbohydrate</strong>{" "}
              {nutrientsAnalysis.totalNutrients.CHOCDF.quantity} g
            </li>
            <li>
              <strong>Protein:</strong>{" "}
              {nutrientsAnalysis.totalNutrients.PROCNT.quantity} g
            </li>
            <li>Vitamin D</li>
            <li>Calcium</li>
            <li>Iron</li>
            <li>Potassium</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default IngredientAnalyzer;
