import React, {useState} from "react";


// Send input to searchByIngredients
const IngredientInput = ({addIngredient}) => {
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim()) {
            addIngredient(input.trim());
            setInput("");
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
