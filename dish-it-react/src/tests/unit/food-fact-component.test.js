import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import foodFactComponent from '../../homepageComponents/foodFactComponent';

describe("foodFactComponent", () => {
    // First test to test if the component renders
    test("renders foodFactComponent", () => {
        render (<foodFactComponent />);
        const foodFactElement = screen.getByText(/did you know/i);
        
        expect(foodFactElement).toBeInTheDocument();
    }
    
    // Second te


});