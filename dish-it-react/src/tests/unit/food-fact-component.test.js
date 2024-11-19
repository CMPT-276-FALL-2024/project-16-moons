import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodFactComponent from '../../homepageComponents/foodFactComponent';

describe("FoodFactComponent", () => {
    beforeEach(() => {
        jest.restoreAllMocks(); // Reset mocks before each test
    });

    test("renders correctly with a valid API key", async () => {
        const mockFact = "Tomatoes are technically a fruit!";

        // Mock fetch for successful API call
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: async () => ({ text: mockFact }),
        });

        render(<FoodFactComponent apiKey="valid-api-key" />);

        // Wait for the fact to appear in the DOM
        const foodFactElement = await screen.findByText(/Tomatoes are technically a fruit!/i);
        expect(foodFactElement).toBeInTheDocument();
    });

    test("shows an error message with an invalid API key", async () => {
        const errorMessage = "Unauthorized request";

        // Mock fetch for failed API call
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: false,
            status: 401,
            json: async () => ({ error: errorMessage }),
        });

        render(<FoodFactComponent apiKey="invalid-api-key" />);

        // Wait for the error message to appear in the DOM
        const errorElement = await screen.findByText(/Unauthorized request/i);
        expect(errorElement).toBeInTheDocument();
    });
});