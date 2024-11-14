import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatbotComponent from './chatbot-component';

describe('ChatbotComponent', () => {
    test('toggles chat dialogue on button click', () => {
        render(<ChatbotComponent />);
        const chatButton = screen.getByRole('button');
        fireEvent.click(chatButton);
        expect(screen.getByText('Chatbot')).toBeInTheDocument();
        fireEvent.click(chatButton);
        expect(screen.queryByText('Chatbot')).not.toBeInTheDocument();
    });

    test('displays conversation when API responds', async () => {
        // Mock fetch API response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ answerText: 'Test answer' }),
            })
        );

        render(<ChatbotComponent />);
        fireEvent.click(screen.getByRole('button')); // Open chat
        
        const input = screen.getByPlaceholderText('Ask me something...');
        fireEvent.change(input, { target: { value: 'Test question' } });
        fireEvent.click(screen.getByText('→')); // Submit question

        await waitFor(() => expect(screen.getByText('Q: Test question')).toBeInTheDocument());
        expect(screen.getByText('A: Test answer')).toBeInTheDocument();

        global.fetch.mockRestore();
    });
});
