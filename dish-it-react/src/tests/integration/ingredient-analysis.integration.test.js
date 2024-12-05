import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom"; 
import IngredientAnalyzer from '../../ingredientAnalyzer/ingredientAnalyzerComponents/ingredientAnalyzer';

describe("IngredientAnalyzer Component", () => {
    test("renders the form and input elements", () => {
        render(
            <BrowserRouter>
                <IngredientAnalyzer />
            </BrowserRouter>
        );
      
      expect(screen.getByText(/Ingredient Analyzer/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Usage Example:/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /Analyze/i })).toBeInTheDocument();
    });
  
    test("handles user input", () => {
        render(
            <BrowserRouter>
                <IngredientAnalyzer />
            </BrowserRouter>
        );
      const input = screen.getByPlaceholderText(/Usage Example:/i);
  
      fireEvent.change(input, { target: { value: "2 cups of rice" } });
      expect(input.value).toBe("2 cups of rice");
    });
  
    test("displays results after successful API response", async () => {
      // Mock fetch API
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              calories: 200,
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
        })
      );
  
      render(
        <BrowserRouter>
            <IngredientAnalyzer />
        </BrowserRouter>
    );
      const input = screen.getByPlaceholderText(/Usage Example:/i);
      const button = screen.getByRole("button", { name: /Analyze/i });
  
      fireEvent.change(input, { target: { value: "1 cup of rice" } });
      fireEvent.click(button);
  
      await waitFor(() => {
        expect(screen.getByText(/Nutrition Facts/i)).toBeInTheDocument();
        expect(screen.getByText(/Calories:/i)).toBeInTheDocument();
      });
  
      global.fetch.mockClear();
    });
  });