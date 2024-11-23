import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import RandomDishPage from "./randomDish/randomDishPage";
import RecipeSpecificSearch from "./recipeSpecificSearch/recipeSpecificSearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/randomdish" element={<RandomDishPage />} />
      <Route path="/recipeSpecificSearch" element={<RecipeSpecificSearch />} />
    </Routes>
  </Router>
);
