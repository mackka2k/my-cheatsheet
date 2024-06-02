// useState() = Re-renders the component when the state value changes

// useRef()   = Does not couse re-renders when its value changes.
//              1. Accessing/Iteracting with DOM elements
//              2. Handling Focus, Animations, and Transitions
//              3. Managing Timers and Intervals

import React, { useEffect, useRef } from 'react'

function MyComponent() {
    const inputRef1 = useRef(null);
		const inputRef2 = useRef(null);
		const inputRef3 = useRef(null);
    useEffect(() => {
        console.log("Component rendered");
    }); 

    function handleClick1() {
        inputRef1.current.focus();
				inputRef1.current.style.backgroundColor = "lightblue";
				inputRef2.current.style.backgroundColor = "";
				inputRef3.current.style.backgroundColor = "";
    }

		function handleClick2() {
			inputRef2.current.focus();
			inputRef1.current.style.backgroundColor = "";
			inputRef2.current.style.backgroundColor = "lightblue";
			inputRef3.current.style.backgroundColor = "";
	}

	function handleClick3() {
		inputRef3.current.focus();
		inputRef1.current.style.backgroundColor = "";
		inputRef2.current.style.backgroundColor = "";
		inputRef3.current.style.backgroundColor = "lightblue";
}

    return (
        <div>
            <button onClick={handleClick1}>
                Click me 1!
            </button>
            <input ref={inputRef1}/>

						<button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2}/>

						<button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3}/>
        </div>
    );
}

export default MyComponent;
