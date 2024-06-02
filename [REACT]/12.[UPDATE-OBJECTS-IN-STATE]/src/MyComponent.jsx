import React, { useState } from 'react'

function MyComponent() {
    const [car, setCar] = useState({ year: 2010, make: 'Toyota', model: 'Camry' });

    function handleYearChange(e) {
        setCar(c => ({ ...c, year: e.target.value }));
    }

    function handleMakeChange(e) {
        setCar(c => ({ ...c, make: e.target.value }));
    }

    function handleModelChange(e) {
        setCar(c => ({ ...c, model: e.target.value }));
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
        </div>
    );
}

export default MyComponent;
