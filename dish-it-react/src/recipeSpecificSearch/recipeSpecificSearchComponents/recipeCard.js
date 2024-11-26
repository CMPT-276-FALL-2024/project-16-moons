import { Link } from "react-router-dom";

function RecipeCard({ data }) {
  return (
    <div className="search-result">
      <Link to="/recipeOverview" state={{ recipeData: data }}>
        <img src={data.recipe.image} alt={data.recipe.label} />
        <p>{data.recipe.label}</p>
      </Link>
    </div>
  );
}

export default RecipeCard;