import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function RecipeOverviewNavbar() {
  const location = useLocation();
  const { searchInput } = location.state || {};

  return (
    <header className="header">
      {/* Link to the home page */}
      <Link to="/">
        <img
          src="/images/logoNavBar.png"
          className="logo"
          alt="logo
            of Dish-It"
        />
      </Link>
      <nav className="main-nav-list">
        {/* Spelled out link to home page */}
        <Link className="main-nav-link" to="/">
          Back To Home
        </Link>
        {/* Return to search recipe with whatever was searched */}
        <Link
          className="main-nav-link"
          to="/recipe-search"
          state={{ recipe: searchInput }}
        >
          Back To Search
        </Link>
        {/* Link to documentation */}
        <a
          href="https://docs.google.com/document/d/1JZCWgFncoqhTWbnXguZtalruUfB7CJaEjLOR9sbGqdo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="main-nav-link"
        >
          Documentation
        </a>
      </nav>
    </header>
  );
}

export default RecipeOverviewNavbar;
