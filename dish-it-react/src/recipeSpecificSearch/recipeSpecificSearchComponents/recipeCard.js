import { Link } from "react-router-dom";

function RecipeCard({ data, searchInput }) {
  return (
    <div className="search-result">
      <Link to="/recipeOverview" state={{ recipeData: data, searchInput: searchInput }}>
        <img src={data.recipe.image} alt={data.recipe.label} />
        <p>{data.recipe.label}</p>
      </Link>
    </div>
  );
}

export default RecipeCard;