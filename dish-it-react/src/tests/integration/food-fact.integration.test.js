import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FoodFactComponent from '../../homepageComponents/foodFactComponent';

global.fetch = jest.fn();

describe('FoodFactComponent Integration Tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should fetch and display a food trivia', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ text: 'This is a fun food fact' }),
        });

        render(<FoodFactComponent />);

        expect(await screen.findByText('This is a fun food fact')).toBeInTheDocument();
    });

    test('should handle API errors gracefully', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        render(<FoodFactComponent />);

        expect(await screen.findByText(/Error occured while getting a fun fact/)).toBeInTheDocument();
    });
});