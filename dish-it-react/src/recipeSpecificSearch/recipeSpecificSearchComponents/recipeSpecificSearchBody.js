import React from "react";
import { useLocation } from 'react-router-dom'
import RecipeCard from "./recipeCard";


const appId = process.env.REACT_APP_EDAMAM_APP_ID
const apiKey = process.env.REACT_APP_EDAMAM_API_KEY

export default function RecipeSpecificSearchBody() {
    // This grabs the previous recipe the user was searching for from the recipe overview
    const location = useLocation()
    const { recipe } = location.state || {};

    // States to store the recipe to fetch and the data fetched
    const [recipeToFetch, setRecipeToFetch] = React.useState(recipe)
    const [data, setData] = React.useState(null)

    React.useEffect( () => {
        // Function to fetch the specific recipe
        const fetchSpecificRecipe = async () => {
            try{
                const response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${apiKey}&type=public&q=${recipeToFetch}`)
                //If the response comes back not okay a error will be thrown
                if (!response.ok) {
                    // API key is invalid
                    if (response.status === 401) {
                        // API key is invalid
                        throw new Error('Unauthorized request: API key is invalid. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                    }
                    // Generic error
                    throw new Error('Error occured while getting a fun fact. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                }
                // If response is ok then the data will be stored in the data state
                const data = await response.json()
                setData(data)
            }   catch (error) {
                // If an error is thrown then an alert will be shown with the error message
                alert(error.message)
            }   
        }
        // If there is a recipe to fetch then call the fetchSpecificRecipe function
        if (recipeToFetch){
            fetchSpecificRecipe()
        }
    }, [recipeToFetch])

    // function to set the new recipe to fetch
    function setNewRecipe() {
        // Check if the input is valid
        const validInput = checkInput(document.getElementById("ingredient-list-input").value)
        if (!validInput) {
            // If the input is not valid then dont fetch
            return
        }
        // Set the recipe to fetch to the input value
        setRecipeToFetch(document.getElementById("ingredient-list-input").value)
        document.getElementById("ingredient-list-input").value = ""
    }

    // Function to check if the enter key is pressed and if so then set the new recipe
    const enterKeyDown = (event) => {
        if (event.key === "Enter") {
            setNewRecipe()
        }
    };

    // Helper function to check if the input is valid
    const checkInput = (input) => {
        // The input can only contain letters
        const regex = /^[a-zA-Z\s]*$/
        if (input === "") {
            // If the input is empty then an alert will be shown  
            alert("Recipe Search Bar must not be empty!")
            return false
        } if (!regex.test(input)) {
            // If the input contains anything other than letters then an alert will be shown
            alert("Recipe Search Bar can only contain letters!")
            return false
        }
        return true
    }


    return (
        <body className="recipe-specific-search-body">
            <section>
                <div className="instruct">
                    <h1 className="title">Search for a specific recipe!</h1>
                    {data == null && <p className="subtitle">Enter the name of the recipe you're looking for in the search bar below.</p>}
                    {/* If a proper search is inputted and results are returned */}
                    {data && data.hits.length > 0 && (
                            <p className="subtitle"> Searching for {recipeToFetch}</p>
                        )}
                        {/* If no results are returned */}
                        {data && data.hits.length === 0 && (
                            <p className="subtitle"> No recipes found for {recipeToFetch}</p>
                        )}
                </div>

                {/* Search Bar and Seach Button  */}
                <div className="search-container">
                    <input
                        id="ingredient-list-input"
                        type="text"
                        placeholder="Search recipes here!"
                        onKeyUp={enterKeyDown}
                    ></input>
                    <button className="search-button" onClick={setNewRecipe}>
                        <img id="search-icon" src="/images/search-icon.png" alt="search icon"/>
                    </button> 
                </div>
                
                {/* If there are recipes to be displayed */}
                {data && data.hits.length > 0 && (
                    <div className="recipe-cards-container">
                        {/* Below is to display all the possible recipes up to the first 50 most relevan recipes */}
                        {data.hits.slice(0, 50).map((hit, index) => (
                            <RecipeCard
                                key={index}
                                data={hit}
                                searchInput={recipeToFetch}
                            />
                        ))}
                    </div>
                )}

            </section>
        </body>
    )
}