import React from "react";
import { useLocation } from 'react-router-dom'
import RecipeCard from "./recipeSpecificSearchComponents/recipeCard";
import RecipeSpecificSearchNavbar from "./recipeSpecificSearchComponents/recipeSpecificSearchNavbar";

const appId = process.env.REACT_APP_EDAMAM_APP_ID
const apiKey = process.env.REACT_APP_EDAMAM_API_KEY

export default function RecipeSpecificSearchPage() {
    const location = useLocation()
    const { recipe } = location.state || {};
    const [recipeToFetch, setRecipe] = React.useState(recipe)
    const [recipeName, setRecipeName] = React.useState('')
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
                console.log(data.hits[0].recipe)
                console.log(data.hits[0].recipe.label)
                setRecipeName(data.hits[0].recipe.label)
                setData(data)
            }   catch (error) {
                alert(error.message)
            }   
        }
        fetchSpecificRecipe()
    }, [])
  
    return (
        <div>
            <RecipeSpecificSearchNavbar />
            <h1>Recipe Specific Search Page</h1>
            <h1>{recipeName}</h1>
            {data && data.hits.length > 0 && (
                <RecipeCard recipeImage={data.hits[0].recipe.image} recipeName={data.hits[0].recipe.label} recipeIngredients={data.hits[0].recipe.ingredientLines} recipeUrl={data.hits[0].recipe.url}/>
            )}
        </div>
    )
}