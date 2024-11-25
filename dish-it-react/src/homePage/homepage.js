import "../css/homepage.css"; // Importing first stylesheet
import "../css/general.css"; // Importing second stylesheet

import { Link } from "react-router-dom";
import FoodFactComponent from "./homepageComponents/foodFactComponent";
import ChatbotComponent from "../chatBot/chatbot-component";
import ScrollUp from "../scrollUp/scrollUp";

function Homepage() {
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
              <a className="main-nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#team">
                Meet The Team
              </a>
            </li>
            <li>
              <a
                className="main-nav-link"
                href="https://docs.google.com/document/d/1JZCWgFncoqhTWbnXguZtalruUfB7CJaEjLOR9sbGqdo/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="section-search" id="home">
          <div className="search">
            <img
              src="/images/logoBig.png"
              id="Dish-It-Search-Logo"
              alt="Dish it logo"
              className="search-image"
            />
            <div className="food-fact">
              <FoodFactComponent />
            </div>
            <div className="search-menu">
              <div className="search-menu-content grid grid--2-cols">
                <a href="recipe-search-results.html" className="btn btn--full">
                  Search By Recipe Name
                </a>
                <a
                  href="ingredient-search-results.html"
                  className="btn btn--full"
                >
                  Search By Ingredients
                </a>
                <Link to="/ingredient-analyzer" className="btn btn--full">
                  Ingredient Analyzer
                </Link>
                <Link to="/randomdish" className="btn btn--full">
                  Random Recipe
                </Link>
                <Link to="/mealplanner" className="btn btn--full">
                  Meal Planner
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section-features" id="features">
          <div className="container">
            <span className="subheading">Features</span>
            <h2 className="heading-secondary">
              Checkout what each of our features do!
            </h2>
          </div>
          <div className="container grid grid--2-cols grid--center-v">
            <div className="feature">
              <p className="feature-name">Recipe Search</p>
              <p className="feature-description">
                Simply enter the name of any dish you're craving like "Brownies"
                or "Chicken Katsu" and start cooking.
              </p>
            </div>
            <div className="feature-img">
              <img src="images/placeholder1.jpg" alt="gif of function"></img>
            </div>
            <div className="feature-img">
              <img src="images/placeholder2.jpg" alt="gif of function"></img>
            </div>
            <div className="feature">
              <p className="feature-name">Random Recipe</p>
              <p className="feature-description">
                Not sure what to eat? Let Dish-It choose for you with just a
                click!
              </p>
            </div>
            <div className="feature">
              <p className="feature-name">Meal Planner</p>
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
              <p className="feature-name">Ingredient Analyzer</p>
              <p className="feature-description">
                List down your ingredients and have Dish-It analyze it for you
                and give you back an estimate in their nutrient values.
              </p>
            </div>
            <div className="feature top-margin-extra">
              <p className="feature-name">Random Food Fact</p>
              <p className="feature-description">
                A simple but yet useful tool. Each time you visit our website we
                will display a fun fact regarding food!
              </p>
            </div>
            <div className="feature top-margin-extra">
              <p className="feature-name">Nutritional Chatbot</p>
              <p className="feature-description">
                Got questions to ask regarding your foods like "How much Vitamin
                C is in 2 Apples?" let our Chat Bot know!
              </p>
            </div>
          </div>
        </section>
        <section className="section-about" id="about">
          <span className="subheading">About The Project</span>
          <div className="grid grid--2-cols">
            <div>
              <h2 className="heading-secondary bottom-less-margin">
                About Dish-It
              </h2>
              <p className="about-description">
                Dish-It is a project developed by a team of four students from
                Simon Fraser University. This project was created as a part of
                the CMPT 276 Final Project. Our design hopes to help individuals
                looking to eat healthier by understanding what goes into their
                food, explore new cuisines or cooking techniques, and simplify
                meal planning.
              </p>
              <h2 className="heading-secondary bottom-less-margin">
                APIs used in the project
              </h2>
              <p className="about-api-description">
                Special thanks to <strong>Spoonacular</strong> and{" "}
                <strong>Edamam</strong> for providing access to their APIs for
                this project.
              </p>
              <div className="about-api-logos">
                <img
                  className="api-logo"
                  src="images/api-logos/edamam.png"
                  alt="Edamam API logo"
                ></img>
                <img
                  className="api-logo"
                  src="images/api-logos/spoonacular.png"
                  alt="Spoonacular API logo"
                ></img>
              </div>
            </div>
            <div className="grid-collage grid--3-cols">
              <img
                className="image-collage"
                src="images/collages/collage-1.jpg"
                alt="a photography of an amazing looking dish"
              ></img>
              <img
                className="image-collage"
                src="images/collages/collage-2.jpg"
                alt="a photography of an amazing looking dish"
              ></img>
              <img
                className="image-collage"
                src="images/collages/collage-3.jpg"
                alt="a photography of an amazing looking dish"
              ></img>
              <img
                className="image-collage"
                src="images/collages/collage-4.jpg"
                alt="a photography of an amazing looking dish"
              ></img>
              <img
                className="image-collage"
                src="images/collages/collage-5.jpg"
                alt="a photography of an amazing looking dish"
              ></img>
              <img
                className="image-collage"
                src="images/collages/collage-6.jpg"
                alt="a photography of an amazing looking dish"
              ></img>
              <img
                className="image-collage"
                src="images/collages/collage-7.jpg"
                alt="a photography of an amazing looking dish"
              ></img>
              <img
                className="image-collage"
                src="images/collages/collage-8.jpg"
                alt="a photography of an amazing looking dish"
              ></img>
              <img
                className="image-collage"
                src="images/collages/collage-9.jpg"
                alt="a photography of an amazing looking dish"
              ></img>
            </div>
          </div>
        </section>
        <section className="section-team" id="team">
          <span className="subheading">Meet The Team</span>
          <h2 className="heading-secondary">Creators of Dish-It</h2>
          <div className="grid grid--4-cols grid--center-v">
            <div className="profile-container">
              <img
                className="creator-image"
                src="images/faceless.jpg"
                alt="headshot of Gabriel Bello"
              ></img>
              <h3>Gabriel Bello</h3>
            </div>
            <div className="profile-container">
              <img
                className="creator-image"
                src="images/faceless.jpg"
                alt="headshot of Gabriel Bello"
              ></img>
              <h3>Tyler Ho</h3>
            </div>
            <div className="profile-container">
              <img
                className="creator-image"
                src="images/faceless.jpg"
                alt="headshot of Gabriel Bello"
              ></img>
              <h3>Quang Anh Pham</h3>
            </div>
            <div className="profile-container">
              <img
                className="creator-image"
                src="images/faceless.jpg"
                alt="headshot of Gabriel Bello"
              ></img>
              <h3>Kevin Tan</h3>
            </div>
          </div>
        </section>
        <ChatbotComponent />
        <ScrollUp />
      </main>
    </div>
  );
}

export default Homepage;
