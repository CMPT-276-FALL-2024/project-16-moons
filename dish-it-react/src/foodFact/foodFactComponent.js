import React from "react";
const apiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;
const apiUa = process.env.REACT_APP_X_RAPIDAPI_UA;
const apiHost = process.env.REACT_APP_X_RAPID_HOST;

const FoodFactComponent = () => {
  // State to store the fun fact
  const [funFact, setFunFact] = React.useState("");

  // useEffect to fetch a random food trivia from the Spoonacular API
  React.useEffect(() => {
    // Fetch request to get a random food trivia
    const fetchRandomFoodFact = async () => {
      try {
        const response = await fetch(
          `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": apiHost,
              "x-rapidapi-key": apiKey,
              "x-rapidapi-ua": apiUa,
            },
          }
        );
        if (!response.ok) {
          // Throw an error if the response is not OK
          if (response.status === 401) {
            // API key is invalid
            throw new Error(
              'Unauthorized request: API key is invalid. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section'
            );
          }
          // Generic error
          throw new Error(
            'Error occured while getting a fun fact. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section'
          );
        }
        const data = await response.json();
        setFunFact("Did you know? " + data.text);
      } catch (error) {
        setFunFact(error.message);
        // Alerts only if not in test environment
        if (process.env.NODE_ENV !== "test") {
          alert(error.message);
        }
      }
    };
    fetchRandomFoodFact();
  }, []);

  // Return the fun fact
  return (
    <div>
      <h2>Did you know?</h2>
      <p>{funFact.replace(/did you know\?/i, "").trim()}</p>
    </div>
  );
};

export default FoodFactComponent;
