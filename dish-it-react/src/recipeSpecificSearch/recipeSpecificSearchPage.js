import "../css/general.css";
import "../css/recipeSpecificSearchPage.css"
import RecipeSpecificSearchBody from "./recipeSpecificSearchComponents/recipeSpecificSearchBody";
import RecipeSpecificSearchNavbar from "./recipeSpecificSearchComponents/recipeSpecificSearchNavbar";

export default function RecipeSpecificSearchPage() {
    return (
        <div>
            <RecipeSpecificSearchNavbar />
            <RecipeSpecificSearchBody />    
        </div>
    )
}