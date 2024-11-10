import React from "react";
import "../index.css";

const HowItWorks = () => {
    return (
        <section className="how-it" id="howitworks">
            <h2 className="main-header">How It Works</h2>
            <h1 className="sub-header">You're one click away from cooking!</h1>
            <div className="horizontal-flex-container">
                <img src="/images/how-it.jpg" width="750px" />
                <div className="vertical-flex-container">
                <div className="flex-content">
                    <p className="bold">Search By Recipe Name</p>
                    <p>
                    Simply enter the name of any dish you're craving like brownie and
                    start cooking!
                    </p>
                </div>
                <div className="flex-content">
                    <p className="bold">Random Recipe</p>
                    <p>
                    Not sure what to eat? Let Dish-It choose for you with just a
                    click!
                    </p>
                </div>
                <div className="flex-content">
                    <p className="bold">Search By Ingredients</p>
                    <p>
                    Simply enter your ingredients, and let Dish-It work its magic to
                    create a dish you can make right now!
                    </p>
                </div>
                </div>
                <div className="vertical-flex-container">
                <div className="flex-content">
                    <p className="bold">Ingredient Analyzer</p>
                    <p>
                    List down your ingredients and have Dish-It analyze it for you and
                    give you back an estimate in their nutrient values.
                    </p>
                </div>
                <div className="flex-content">
                    <p className="bold">Nutrition Chat Bot</p>
                    <p>
                    Got questions to ask regarding your foods like "How much vitamin C
                    is in 2 apples?" let our Chat Bot know!
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;