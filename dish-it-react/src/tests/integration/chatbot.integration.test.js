import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatbotComponent from '../../chatBot/chatbot-component';

// Mock Fetch
global.fetch = jest.fn();

describe('ChatbotComponent Integration Tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should toggle chat visibility and display conversation', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ answerText: 'This is a test answer' }),
        });

        render(<ChatbotComponent />);

        // Open chatbot
        const chatbotButton = screen.getByRole('button');
        fireEvent.click(chatbotButton);
        expect(screen.getByText('Chatbot')).toBeInTheDocument();

        // Simulate user question input
        const input = screen.getByPlaceholderText('Ask me something...');
        fireEvent.change(input, { target: { value: 'Test question?' } });

        const submitButton = screen.getByText('→');
        fireEvent.click(submitButton);

        // Await fetched result
        expect(await screen.findByText('Test question?')).toBeInTheDocument();
        expect(await screen.findByText('This is a test answer')).toBeInTheDocument();
    });

    test('should handle API errors gracefully', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 500,
        });
    
        // Mock the alert function
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
        render(<ChatbotComponent />);
    
        // Open chatbot
        const chatbotButton = screen.getByRole('button');
        fireEvent.click(chatbotButton);
    
        const input = screen.getByPlaceholderText('Ask me something...');
        fireEvent.change(input, { target: { value: 'Test question?' } });
    
        const submitButton = screen.getByText('→');
        fireEvent.click(submitButton);
    
        // Ensure alert is called with the correct message
        await screen.findByPlaceholderText('Ask me something...'); // Wait for the async operation
        expect(alertMock).toHaveBeenCalledWith('Something went wrong trying to process your request. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section.');
    
        // Clean up mock
        alertMock.mockRestore();
    });
    afterEach(() => {
        jest.clearAllTimers();
      });    
});
