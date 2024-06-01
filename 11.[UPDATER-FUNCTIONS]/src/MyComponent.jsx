// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(y = y + 1)
//                    Allow for safe updates based on previous state / not for current state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import React, { useState } from 'react'

function MyComponent() {

	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(c => c + 1);
		setCount(c => c + 1);
		setCount(c => c + 1);
	}

	const decrement = () => {
		setCount(c => c - 1);
		setCount(c => c - 1);
		setCount(c => c - 1);
	}

	const reset = () => {
		setCount(0);
	}

	return (
		<div>
			<h2>Count: {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}
export default MyComponent;