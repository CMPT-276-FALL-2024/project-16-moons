import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homePage/homepage";
import RandomDishPage from "./randomDish/randomDishPage";
import IngredientAnalyzerPage from "./ingredientAnalyzer/ingredientAnalyzerPage";
import RecipeSpecificSearch from "./recipeSpecificSearch/recipeSpecificSearchPage";
import SearchByIngredientsPage from "./searchByIngredients/searchByIngredientsPage";
import RecipeOverview from "./recipeOverview/recipeOverview";
import Overview from "./searchByIngredients/overview";
import SearchByIngredients from "./searchByIngredients/components/searchByIngredients";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/random-recipe" element={<RandomDishPage />} />
      <Route path="/ingredient-analyzer" element={<IngredientAnalyzerPage />} />
      <Route path="/recipe-search" element={<RecipeSpecificSearch />} />
      <Route path="/ingredient-search" element={<SearchByIngredientsPage />} />
      <Route path="/recipe-overview" element={<RecipeOverview />} />
      <Route path="/" element={<SearchByIngredients />} />
      <Route path="/recipe-overview/:id" element={<Overview />} /> {/* Route with ID */}
    </Routes>
  </Router>
);
