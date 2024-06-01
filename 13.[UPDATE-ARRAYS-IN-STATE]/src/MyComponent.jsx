import React, { useState } from 'react'

function MyComponent() {
    const [foods, setFoods] = useState(['apple', 'banana', 'cherry', 'date', 'elderberry']);

    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        if (newFood) { // If newFood is not empty 
            setFoods(f => [...f, newFood]);
        }
    }

    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => i !== index)); // Sukuria naują masyvą be pasirinkto elemento
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter a food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent;
