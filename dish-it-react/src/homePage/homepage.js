import "../css/homepage.css"; // Importing first stylesheet
import "../css/general.css"; // Importing second stylesheet

import { Link } from "react-router-dom";
import FoodFactComponent from "./homepageComponents/foodFactComponent";

function Homepage() {
  return (
    <html>
      <head>
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
        <title>Dish-It | Cooking All In One!</title>
      </head>
      <header className="header">
        <img className="logo" alt="Dish-It Logo" src="images/logo.png"></img>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                How it works
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Documentation
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <main>
          <section className="section-search">
            <div class="search">
              <img
                src="/images/logo3.png"
                id="Dish-It-Search-Logo"
                alt="Dish it logo"
                className="search-image"
              />
              {/* <FoodFactComponent /> */}
              <div className="search-menu">
                <div className="search-menu-content grid grid--2-cols">
                  <a href="recipe-search-results.html" class="btn btn--full">
                    Search By Recipe Name
                  </a>
                  <a
                    href="ingredient-search-results.html"
                    class="btn btn--full"
                  >
                    Search By Ingredients
                  </a>
                  <Link to="/ingredient-analyzer" class="btn btn--full">
                    Ingredient Analyzer
                  </Link>
                  <Link to="/randomdish" class="btn btn--full">
                    Random Recipe
                  </Link>
                  <Link to="/mealplanner" class="btn btn--full">
                    Meal Planner
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="section-features">
            <div className="container">
              <span className="subheading">Features</span>
              <h2 className="heading-secondary">
                Checkout what each of our features do!
              </h2>
            </div>
            <div class="container grid grid--2-cols grid--center-v">
              <div className="feature">
                <p class="feature-name">Recipe Search</p>
                <p className="feature-description">
                  Simply enter the name of any dish you're craving like
                  "Brownies" or "Chicken Katsu" and start cooking.
                </p>
              </div>
              <div className="feature-img">
                <img src="images/placeholder1.jpg" alt="gif of function"></img>
              </div>
              <div className="feature-img">
                <img src="images/placeholder2.jpg" alt="gif of function"></img>
              </div>
              <div className="feature">
                <p class="feature-name">Random Recipe</p>
                <p className="feature-description">
                  Not sure what to eat? Let Dish-It choose for you with just a
                  click!
                </p>
              </div>
              <div className="feature">
                <p class="feature-name">Meal Planner</p>
                <p className="feature-description">
                  Want to create your own personalized diet? Well start creating
                  now today using Dish-It!
                </p>
              </div>
              <div className="feature-img">
                <img src="images/placeholder3.jpg" alt="gif of function"></img>
              </div>
              <div className="feature-img">
                <img src="images/placeholder4.jpg" alt="gif of function"></img>
              </div>
              <div className="feature">
                <p class="feature-name">Ingredient Analyzer</p>
                <p className="feature-description">
                  List down your ingredients and have Dish-It analyze it for you
                  and give you back an estimate in their nutrient values.
                </p>
              </div>
              <div className="feature top-margin-extra">
                <p class="feature-name">Random Food Fact</p>
                <p className="feature-description">
                  A simple but yet useful tool. Each time you visit our website
                  we will display a fun fact regarding food!
                </p>
              </div>
              <div className="feature top-margin-extra">
                <p class="feature-name">Nutritional Chatbot</p>
                <p className="feature-description">
                  Got questions to ask regarding your foods like "How much
                  Vitamin C is in 2 Apples?" let our Chat Bot know!
                </p>
              </div>
            </div>
          </section>
          <section className="section-about">
            <span className="subheading">About The Project</span>
            <div class="grid grid--2-cols">
              <div>
                <p class="about-description">
                  <h2 className="heading-secondary bottom-less-margin">
                    About Dish-It
                  </h2>
                  Dish-It is a project developed by a team of four students from
                  Simon Fraser University. This project was created as a part of
                  the CMPT 276 Final Project. Our design hopes to help
                  individuals looking to eat healthier by understanding what
                  goes into their food, explore new cuisines or cooking
                  techniques, and simplify meal planning.
                </p>
                <p class="about-api-description">
                  <h2 className="heading-secondary bottom-less-margin">
                    APIs used in the project
                  </h2>
                  Special thanks to <strong>Spoonacular</strong> and{" "}
                  <strong>Edamam</strong> for providing access to their APIs for
                  this project.
                </p>
                <div className="about-api-logos">
                  <img
                    className="api-logo"
                    src="images/api-logos/edamam.png"
                  ></img>
                  <img
                    className="api-logo"
                    src="images/api-logos/spoonacular.png"
                  ></img>
                </div>
              </div>
              <div class="grid-collage grid--3-cols">
                <img
                  class="image-collage"
                  src="images/collages/collage-1.jpg"
                ></img>
                <img
                  class="image-collage"
                  src="images/collages/collage-2.jpg"
                ></img>
                <img
                  class="image-collage"
                  src="images/collages/collage-3.jpg"
                ></img>
                <img
                  class="image-collage"
                  src="images/collages/collage-4.jpg"
                ></img>
                <img
                  class="image-collage"
                  src="images/collages/collage-5.jpg"
                ></img>
                <img
                  class="image-collage"
                  src="images/collages/collage-6.jpg"
                ></img>
                <img
                  class="image-collage"
                  src="images/collages/collage-7.jpg"
                ></img>
                <img
                  class="image-collage"
                  src="images/collages/collage-8.jpg"
                ></img>
                <img
                  class="image-collage"
                  src="images/collages/collage-9.jpg"
                ></img>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
    //   <ChatBot />
    //   <ScrollUp />
    //   <AboutTheProject />
    // </div>
  );
}

export default Homepage;
