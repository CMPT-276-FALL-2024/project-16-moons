import { useLocation } from 'react-router-dom'
import { round } from 'mathjs';

function RecipeOverviewBody() {
    const location = useLocation()
    const { recipeData } = location.state || {};
    const recipe = recipeData.recipe;
    console.log(recipeData);
    return (
        <body>
            <h1>Recipe Overview: {recipe.label}</h1>
            <img src={recipe.image} alt={recipe.label} />
            <ul className="main-details">
                <li>Calories: {round(recipe.calories)}</li>
                <li>Servings: {recipe.yield}</li>
                {recipe.totalTime !== 0 && (
                    <li>Time: {recipe.totalTime} minutes</li>
                )}
            </ul>

            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2>Health Labels</h2>
            <ul>
                {recipe.healthLabels.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>

            <h2>Caution Labels</h2>
            <ul>
                {recipe.cautions.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>
            
            <h2>Nutrient List</h2>
            <ul>
                <li>{round(recipe.totalNutrients.ENERC_KCAL.quantity)} {recipe.totalNutrients.ENERC_KCAL.unit} of Calories</li>
                <li>{round(recipe.totalNutrients.FAT.quantity)} {recipe.totalNutrients.FAT.unit} of Fat</li>
                {recipe.digest[0].sub.map((nutrition, index) => (
                    <li key={index}>{round(nutrition.total)} {nutrition.unit} of {nutrition.label}</li>
                ))}
                {recipe.digest[1].sub.map((nutrition, index) => (
                    <li key={index}>{round(nutrition.total)} {nutrition.unit} of {nutrition.label}</li>
                ))}
                {recipe.digest.map((nutrition, index) => (
                    <li key={index}>{round(nutrition.total)} {nutrition.unit} of {nutrition.label}</li>
                ))}
            </ul>

            <a href={recipe.url} target="_blank" rel="noopener noreferrer">Click here to see the full recipe</a>
            
        </body>
    );
    }

export default RecipeOverviewBody;