import { useLocation } from 'react-router-dom'
import { round } from 'mathjs';

function RecipeOverviewBody() {
    const location = useLocation()
    const { recipeData } = location.state || {};
    const recipe = recipeData.recipe;
    console.log(recipeData);
    return (
        <div>
            <h1>Recipe Overview</h1>
            <img src={recipe.image} alt={recipeData.recipe.label} />
            <h2>{recipe.label}</h2>
            <p>{recipe.description}</p>
            <ul className="main-details">
                <li>Calories: {round(recipe.calories)}</li>
                <li>Servings: {recipe.yield}</li>
                {recipe.totalTime !== 0 && (
                    <li>Time: {recipe.totalTime} minutes</li>
                )}
            </ul>
        </div>
    );
    }

export default RecipeOverviewBody;