import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SearchByIngredients from "../../searchByIngredients/components/searchByIngredients";
import SearchByIngredientsResults from "../../searchByIngredients/components/searchByIngredientsResults";
import Overview from "../../searchByIngredients/overview";

// Mock global fetch for API calls
global.fetch = jest.fn();

describe("Search By Ingredients Integration Test", () => {
  test("Adding an ingredient -> click search -> displays recipeResults page -> click on a recipe -> individual recipe overview page", async () => {
    // Mock API responses
    const mockRecipes = [
      { id: 1, title: "Tomato Soup", image: "tomato-soup.jpg" },
      { id: 2, title: "Tomato Salad", image: "tomato-salad.jpg" },
    ];
    const mockRecipeDetails = {
      id: 1,
      title: "Tomato Soup",
      image: "tomato-soup.jpg",
      extendedIngredients: [
        { id: 101, nameClean: "tomatoes", amount: 2, unit: "cups" },
      ],
      servings: 4,
      preparationMinutes: 10,
      cookingMinutes: 20,
      analyzedInstructions: [
        {
          name: "",
          steps: [{ number: 1, step: "Chop tomatoes." }],
        },
      ],
    };

    // Mocking API calls
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockRecipes,
      }) // First fetch for recipes
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockRecipeDetails,
      }); // Second fetch for recipe details

    render(
      <MemoryRouter initialEntries={["/ingredient-search"]}>
        <Routes>
          <Route path="/ingredient-search" element={<SearchByIngredients />} />
          <Route path="/searchByIngredientsResults" element={<SearchByIngredientsResults />} />
          <Route path="/recipe-overview/:id" element={<Overview />} />
        </Routes>
      </MemoryRouter>
    );

    // Step 1: Add an ingredient
    const ingredientInput = screen.getByPlaceholderText("Add an ingredient...");
    const addButton = screen.getByRole("button", { name: "add button" });
    const searchButton = screen.getByRole("button", { name: 'search'});

    fireEvent.change(ingredientInput, { target: { value: "tomato" } });
    fireEvent.click(addButton);
    expect(screen.getByText("tomato")).toBeInTheDocument(); // Verify ingredient added

    // Step 2: Search for recipes
    fireEvent.click(searchButton);

    // Step 3: Verify search results page and recipes
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("ingredients=tomato"),
        expect.anything()
      );
      expect(screen.getByText("Tomato Soup")).toBeInTheDocument();
      expect(screen.getByText("Tomato Salad")).toBeInTheDocument();
    });

    // Verify recipe images
    expect(screen.getByAltText("Tomato Soup")).toHaveAttribute("src", "tomato-soup.jpg");
    expect(screen.getByAltText("Tomato Salad")).toHaveAttribute("src", "tomato-salad.jpg");

    // Step 4: Navigate to overview page
    const recipeLink = screen.getByText("Tomato Soup");
    fireEvent.click(recipeLink);

    // Step 5: Verify overview page content
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("/recipes/1/information"),
        expect.anything()
      );

      // Verify recipe details
      expect(screen.getByAltText("Tomato Soup")).toBeInTheDocument();
      expect(screen.getByText("Ingredients")).toBeInTheDocument();
      expect(screen.getByText("Nutrition Facts")).toBeInTheDocument();
      expect(screen.getByText("View Full Recipe")).toBeInTheDocument();
    });
  });
});
