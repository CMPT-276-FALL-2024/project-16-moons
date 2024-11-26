import React from 'react';
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

const FoodFactComponent = () => {
    // State to store the fun fact
    const [funFact, setFunFact] = React.useState('')

    // useEffect to fetch a random food trivia from the Spoonacular API
    React.useEffect(() => {
        // Fetch request to get a random food trivia
        const fetchRandomFoodFact = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`)
                if (!response.ok) {
                    // Throw an error if the response is not OK
                    if (response.status === 401) {
                        // API key is invalid
                        throw new Error('Unauthorized request: API key is invalid. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                    }
                    // Generic error
                    throw new Error('Error occured while getting a fun fact. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                }
                const data = await response.json()
                setFunFact(data.text)
            } catch (error) {
                setFunFact(error.message)
                // Alerts only if not in test environment
                if (process.env.NODE_ENV !== 'test') { 
                    alert(error.message);
                }
            }
        }
        fetchRandomFoodFact();
    }, [])

    // Return the fun fact
    return (
        <div>
            <h3>Did you know...</h3>
            <h2>{funFact}</h2>
        </div>
    );
}

export default FoodFactComponent;
