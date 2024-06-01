import React, { useEffect, useState } from 'react'

// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})          // Runs after every re-render
// 2. useEffect(() => {}, [])      // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// [USES]
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from and API
// #5 Clean up when a component unmounts

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    // useEffect(() => { // Runs after every re-render
    //     document.title = `Count: ${count}`;
    // });

    // useEffect(() => { // Runs only one time on mount
    //     document.title = `My Counter App`;
    // } , []); 

    useEffect(() => { // Runs only one time on mount
        document.title = `Count: ${count} ${color}`;
    } , [count, color]); // if count changes, run this effect



    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === 'green' ? 'red' : 'green');
    }

    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default MyComponent;

