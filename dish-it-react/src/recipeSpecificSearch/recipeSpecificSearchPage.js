import "../css/general.css";
import "../css/recipeSpecificSearchPage.css"
import RecipeSpecificSearchBody from "./recipeSpecificSearchComponents/recipeSpecificSearchBody";
import RecipeSpecificSearchNavbar from "./recipeSpecificSearchComponents/recipeSpecificSearchNavbar";


// Main page for the recipe specific search page
export default function RecipeSpecificSearchPage() {
    return (
        <div id="main">
            <RecipeSpecificSearchNavbar />
            <RecipeSpecificSearchBody />    
        </div>
    )
}