import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import GenerateRandomDish from "../../randomDish/randomDishComponents/generateRandomDish";

// Basic Key Testing!
describe("GenerateRandomDish", () => {
  test("Correct API -> Load the dish details", async () => {
    // Fake Data
    const testMeal = {
      recipes: [
        {
          title: "Mock Recipe",
          image: "https://via.placeholder.com/150",
          readyInMinutes: 30,
          servings: 4,
          extendedIngredients: [
            { id: 1, amount: 2, unit: "cups", name: "Flour" },
            { id: 2, amount: 1, unit: "tbsp", name: "Sugar" },
          ],
          nutrition: {
            nutrients: [{ amount: 200, unit: "kcal", name: "Calories" }],
          },
          analyzedInstructions: [
            {
              steps: [
                { number: 1, step: "Mix ingredients" },
                { number: 2, step: "Bake at 350°F" },
              ],
            },
          ],
        },
      ],
    };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => testMeal,
    });

    // Wrap the component with BrowserRouter for routing context
    await act(async () => {
      render(
        <BrowserRouter>
          <GenerateRandomDish apiKey="good-api-key" />
        </BrowserRouter>
      );
    });

    const randomFoodElement = await screen.findByText(/Mock Recipe/i);
    expect(randomFoodElement).toBeInTheDocument();
  });

  test("shows an error message with an invalid API key", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 401,
      json: async () => ({ error: "Failed to fetch recipe" }),
    });

    // Wrap the component with BrowserRouter for routing context
    await act(async () => {
      render(
        <BrowserRouter>
          <GenerateRandomDish apiKey="bad-api-key" />
        </BrowserRouter>
      );
    });

    const errorElement = await screen.findByText(/Error: Failed to fetch recipe/i);
    expect(errorElement).toBeInTheDocument();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });  
});