import React, { useState } from 'react';
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

const ChatbotComponent = () => {
    const [question, setQuestion] = useState('');
    const [conversation, setConversation] = useState([]);

    const Conversation = () => {
        if (question.trim() === '') {
            alert('Welcome! What would you like to know?');
            return;
        }

        const formattedQuestion = encodeURIComponent(question);

        fetch(`https://api.spoonacular.com/food/converse?apiKey=${apiKey}&text=${formattedQuestion}`)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('Unauthorized request: API key is invalid. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section.');
                    }
                    throw new Error('Something went wrong trying to process your request. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section.');
                }
                return response.json();
            })
            .then(data => {
                // Update conversation with the question and the answerText from the API response
                setConversation(prevConversation => [...prevConversation, {question, answer: data.answerText}]);
                setQuestion('');
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <div>
            <h2>Chatbot</h2> 
            <input
                //input field for user input 
                type = "text"
                value = {question}
                onChange = {(e) => setQuestion(e.target.value)}
                placeholder = "Ask me something..."
            />
            <button onClick={Conversation}> &#8594; </button>

            <div>
                {conversation.map((entry, index) => (
                    <div key={index}>
                        <p><strong> Q: </strong> {entry.question}</p>
                        <p><strong> A: </strong> {entry.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatbotComponent;