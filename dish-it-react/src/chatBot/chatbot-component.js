import React, { useState } from "react";
import "../css/general.css";
import "../css/chatBot.css";
const apiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;
const apiUa = process.env.REACT_APP_X_RAPIDAPI_UA;
const apiHost = process.env.REACT_APP_X_RAPID_HOST;

const ChatbotComponent = () => {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to handle dialogue visibility
  const [isFetching, setIsFetching] = useState(false); // State to handle API fetching

  const toggleChat = () => {
    setIsOpen(!isOpen); // Toggle the visibility of the chat dialogue
  };

  const Conversation = () => {
    const formattedQuestion = encodeURIComponent(question);

    // True whne API is fetching data and prevents multiple requests
    setIsFetching(true);

    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/converse?text=${formattedQuestion}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": apiHost,
          "x-rapidapi-key": apiKey,
          "x-rapidapi-ua": apiUa,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error(
              'Unauthorized request: API key is invalid. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section.'
            );
          }
          throw new Error(
            'Something went wrong trying to process your request. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section.'
          );
        }
        return response.json();
      })
      .then((data) => {
        // Update conversation with the question and the answerText from the API response
        setConversation((prevConversation) => [
          ...prevConversation,
          { question, answer: data.answerText },
        ]);
        setQuestion("");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        // Sets isFetching to false once API sends back response
        setIsFetching(false);
      });
  };

  const enterKeyDown = (event) => {
    if (event.key === "Enter" && question.trim() !== "" && !isFetching) {
      Conversation();
    }
  };

  return (
    <div>
      {/* Chatbot Button */}
      <button onClick={toggleChat} className="chat-button">
        <img
          src="/images/chatbot-colored.png"
          alt="Chat Bot Icon"
          className="bottom-left"
        />
      </button>

      {/* Chat Dialogue */}
      {isOpen && (
        <div className="chat-box">
          <h1>Chatbot</h1>

          <div className="chat-history">
            {conversation.map((entry, index) => (
              <div key={index} className="chat-entry">
                <p>
                  {" "}
                  <strong>Q:</strong> {entry.question}{" "}
                </p>
                <p>
                  {" "}
                  <strong>A:</strong> {entry.answer}{" "}
                </p>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={enterKeyDown}
              placeholder="Ask me something..."
            />
            <button onClick={Conversation}> &#8594; </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
