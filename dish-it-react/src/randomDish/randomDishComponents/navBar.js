import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header class="navigation-bar">
      {/* Sends back to homepage */}
      <Link to="/">
        <img
          src="../../images/Dish-It-Smaller.png"
          class="image"
          alt="logo
          of Dish-It"
        />
      </Link>
      {/* Sends back to homepage */}
      <nav class="navbar">
        <Link to="/">GO BACK</Link>
      </nav>
    </header>
  );
};

export default NavBar;
