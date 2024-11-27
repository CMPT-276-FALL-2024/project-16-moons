import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GenerateRandomDish from "../../randomDish/randomDishComponents/generateRandomDish"
// TEMPLATED FROM FOOD-FACT-COMPONENT-TEST

// Basic Key Testing!
describe("GenerateRandomDish", () => {
  test("Correct API -> Load the dish details", async () => {
    // Fake Data
    const testMeal = {
      recipes: [
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          lowFodmap: false,
          weightWatcherSmartPoints: 0,
          gaps: "no",
          preparationMinutes: null,
          cookingMinutes: null,
          aggregateLikes: 17,
          healthScore: 33,
          creditsText:
            "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          license: "CC BY 3.0",
          sourceName: "Foodista",
          pricePerServing: 76.34,
          extendedIngredients: [
            {
              id: 10211693,
              aisle: null,
              image: null,
              consistency: "SOLID",
              name: "canned tomatoes",
              nameClean: null,
              original: "1 can (28oz) whole tomatoes with juice",
              originalName: "can whole tomatoes with juice",
              amount: 28.0,
              unit: "oz",
              meta: ["whole", "with juice", "canned"],
              measures: {
                us: {
                  amount: 28.0,
                  unitShort: "oz",
                  unitLong: "ounces",
                },
                metric: {
                  amount: 793.787,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 11165,
              aisle: "Produce",
              image: "cilantro.png",
              consistency: "SOLID",
              name: "cilantro",
              nameClean: "cilantro",
              original: "1/2 cup fresh cilantro (large stems removed)",
              originalName: "fresh cilantro (large stems removed)",
              amount: 0.5,
              unit: "cup",
              meta: ["fresh", "(large stems removed)"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 8.0,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 11215,
              aisle: "Produce",
              image: "garlic.png",
              consistency: "SOLID",
              name: "garlic",
              nameClean: "garlic",
              original: "1 clove garlic, minced",
              originalName: "garlic, minced",
              amount: 1.0,
              unit: "clove",
              meta: ["minced"],
              measures: {
                us: {
                  amount: 1.0,
                  unitShort: "clove",
                  unitLong: "clove",
                },
                metric: {
                  amount: 1.0,
                  unitShort: "clove",
                  unitLong: "clove",
                },
              },
            },
            {
              id: 1012014,
              aisle: "Spices and Seasonings",
              image: "ground-cumin.jpg",
              consistency: "SOLID",
              name: "ground cumin",
              nameClean: "ground cumin",
              original: "1/4 - 1/2 t. ground cumin",
              originalName: "ground cumin",
              amount: 0.25,
              unit: "t",
              meta: [],
              measures: {
                us: {
                  amount: 0.083,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.083,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 11979,
              aisle: "Canned and Jarred",
              image: "jalapeno-pepper.png",
              consistency: "SOLID",
              name: "jalapeno",
              nameClean: "jalapeno pepper",
              original:
                "1 whole jalapeno, quartered, seeds removed, sliced thin.",
              originalName:
                "whole jalapeno, quartered, seeds removed, sliced thin",
              amount: 1.0,
              unit: "",
              meta: ["whole", "seeds removed, sliced thin.", "quartered"],
              measures: {
                us: {
                  amount: 1.0,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1.0,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 9160,
              aisle: "Produce",
              image: "lime-juice.png",
              consistency: "LIQUID",
              name: "juice of lime",
              nameClean: "lime juice",
              original: "juice from 1/2 a lime",
              originalName: "juice from a lime",
              amount: 2.0,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 2.0,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 2.0,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 11282,
              aisle: "Produce",
              image: "brown-onion.png",
              consistency: "SOLID",
              name: "an onion",
              nameClean: "onion",
              original: "1/4 of an onion chopped (approximately 1/4 cup)",
              originalName: "an onion chopped (approximately 1/4 cup)",
              amount: 0.25,
              unit: "",
              meta: ["chopped"],
              measures: {
                us: {
                  amount: 0.25,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 0.25,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 10011885,
              aisle: "Canned and Jarred",
              image: "tomatoes-canned.png",
              consistency: "SOLID",
              name: "rotel tomatoes",
              nameClean: "diced tomatoes with green chilies",
              original:
                "2 cans (10oz) Rotel tomatoes (or the store brand of diced tomatoes and green chiles)",
              originalName:
                "cans Rotel tomatoes (or the store brand of diced tomatoes and green chiles)",
              amount: 10.0,
              unit: "oz",
              meta: [
                "diced",
                "green",
                "canned",
                "(or the store brand of tomatoes and chiles)",
              ],
              measures: {
                us: {
                  amount: 10.0,
                  unitShort: "oz",
                  unitLong: "ounces",
                },
                metric: {
                  amount: 283.495,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 2047,
              aisle: "Spices and Seasonings",
              image: "salt.jpg",
              consistency: "SOLID",
              name: "salt",
              nameClean: "table salt",
              original: "Salt to taste",
              originalName: "Salt to taste",
              amount: 4.0,
              unit: "servings",
              meta: ["to taste"],
              measures: {
                us: {
                  amount: 4.0,
                  unitShort: "servings",
                  unitLong: "servings",
                },
                metric: {
                  amount: 4.0,
                  unitShort: "servings",
                  unitLong: "servings",
                },
              },
            },
            {
              id: 1042027,
              aisle: null,
              image: "seasoning.png",
              consistency: "SOLID",
              name: "penzey's southwest seasoning",
              nameClean: "seasoning",
              original:
                "1/4 t. Penzey's Southwest seasoning (or another brand)",
              originalName: "Penzey's Southwest seasoning (or another brand)",
              amount: 0.25,
              unit: "t",
              meta: ["(or another brand)"],
              measures: {
                us: {
                  amount: 0.0,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.0,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 19335,
              aisle: "Baking",
              image: "sugar-in-bowl.png",
              consistency: "SOLID",
              name: "sugar",
              nameClean: "sugar",
              original: "1/4 t. sugar",
              originalName: "sugar",
              amount: 0.25,
              unit: "t",
              meta: [],
              measures: {
                us: {
                  amount: 0.087,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.087,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
          ],
          id: 658180,
          title: "Restaurant Style Salsa",
          readyInMinutes: 5,
          servings: 4,
          sourceUrl:
            "http://www.foodista.com/recipe/H8G2YH6Z/restaurant-style-salsa",
          image: "https://img.spoonacular.com/recipes/658180-556x370.png",
          imageType: "png",
          summary:
            'If you have roughly <b>5 minutes</b> to spend in the kitchen, Restaurant Style Salsa might be a great <b>gluten free and dairy free</b> recipe to try. For <b>76 cents per serving</b>, you get a hor d\'oeuvre that serves 4. One portion of this dish contains approximately <b>4g of protein</b>, <b>1g of fat</b>, and a total of <b>87 calories</b>. Head to the store and pick up jalapeno, rotel tomatoes, garlic, and a few other things to make it today. 17 people were impressed by this recipe. It is brought to you by Foodista. A few people really liked this Mexican dish. All things considered, we decided this recipe <b>deserves a spoonacular score of 89%</b>. This score is tremendous. Similar recipes include <a href="https://spoonacular.com/recipes/restaurant-style-salsa-595814">Restaurant Style Salsa</a>, <a href="https://spoonacular.com/recipes/restaurant-style-salsa-271389">Restaurant-Style Salsa</a>, and <a href="https://spoonacular.com/recipes/restaurant-style-salsa-810413">Restaurant Style Salsa</a>.',
          cuisines: ["Mexican"],
          dishTypes: [
            "antipasti",
            "condiment",
            "starter",
            "snack",
            "appetizer",
            "dip",
            "antipasto",
            "hor d'oeuvre",
            "spread",
          ],
          diets: ["gluten free", "dairy free"],
          occasions: [],
          instructions:
            "<ol><li>Combine all ingredients in a food processor. Pulse until you get the salsa consistency you like. 10 to 15 pulses. Test seasonings and adjust accordingly.</li><li>Store in a Tupperware container.</li><li>Ready in 5 minutes</li></ol>",
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Combine all ingredients in a food processor. Pulse until you get the salsa consistency you like. 10 to 15 pulses. Test seasonings and adjust accordingly.Store in a Tupperware container.Ready in 5 minutes",
                  ingredients: [
                    {
                      id: 1042027,
                      name: "seasoning",
                      localizedName: "seasoning",
                      image: "seasoning.png",
                    },
                    {
                      id: 6164,
                      name: "salsa",
                      localizedName: "salsa",
                      image: "salsa.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404771,
                      name: "food processor",
                      localizedName: "food processor",
                      image:
                        "https://spoonacular.com/cdn/equipment_100x100/food-processor.png",
                    },
                  ],
                },
              ],
            },
          ],
          originalId: null,
          spoonacularScore: 90.07225799560547,
          spoonacularSourceUrl:
            "https://spoonacular.com/restaurant-style-salsa-658180",
        },
      ],
    };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => testMeal,
    });

    render(<GenerateRandomDish apiKey="good-api-key" />);

    // Correcting the line to match a specific property (title)
    const randomFoodelement = await screen.findByText(/Summary/i);
    expect(randomFoodelement).toBeInTheDocument();
  });

  test("shows an error message with an invalid API key", async () => {
    const errorMessage = "Failed to fetch recipe"; // Update error message

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 401,
      json: async () => ({ error: errorMessage }),
    });

    render(<GenerateRandomDish apiKey="bad-api-key" />);

    // Update the matcher to use the correct error message
    const errorElement = await screen.findByText(/Failed to fetch recipe/i);
    expect(errorElement).toBeInTheDocument();
  });
});
