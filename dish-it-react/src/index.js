import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homePage/homepage";
import RandomDishPage from "./randomDish/randomDishPage";
import IngredientAnalyzerPage from "./ingredientAnalyzer/ingredientAnalyzerPage";
import RecipeSpecificSearch from "./recipeSpecificSearch/recipeSpecificSearchPage";
import RecipeOverview from "./recipeOverview/recipeOverview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/randomdish" element={<RandomDishPage />} />
      <Route path="/ingredient-analyzer" element={<IngredientAnalyzerPage />} />
      <Route path="/recipeSpecificSearch" element={<RecipeSpecificSearch />} />
      <Route path="/recipeOverview" element={<RecipeOverview />} />
    </Routes>
  </Router>
);
