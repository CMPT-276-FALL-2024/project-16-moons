import { Link } from "react-router-dom";

function SearchByIngredientsNavbar() {
    return (
        <header className="header">
            {/* Link to the home page */}
        <Link to="/">
        <img
            src="/images/logoNavBar.png"
            className="logo"
            alt="logo
            of Dish-It"
        /></Link>
        <nav className="main-nav-list">
            {/* Spelled out link to home page */}
            <Link className="main-nav-link" to="/">BACK TO HOME</Link>
            {/* Link to documentation */}
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

export default SearchByIngredientsNavbar;
