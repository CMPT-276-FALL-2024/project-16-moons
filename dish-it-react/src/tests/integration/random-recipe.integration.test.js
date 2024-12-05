import React from 'react';
import { render, screen, waitFor, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom"; 
import GenerateRandomDish from '../../randomDish/randomDishComponents/generateRandomDish';

describe('GenerateRandomDish Component', () => {
  beforeEach(() => {
    // Mock fetch globally
    global.fetch = jest.fn();
  });

  afterEach(() => {
    // Clean up mocks
    global.fetch.mockClear();
  });

  it('renders loading state initially', () => {
    render(<GenerateRandomDish />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders recipe data when API call succeeds', async () => {
    // Mock API response
    const mockRecipe = {
      recipes: [
        {
          title: 'Mock Recipe',
          image: 'https://via.placeholder.com/150',
          readyInMinutes: 30,
          servings: 4,
          extendedIngredients: [
            { id: 1, amount: 2, unit: 'cups', name: 'Flour' },
            { id: 2, amount: 1, unit: 'tbsp', name: 'Sugar' },
          ],
          nutrition: {
            nutrients: [{ amount: 200, unit: 'kcal', name: 'Calories' }],
          },
          analyzedInstructions: [
            {
              steps: [
                { number: 1, step: 'Mix ingredients' },
                { number: 2, step: 'Bake at 350°F' },
              ],
            },
          ],
        },
      ],
    };

    // Mock fetch response
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockRecipe,
    });

    await act(async () => {
      render(
        <BrowserRouter>
          <GenerateRandomDish></GenerateRandomDish>
        </BrowserRouter>
      );
    });

    // Wait for the recipe to load and verify content
    await waitFor(() => {
      expect(screen.getByText(/Mock Recipe/i)).toBeInTheDocument();
      expect(screen.getByText(/Nutrients/i)).toBeInTheDocument();
      expect(screen.getByText(/Instructions/i)).toBeInTheDocument();
    });
  });

  it('renders error message when API call fails', async () => {
    // Mock fetch to throw an error
    global.fetch.mockRejectedValueOnce(new Error('Failed to fetch recipe'));

    render(
      <BrowserRouter>
        <GenerateRandomDish></GenerateRandomDish>
      </BrowserRouter>
    );

    // Wait for error message to appear
    await waitFor(() => {
      expect(screen.getByText(/Error: Failed to fetch recipe/i)).toBeInTheDocument();
    });
  });
  afterEach(() => {
    jest.clearAllTimers();
  });  
});
