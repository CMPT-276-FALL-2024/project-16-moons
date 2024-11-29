import React from "react";
import { useLocation } from 'react-router-dom'
import RecipeCard from "./recipeCard";


const appId = process.env.REACT_APP_EDAMAM_APP_ID
const apiKey = process.env.REACT_APP_EDAMAM_API_KEY

export default function RecipeSpecificSearchBody() {
    const location = useLocation()
    const { recipe } = location.state || {};
    const [recipeToFetch, setRecipeToFetch] = React.useState(recipe)
    const [data, setData] = React.useState(null)

    React.useEffect( () => {
        const fetchSpecificRecipe = async () => {
            try{
                const response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${apiKey}&type=public&q=${recipeToFetch}`)
                if (!response.ok) {
                    if (response.status === 401) {
                        // API key is invalid
                        throw new Error('Unauthorized request: API key is invalid. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                    }
                    // Generic error
                    throw new Error('Error occured while getting a fun fact. Please contact one of our team members for help by clicking the mail symbol in the "Contact Us" section')
                }
                const data = await response.json()
                setData(data)
            }   catch (error) {
                alert(error.message)
            }   
        }
        if (recipeToFetch){
            fetchSpecificRecipe()
        }
    }, [recipeToFetch])
  
    function setNewRecipe() {
        setRecipeToFetch(document.getElementById("ingredient-list-input").value)
        document.getElementById("ingredient-list-input").value = ""
    }

    const enterKeyDown = (event) => {
        if (event.key === "Enter") {
            setRecipeToFetch(event.target.value);
        }
    };

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