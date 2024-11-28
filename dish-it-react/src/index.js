import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homePage/homepage";
import RandomDishPage from "./randomDish/randomDishPage";
import IngredientAnalyzerPage from "./ingredientAnalyzer/ingredientAnalyzerPage";
import RecipeSpecificSearch from "./recipeSpecificSearch/recipeSpecificSearchPage";
import searchByIngredientsPage from "./searchByIngredients/searchByIngredientsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/random-recipe" element={<RandomDishPage />} />
      <Route path="/ingredient-analyzer" element={<IngredientAnalyzerPage />} />
      <Route path="/recipe-search" element={<RecipeSpecificSearch />} />
      <Route path="/ingredient-search" element={<searchByIngredientsPage />} />
    </Routes>
  </Router>
);
