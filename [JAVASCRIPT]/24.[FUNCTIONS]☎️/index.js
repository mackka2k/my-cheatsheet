//function = Define code once, and use it many times.
//           To perform some code, call the function name.

startProgram() // call the function

function startProgram() {
	// define the function
	let userName = 'Bro'
	let age = 21

	happyBirthday(userName, age) // call the function
}

function happyBirthday(userName, age) {
	console.log('Happy birthday to you!')
	console.log('Happy birthday to you!')
	console.log('Happy birthday dear', userName)
	console.log('Happy birthday to you!')
	console.log('Happy Birthday', userName, 'you are', age, 'years old!')
}
