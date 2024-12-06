import { useLocation } from "react-router-dom";
import { round } from "mathjs";
import ChatbotComponent from "../../chatBot/chatbot-component";

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
          <div className="grid grid--3-cols">
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
                <strong>This recipe is good for {recipe.yield} servings</strong>
              </p>
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-link btn"
              >
                <span className="recipe-link-name">
                  <strong>View Full Recipe</strong>
                </span>
              </a>
              {recipe.cautions && recipe.cautions.length > 0 && (
                <p className="caution-text">
                  <strong>CAUTION</strong> this dish includes:{" "}
                  {recipe.cautions.join(", ")}
                </p>
              )}
            </div>
            <div className="nutrition-facts">
              <h1>Nutrition Facts</h1>
              <div>
                <p>
                  {round(recipe.calories)} of <strong>Calories</strong>
                </p>
                {recipe.digest.map((nutrition, index) => (
                  <p key={index}>
                    {round(nutrition.total)} {nutrition.unit} of{" "}
                    <strong>{nutrition.label}</strong>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <ChatbotComponent />
      </main>
    </div>
  );
}

export default RecipeOverviewBody;
