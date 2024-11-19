import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodFactComponent from '../../homepageComponents/foodFactComponent';

// Tests for the FoodFactComponent rendering given a good or bad API key
describe("FoodFactComponent", () => {
    // Test 1: If a correct API key is given, the component should render the fact
    test("If given correct API key everything renders", async () => {
        const mockFact = "There are 2 pounds of vitimin C in 10 apples";

        // Mock a successful API call
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            //What will be returned on a successful API call
            ok: true,
            status: 200,
            json: async () => ({ text: mockFact }),
        });
        
        // Render the component
        render(<FoodFactComponent apiKey="good-api-key" />);

        // Wait for the fact to appear in the DOM
        const foodFactElement = await screen.findByText(/There are 2 pounds of vitimin C in 10 apples/i);
        // Check if food fact is in the DOM
        expect(foodFactElement).toBeInTheDocument();
    });

    // Test 2: If an invalid API key is given, the component should render an error message
    test("shows an error message with an invalid API key", async () => {
        // Error message to be displayed with a bad API key
        const errorMessage = "Unauthorized request";

        // Mock fetch for failed API call
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            //What will be returned on a failed API call with a 401 status code (unauthorized request)
            ok: false,
            status: 401,
            json: async () => ({ error: errorMessage }),
        });

        // Render the component with a bad API key
        render(<FoodFactComponent apiKey="bad-api-key" />);

        // Wait for the error message to appear in the DOM
        const errorElement = await screen.findByText(/Unauthorized request/i);
        // Check if the error message is in the DOM
        expect(errorElement).toBeInTheDocument();
    });
});