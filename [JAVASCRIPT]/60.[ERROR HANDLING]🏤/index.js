// error = object with a description of something that has gone wrong

// Can't open a file
// Lose connection
// User types incorrect input
// TypeError

try {
	let x = window.prompt('Enter a number')
	x = Number(x)

	if (isNaN(x)) {
		throw 'You did not enter a number'
	}
	if (x == '') {
		throw 'You did not enter anything'
	}

	console.log(`You entered ${x}`)
} catch (error) {
	console.log(error)
} finally {
	console.log('This code will always run')
}
