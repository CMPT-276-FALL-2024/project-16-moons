import React from "react";
import { useEffect, useState } from "react";

const appId = process.env.REACT_APP_EDAMAM_APP_ID_INGREDIENT_ANALYZER;
const appKey = process.env.REACT_APP_EDAMAM_APP_KEY_INGREDIENT_ANALYZER;

const IngredientAnalyzer = () => {
  const [ingredient, setIngredient] = useState("");
  let [ingredientList, setIngredientList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("User entered ingredient:", ingredient);
    // Placing it into an array that is split each time we detect a ","
    ingredientList = ingredient.split(",").map((item) => item.trim());
    const jsonData = {
      ingr: ingredientList,
    };
    console.log(jsonData);

    // API calling
    //const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${appKey}`);
    try {
      const response = await fetch(
        `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${appKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter an ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)} // Updates state with user input
            className="user-input"
          />
          <button type="submit">Analyze</button>
        </form>
      </div>
    </div>
  );
};
export default IngredientAnalyzer;
