function MealPlanner() {
  return (
    <div>
      <div>
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
        <title>Dish-It | Cooking All In One!</title>
      </div>
      <header className="header">
        <img
          className="logo"
          alt="Dish-It Logo"
          src="images/logoNavBar.png"
        ></img>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="section-How-To-Use" href="#how">
                How To Use
              </a>
            </li>
            <li>
              <Link to="/" className="main-nav-link">
                Go back
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>INSERT CODE HERE</main>
    </div>
  );
}

export default MealPlanner;
