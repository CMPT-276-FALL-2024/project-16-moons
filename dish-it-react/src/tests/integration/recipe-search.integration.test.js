import React from 'react';
import { render, screen, waitFor, act, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom"; 
import RecipeSpecificSearchPage from '../../recipeSpecificSearch/recipeSpecificSearchPage';

global.fetch = jest.fn();

describe("RecipeSpecificSearch Integration Test", () => {
    beforeEach(() => {
      // Clear mocks before each test
      fetch.mockClear();
      jest.spyOn(window, "alert").mockClear();
    });
    test("Renders component correctly", async () => {  
      render(<BrowserRouter><RecipeSpecificSearchPage />
      </BrowserRouter>);
      expect(screen.getByText("Search for a specific recipe!")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Search recipes here!")).toBeInTheDocument();
    });

    test("Gets recipe results on a valid search", async () => {
      // Mock API response
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          hits: [
            { recipe: { label: "Pancakes", image: "pancakes.jpg" } },
            { recipe: { label: "Waffles", image: "waffles.jpg" } },
          ],
        }),
      });
  
      render(<BrowserRouter><RecipeSpecificSearchPage />
      </BrowserRouter>);
      
      const input = screen.getByPlaceholderText("Search recipes here!");
      const button = screen.getByRole("button", { name: 'search icon' });
  
      // Perform search
      fireEvent.change(input, { target: { value: "pancakes" } });
      fireEvent.click(button);
  
      // Wait for results
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
          expect.stringContaining("pancakes")
        );
        expect(screen.getByText("Pancakes")).toBeInTheDocument();
        expect(screen.getByText("Waffles")).toBeInTheDocument();
      });
    });

    test("displays error on invalid API response", async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
      });
  
      render(<BrowserRouter><RecipeSpecificSearchPage />
      </BrowserRouter>);

      const input = screen.getByPlaceholderText("Search recipes here!");
      const button = screen.getByRole("button", { name: 'search icon' });
  
      // Perform search
      fireEvent.change(input, { target: { value: "pancakes" } });
      fireEvent.click(button);
  
      await waitFor(() => {
        expect(fetch).toHaveBeenCalled();
        expect(screen.queryByText("Pancakes")).not.toBeInTheDocument();
      });
    });

    test("Testing for incorrect input type", () => {
      render(<BrowserRouter><RecipeSpecificSearchPage />
      </BrowserRouter>);
      const input = screen.getByPlaceholderText("Search recipes here!");
      const button = screen.getByRole("button", { name: 'search icon' });
  
      // Invalid input
      fireEvent.change(input, { target: { value: "12345" } });
      fireEvent.click(button);
  
      expect(fetch).not.toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith(
        "Recipe Search Bar can only contain letters!"
      );
    });
  });