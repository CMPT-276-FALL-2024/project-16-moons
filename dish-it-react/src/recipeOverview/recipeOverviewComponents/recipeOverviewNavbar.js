import { Link } from "react-router-dom";

function RecipeOverviewNavbar() {
  return (
    <header className="navigation-bar">
        <Link to="/">
        <img
            src="./images/Dish-It-Smaller.png"
            class="image"
            alt="logo
            of Dish-It"
        /></Link>
        <nav className="navbar">
            <Link to="/">BACK TO HOME</Link>
        </nav>
    </header>
  )
}

export default RecipeOverviewNavbar;