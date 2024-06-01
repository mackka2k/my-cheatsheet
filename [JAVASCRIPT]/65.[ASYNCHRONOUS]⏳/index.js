// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence
//                     Ex. Access a database
//                     Fetch a file
//                     Tasks that take time
//                     (start now, finish sometime later)

// Synchronous example
console.log('Synchronous code starts...')
for (let i = 0; i < 5; i++) {
	console.log(`Synchronous iteration ${i}`)
}
console.log('Synchronous code ends!')

// Asynchronous example
console.log('Asynchronous code starts...')
setTimeout(() => {
	console.log('Asynchronous code: This will appear later!')
}, 3000) // This will execute after 3 seconds

console.log('Asynchronous code ends!')
