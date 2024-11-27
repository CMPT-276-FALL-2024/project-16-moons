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
            
            {/* All fetched ingredients for recipe from API*/}
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            
            {/* All health labels associated with recipe */}
            <h2>Health Labels</h2>
            <ul>
                {recipe.healthLabels.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>
            
            {/* All caution labels associated with recipe */}
            <h2>Caution Labels</h2>
            <ul>
                {recipe.cautions.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>
            
            {/* List of nutrients */}
            <h2>Nutrient List</h2>
            <ul>
                <li>{round(recipe.totalNutrients.ENERC_KCAL.quantity)} {recipe.totalNutrients.ENERC_KCAL.unit} of Calories</li>
                
                <h2>Fats</h2>
                <li>{round(recipe.totalNutrients.FAT.quantity)} {recipe.totalNutrients.FAT.unit} of Fat ({round(recipe.totalDaily.FAT.quantity, 1)}% of daily needs)</li>
                {recipe.digest[0].sub.map((nutrition, index) => (
                    <li key={index}>{round(nutrition.total)} {nutrition.unit} of {nutrition.label} ({round(nutrition.daily, 1)}% of daily needs)</li>
                ))}

                <h2>Carbs</h2>
                {recipe.digest[1].sub.map((nutrition, index) => (
                    <li key={index}>{round(nutrition.total)} {nutrition.unit} of {nutrition.label} ({round(nutrition.daily, 1)}% of daily needs)</li>
                ))}

                <h2>Others</h2>
                {recipe.digest.map((nutrition, index) => (
                    <li key={index}>{round(nutrition.total)} {nutrition.unit} of {nutrition.label} ({round(nutrition.daily, 1)}% of daily needs)</li>
                ))}
            </ul>
            
            {/* Link to full recipe */}
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">Click here to see the full recipe</a>
            
        </body>
    );
    }

export default RecipeOverviewBody;