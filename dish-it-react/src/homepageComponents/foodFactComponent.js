import React from 'react';


const FoodFactComponent = ({apiKey}) => {
    // State to store the fun fact
    const [funFact, setFunFact] = React.useState('')

    // useEffect to fetch a random food trivia from the Spoonacular API
    React.useEffect(() => {
        // Fetch request to get a random food trivia
        console.log("Fetched api")
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
                alert(error.message)
            }
        }
        fetchRandomFoodFact();
    }, [])

    // Return the fun fact
    return (
        <div>
            <h2>Did you know? {funFact}</h2>
        </div>
    );
}

export default FoodFactComponent;