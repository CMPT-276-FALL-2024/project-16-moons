import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom"; 
import IngredientAnalyzer from "../../ingredientAnalyzer/ingredientAnalyzerComponents/ingredientAnalyzer"

// Mock the fetch API
global.fetch = jest.fn();

describe("Ingredient Analyzer Unit test", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders input and button elements", () => {
    render(
        <BrowserRouter>
           <IngredientAnalyzer/> 
        </BrowserRouter>
    );
    
    expect(screen.getByPlaceholderText(/Usage Example/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Analyze/i })).toBeInTheDocument();
  });

  test("handles valid input and displays nutrition facts on successful API response", async () => {
    // Mock a successful API response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        calories: 250,
        totalNutrients: {
          FAT: { quantity: 10, unit: "g" },
          PROCNT: { quantity: 15, unit: "g" },
          FASAT: {quantity: 10, unit: "g"},
          FATRN: {quantity: 10, unit: "g"},
          CHOLE: {quantity: 10, unit: "g"},
          NA: {quantity: 10, unit: "g"},
          CHOCDF: {quantity: 10, unit: "g"},
          FIBTG: {quantity: 10, unit: "g"},
          SUGAR: {quantity: 10, unit: "g"},
          PROCNT: {quantity: 10, unit: "g"},
          VITD:{quantity: 10, unit: "g"},
          CA: {quantity: 10, unit: "g"},
          FE: {quantity: 10, unit: "g"},
          K: {quantity: 10, unit: "g"},
        },
        totalDaily: {
            FAT: { quantity: 10, unit: "g" },
            PROCNT: { quantity: 15, unit: "g" },
            FASAT: {quantity: 10, unit: "g"},
            FATRN: {quantity: 10, unit: "g"},
            CHOLE: {quantity: 10, unit: "g"},
            NA: {quantity: 10, unit: "g"},
            CHOCDF: {quantity: 10, unit: "g"},
            FIBTG: {quantity: 10, unit: "g"},
            SUGAR: {quantity: 10, unit: "g"},
            PROCNT: {quantity: 10, unit: "g"},
            VITD:{quantity: 10, unit: "g"},
            CA: {quantity: 10, unit: "g"},
            FE: {quantity: 10, unit: "g"},
            K: {quantity: 10, unit: "g"},
          },
      }),
    });

    render(
        <BrowserRouter>
           <IngredientAnalyzer/> 
        </BrowserRouter>
    );

    // Simulate user input
    const input = screen.getByPlaceholderText(/Usage Example/i);
    const button = screen.getByRole("button", { name: /Analyze/i });

    fireEvent.change(input, { target: { value: "1 cup of rice" } });
    fireEvent.click(button);

    // Wait for the results to appear
    await waitFor(() =>
      expect(screen.getByText(/Nutrition Facts/i)).toBeInTheDocument()
    );

    expect(screen.getByText(/Total Fat/i)).toBeInTheDocument();
    expect(screen.getByText(/Protein/i)).toBeInTheDocument();
  });

  test("normalizes user input correctly", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        calories: 200,
        totalNutrients: {
          FAT: { quantity: 5, unit: "g" },
        },
      }),
    });

    render(
        <BrowserRouter>
           <IngredientAnalyzer/> 
        </BrowserRouter>
    );

    const input = screen.getByPlaceholderText(/Usage Example/i);
    const button = screen.getByRole("button", { name: /Analyze/i });

    fireEvent.change(input, { target: { value: "   chicken,2 cups rice" } });
    fireEvent.click(button);

    await waitFor(() =>
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("/api/nutrition-details"),
        expect.objectContaining({
          body: JSON.stringify({
            ingr: ["1 chicken", "2 cups rice"],
          }),
        })
      )
    );
  });
});