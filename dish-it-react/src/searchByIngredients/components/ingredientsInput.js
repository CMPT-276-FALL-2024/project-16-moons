import React, {useState} from "react";


// Send input to searchByIngredients
const IngredientInput = ({addIngredient}) => {
    const [input, setInput] = useState("");

    // Helper function to check if the input is valid
    const checkInput = (input) => {
        // The input can only contain letters
        const regex = /^[a-zA-Z\s]*$/;
        if (input === "") {
            // If the input is empty then an alert will be shown
            alert("Recipe Search Bar must not be empty!");
            return false;
        }
        if (!regex.test(input)) {
            // If the input contains anything other than letters then an alert will be shown
            alert("Recipe Search Bar can only contain letters!");
            return false;
        }
        return true;
    };

    const handleAdd = () => {
        const validInput = checkInput(document.getElementById("ingredient-list-input-SBI").value);
        if (validInput) {
            if (input.trim()) {
                addIngredient(input.trim());
                setInput("");
            }
        }
    };

    // QoL: Add when press Enter
    const pressedEnter = (e) => {
        if (e.key === "Enter") {
            handleAdd();
        }
    };

    return (
        <div>
            <h3 id="title-SBI">Search by Ingredients</h3>
            <p id="instruct-SBI">Add Your Ingredients Below (Example: Chicken)</p>
            <div className="ingredient-input">
                <input
                type="text"
                id="ingredient-list-input-SBI"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={pressedEnter}
                placeholder="Add an ingredient..."
                />
                <button onClick={handleAdd}>&#43;</button>
            </div>
        </div>
    );
};

export default IngredientInput;
