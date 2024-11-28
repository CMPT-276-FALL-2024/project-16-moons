import { Link } from "react-router-dom";

function RecipeSpecificSearchNavbar() {
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
        {/* Link to documentation */}
      </nav>
    </header>
  );
}

export default RecipeSpecificSearchNavbar;
