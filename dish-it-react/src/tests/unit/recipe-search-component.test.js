import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom"; 
import RecipeSpecificSearchBody from "../../recipeSpecificSearch/recipeSpecificSearchComponents/recipeSpecificSearchBody"

const mockAppId = process.env.REACT_APP_EDAMAM_APP_ID
const mockApiKey = process.env.REACT_APP_EDAMAM_API_KEY

describe("RecipeSpecificSearchBody Component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            hits: [
              { recipe: { label: "Recipe 1" } },
              { recipe: { label: "Recipe 2" } },
            ],
          }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the initial UI correctly", () => {
    render(
      <MemoryRouter>
        <RecipeSpecificSearchBody />
      </MemoryRouter>
    );

    expect(screen.getByText(/search for a specific recipe!/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search recipes here!/i)
    ).toBeInTheDocument();
  });

  it("alerts when input is empty on search button click", () => {
    window.alert = jest.fn();
    render(
      <MemoryRouter>
        <RecipeSpecificSearchBody />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    expect(window.alert).toHaveBeenCalledWith("Recipe Search Bar must not be empty!");
  });

  it("alerts when input contains invalid characters", () => {
    window.alert = jest.fn();
    render(
      <MemoryRouter>
        <RecipeSpecificSearchBody />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/search recipes here!/i);
    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    expect(window.alert).toHaveBeenCalledWith(
      "Recipe Search Bar can only contain letters!"
    );
  });

  it("fetches recipes and renders them when input is valid", async () => {
    render(
      <MemoryRouter>
        <RecipeSpecificSearchBody />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/search recipes here!/i);
    fireEvent.change(input, { target: { value: "Chicken" } });
    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.edamam.com/api/recipes/v2?app_id=${mockAppId}&app_key=${mockApiKey}&type=public&q=Chicken`
    );

    expect(await screen.findByText(/Recipe 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Recipe 2/i)).toBeInTheDocument();
  });

  it("displays a message when no recipes are found", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ hits: [] }),
      })
    );

    render(
      <MemoryRouter>
        <RecipeSpecificSearchBody />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/search recipes here!/i);
    fireEvent.change(input, { target: { value: "NonExistentRecipe" } });
    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    expect(await screen.findByText(/no recipes found for/i)).toBeInTheDocument();
  });
});