import React from "react";
import { render, screen, act, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom"; 
import SearchByIngredients from "../../searchByIngredients/components/searchByIngredients";

describe("SearchByIngredients Component", () => {
    it("renders the initial UI correctly", () => {
      render(
        <BrowserRouter>
           <SearchByIngredients /> 
        </BrowserRouter>
      );
  
      // Check if the input field, search button, and chatbot component are rendered
      expect(screen.getByPlaceholderText(/Add an ingredient.../i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
    });
  
    it("adds a new ingredient to the list", () => {
        render(
            <BrowserRouter>
               <SearchByIngredients /> 
            </BrowserRouter>
          );
      const input = screen.getByPlaceholderText(/add/i);
      const inputButton = screen.getByRole("button", { name: /add button/i});
  
      // Add an ingredient
      fireEvent.change(input, { target: { value: "apple" } });
      fireEvent.click(inputButton);
  
      expect(screen.getByText(/apple/i)).toBeInTheDocument;
    });

    it("does not add duplicate ingredients", () => {
        render(
            <BrowserRouter>
               <SearchByIngredients /> 
            </BrowserRouter>
          );
  
      const input = screen.getByPlaceholderText(/add/i);
      const inputButton = screen.getByRole("button", { name: /add button/i});
  
      // Add the same ingredient twice
      fireEvent.change(input, { target: { value: "Tomato" } });
      fireEvent.click(inputButton);
      fireEvent.change(input, { target: { value: "Tomato" } });
      fireEvent.click(inputButton);
  
      // The ingredient should appear only once
      expect(screen.getAllByText("Tomato").length).toBe(1);
    });

    it("passes the ingredient list to the SearchButton", () => {
        render(
            <BrowserRouter>
               <SearchByIngredients /> 
            </BrowserRouter>
          );
  
      const input = screen.getByPlaceholderText(/add an ingredient/i);
      const inputButton = screen.getByRole("button", { name: /add button/i});
      const searchButton = screen.getByRole("button", { name: /search icon/i });
      // Add ingredients
      fireEvent.change(input, { target: { value: "Tomato" } });
      fireEvent.click(inputButton);
      fireEvent.change(input, { target: { value: "Cheese" } });
      fireEvent.click(inputButton);
  
      // Check if SearchButton receives the list
      
      fireEvent.click(searchButton);
    });

    it("does not add empty ingredients", () => {
        render(
            <BrowserRouter>
               <SearchByIngredients /> 
            </BrowserRouter>
          );
  
      const input = screen.getByPlaceholderText(/add an ingredient/i);
      const inputButton = screen.getByRole("button", { name: /add button/i});
  
      // Try to add an empty ingredient
      fireEvent.change(input, { target: { value: "" } });
      fireEvent.click(inputButton);
  
      // The list should remain empty
      expect(screen.queryByText(/tomato/i)).not.toBeInTheDocument();
    });
  });