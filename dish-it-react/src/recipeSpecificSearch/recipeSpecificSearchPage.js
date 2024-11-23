import React from "react";
import { useLocation } from 'react-router-dom'


export default function RecipeSpecificSearchPage({ recipeToSearchFor }) {
    const location = useLocation()
    const { recipe } = location.state || {};
  
    return (
        <div>
            <h1>Recipe Specific Search Page</h1>
            <h1>{recipe}</h1>
        </div>
    )
}