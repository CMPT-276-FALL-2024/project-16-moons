import React, { useState } from 'react';
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY

const ChatbotComponent = () => {
    // States to store user's questions and Chatbot's answers
    // conversation is an array storing pairs of Q/A
    const [question, setQuestion] = useState('');
    const [conversation, setConversation] = useState([]);

    const Conversation = () => {
        // make sure question is not empty
        if (question.trim() === '') {
            alert('Please enter a question.');
            return;
        }

        // user input -> URL component
        // example: tell a joke => tell+a+joke
        const formattedQuestion = encodeURIComponent(question);

        fetch(`https://api.spoonacular.com/food/converse?apiKey=${apiKey}&text=${formattedQuestion}`)
            .then(reponse => {
                if (!reponse.ok) {
                    // error: invalid API key
                    if (reponse.status === 401) {
                        throw new Error('Unauthorized request: API key is invalid. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                    }
                    // Other errors
                    throw new Error('Error occured while getting a fun fact. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                }
                return reponse.json()
            })
            // append Q/A pair into converstaion, reset question
            .then(data => {
                setConversation([...conversation, {question, answer: data.reponse}]);
                setQuestion('');
            })
            .catch(error => {
                alert(error.message)
            })
    }
    //TODO: display data
    return (<div></div>);
}

export default ChatbotComponent