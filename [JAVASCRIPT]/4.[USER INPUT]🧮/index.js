// HOW TO ACCEPT USER INPUT
// [EASY WAY] WITH A WINDOW PROMPT

// let username = window.prompt('Enter your name: ')
// console.log('Hello', username)

// [DIFFICULT WAY] HTML TEXTBOX
document.getElementById('myButton').onclick = function () {
	// when the button is clicked...
	username = document.getElementById('myText').value // get the value of the textbox and store it in the variable username
	console.log('Hello', username) // print the value of username to the console
	document.getElementById('myLabel').innerHTML = 'Hello ' + username // change the innerHTML of the label to 'Hello ' + username
}
