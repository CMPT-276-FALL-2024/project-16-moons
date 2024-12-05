import React from 'react';
import { render, screen, waitFor, act, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom"; 
import RecipeSpecificSearchPage from '../../recipeSpecificSearch/recipeSpecificSearchPage';

const mockAppId = process.env.REACT_APP_EDAMAM_APP_ID
const mockApiKey = process.env.REACT_APP_EDAMAM_API_KEY

describe("RecipeSpecificSearch Feature (using fetch mock)", () => {
    beforeEach(() => {
      jest.restoreAllMocks(); // Reset any previously mocked functions
    });
  
    test("fetches and displays recipes on successful search", async () => {
      // Mock the fetch API
      global.fetch = jest.fn(() =>
        Promise.resolve({
            hits: [
              { recipe: { label: "Recipe 1" } },
              { recipe: { label: "Recipe 2" } },
            ],
          }),
      );
  
      render(<BrowserRouter><RecipeSpecificSearchPage />
      </BrowserRouter>);
      const input = screen.getByPlaceholderText(/Search recipes here!/i);
      const searchButton = screen.getByRole("button", { name: /Search/i });
  
      // Simulate user interaction
      fireEvent.change(input, { target: { value: "Recipe" } });
      fireEvent.click(searchButton);
  
      // Wait for the recipes to be displayed
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledTimes(1); // Ensure fetch is called
  
        // Check that recipe results are displayed
        expect(screen.getByText(/Recipe 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Recipe 2/i)).toBeInTheDocument();
      });
    });
  

  });