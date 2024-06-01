// callback = a function passed as an argument to another function

// Ensures that a function is not going to run before a task is completed but will run right after the task has completed.
// It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
// Ex. Wait for a file to load before doing something with the data.

sum(2, 3, displayDOM)

function sum(a, b, myFunc) {
	let result = a + b
	return myFunc(a + b)
}

function displayConsole(output) {
	console.log(output)
}

function displayDOM(output) {
	document.getElementById('myLabel').innerHTML = output
}
