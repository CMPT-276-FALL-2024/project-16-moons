import React from 'react';
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY

const FoodFactComponent = () => {
    // State to store the fun fact
    const [funFact, setFunFact] = React.useState('')

    // useEffect to fetch a random food trivia from the Spoonacular API
    React.useEffect(() => {
        // Fetch request to get a random food trivia
        fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    // Throw an error if the response is not OK
                    if (response.status === 401) {
                        // API key is invalid
                        throw new Error('Unauthorized request: API key is invalid. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                    }
                    // Generic error
                    throw new Error('Error occured while getting a fun fact. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                }
                return response.json()
            })
            .then(data => {
                setFunFact(data.text)
            })
            .catch(error => {    
                alert(error.message)
            })
    }, [])

    // Return the fun fact
    return (
        <div>
            <h1>Did you know? {funFact}</h1>
        </div>
    );
}

export default FoodFactComponent;