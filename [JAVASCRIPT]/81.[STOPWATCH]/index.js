// promise = object that encapsulates the result of an asynchronous operation
// 					 let asynchronous methods return values like synchronous methods
//           "I promise to return something in the future"

// Promise states:	1. Pending then 2. Fulfilled or 3. Rejected

// 									1. Pending = initial state, neither fulfilled nor rejected
// 									2. Fulfilled = operation completed successfully
// 									3. Rejected = operation failed

// .then() naudojamas gauti sėkmingai išvykdyto Promise rezultatą.
// .catch() naudojamas gauti nepavykusio Promise rezultatą.

// Example 1: Promise resolving with a successful operation
const promiseLoaded = new Promise((resolve, reject) => {
	let fileLoaded = true // Simulating a successful operation

	if (fileLoaded) {
		resolve('File loaded successfully')
	} else {
		reject('File not loaded')
	}
})

promiseLoaded
	.then(successMessage => {
		console.log('Sėkmingai gautas rezultatas:', successMessage) // Logging the success message when promise is resolved
	})
	.catch(errorMessage => {
		console.error('Klaida:', errorMessage) // Logging the error message when promise is rejected
	})

// Example 2: Promise resolving after a delay of 5 seconds
const delayPromise = new Promise(resolve => {
	setTimeout(() => {
		resolve('5 seconds delay is over!')
	}, 5000) // Resolving the promise after 5 seconds
})

delayPromise.then(message => {
	console.log(message, 'Visogero ') // Logging the message after the delay
})
