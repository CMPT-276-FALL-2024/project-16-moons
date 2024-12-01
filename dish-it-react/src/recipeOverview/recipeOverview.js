import "../css/general.css";
import "../css/recipeOverview.css";
import RecipeOverViewNavbar from "./recipeOverviewComponents/recipeOverviewNavbar";
import RecipeOverviewBody from "./recipeOverviewComponents/recipeOverviewBody";

function RecipeOverview() {
  return (
    <div>
      <RecipeOverViewNavbar />
      <RecipeOverviewBody />
    </div>
  );
}

export default RecipeOverview;
