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

    return (
        <body>
            <section>
                <div className="horizontal-flex-container">
                    {/* Add More Ingredients & Current Ingredients  */}
                    <div className="vertical-flex-container">
                        <input
                            id="ingredient-list-input"
                            type="text"
                            placeholder="Search recipes here!"
                        ></input>
                        <button className="search-button" onClick={setNewRecipe}>
                            <img id="search-icon" src="/images/search-icon.png" alt="search icon"/>
                        </button> 
                        <h1> Searching for {recipeToFetch}</h1>
                    </div>
                    {data && data.hits.length > 0 && (
                        <div className="recipe-cards-container">
                            <div className="vertical-flex-container">
                                {data.hits.slice(0, 10).map((hit, index) => (
                                    <RecipeCard
                                        key={index}
                                        recipeImage={hit.recipe.image}
                                        recipeName={hit.recipe.label}
                                    />
                                ))}
                            </div>
                            <div className="vertical-flex-container">
                                {data.hits.slice(11, 20).map((hit, index) => (
                                    <RecipeCard
                                        key={index}
                                        recipeImage={hit.recipe.image}
                                        recipeName={hit.recipe.label}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </body>
    )
}