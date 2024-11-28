import "../css/general.css";
import "../css/searchByIngredients.css";
import SearchByIngredients from "../searchByIngredients/searchByIngredients.js"
import SearchByIngredientsNavbar from "./components/searchByIngredientsNavBar.js";

export default function searchByIngredientsPage() {
    return (
        <div>
            <SearchByIngredientsNavbar/>
            <SearchByIngredients/>
        </div>
    )
}