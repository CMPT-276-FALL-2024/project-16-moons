import { Link } from "react-router-dom";

function RecipeSpecificSearchNavbar() {
  return (
    <header className="header">
        <Link to="/">
        <img
            src="/images/logoNavBar.png"
            className="logo"
            alt="logo
            of Dish-It"
        /></Link>
        <nav className="main-nav-list">
            <Link className="main-nav-link" to="/">GO BACK</Link>
            <a
              href="https://docs.google.com/document/d/1JZCWgFncoqhTWbnXguZtalruUfB7CJaEjLOR9sbGqdo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="main-nav-link"
            >
              DOCUMENTATION
            </a>
        </nav>
    </header>
  )
}

export default RecipeSpecificSearchNavbar;
