import "../css/general.css";
import "../css/searchByIngredients.css";
import SearchByIngredients from "./components/searchByIngredients.js"
import SearchByIngredientsNavbar from "./components/searchByIngredientsNavbar.js";

export default function SearchByIngredientsPage() {
    return (
        <div>
            <SearchByIngredientsNavbar/>
            <SearchByIngredients/>
        </div>
    )
}