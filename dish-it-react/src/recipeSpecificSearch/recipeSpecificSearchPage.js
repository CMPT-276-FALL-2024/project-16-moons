import React from "react";
import { useLocation } from 'react-router-dom'

const appId = process.env.REACT_APP_EDAMAM_APP_ID
const apiKey = process.env.REACT_APP_EDAMAM_API_KEY

export default function RecipeSpecificSearchPage() {
    const location = useLocation()
    const { recipe } = location.state || {};
    const [recipeToFetch, setRecipe] = React.useState(recipe)
    const [recipeName, setRecipeName] = React.useState('')

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
                console.log(data.hits[0].recipe)
                console.log(data.hits[0].recipe.label)
                setRecipeName(data.hits[0].recipe.label)
            }   catch (error) {
                alert(error.message)
            }   
        }
        fetchSpecificRecipe()
    }, [])
  
    return (
        <div>
            <h1>Recipe Specific Search Page</h1>
            <h1>{recipeName}</h1>
        </div>
    )
}