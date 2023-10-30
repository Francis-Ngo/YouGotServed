import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        
        axios.get('/meals')
            .then(response => {
                setMeals(response.data);
            })
            .catch(error => {
                console.error('Error fetching meals data: ', error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Meal Recipes</h1>
            <ul>
                {meals.map((meal, index) => (
                    <li key={index}>
                        <h2>{meal.name}</h2>
                        <p>Type: {meal.type}</p>
                        {/* Add more details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
