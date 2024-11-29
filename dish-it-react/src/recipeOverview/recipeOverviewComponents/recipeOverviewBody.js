import { useLocation } from "react-router-dom";
import { round } from "mathjs";

function RecipeOverviewBody() {
  const location = useLocation();
  const { recipeData } = location.state || {};
  const recipe = recipeData.recipe;
  console.log(recipeData);
  return (
    <div>
      <main>
        <section className="hero" id="main">
          <h1 className="recipe-title">{recipe.label}</h1>
          <div className="grid grid--2-cols">
            <img
              src={recipe.image}
              className="recipe-image"
              alt={recipe.label}
            />
            <div className="main-details">
              <div className="section-ingredients">
                <h2>Ingredients</h2>
                <ul className="ingredients-list">
                  {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <p className="servings-text">
                This Dish is good for {recipe.yield} servings
              </p>
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-link"
              >
                <span class="recipe-link-name">View Full Recipe</span>
              </a>
            </div>
          </div>
          <div class="nutrition-facts">
            <h1>Nutrition Facts</h1>
            <div>
              <p>Calories: {round(recipe.calories)}</p>
              {recipe.digest.map((nutrition, index) => (
                <p key={index}>
                  {round(nutrition.total)} {nutrition.unit} of {nutrition.label}{" "}
                  ({round(nutrition.daily, 1)}% of daily needs)
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ul className="main-details">
        <li></li>
        <li>Servings: {recipe.yield}</li>
        {recipe.totalTime !== 0 && <li>Time: {recipe.totalTime} minutes</li>}
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
        <li>
          {round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
          {recipe.totalNutrients.ENERC_KCAL.unit} of Calories
        </li>

        <h2>Fats</h2>
        {recipe.digest[0].sub.map((nutrition, index) => (
          <li key={index}>
            {round(nutrition.total)} {nutrition.unit} of {nutrition.label} (
            {round(nutrition.daily, 1)}% of daily needs)
          </li>
        ))}

        <h2>Carbs</h2>
      </ul>

      {/* Link to full recipe */}
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
        Click here to see the full recipe
      </a>
    </div>
  );
}

export default RecipeOverviewBody;
