let a
let b
let c

/* 
a = window.prompt('Enter the length of side a: ')
a = Number(a)

b = window.prompt('Enter the length of side b: ')
b = Number(b)

c = Math.sqrt((c = Math.pow(a, 2) + Math.pow(b, 2)))

console.log('The length of side c is', c) 
*/

document.getElementById('submitButton').onclick = function () {
	// when the button is clicked...
	a = document.getElementById('aTextBox').value // get the value of the textbox and store it in the variable username
	a = Number(a)
	b = document.getElementById('bTextBox').value // get the value of the textbox and store it in the variable username
	b = Number(b)

	c = Math.sqrt((c = Math.pow(a, 2) + Math.pow(b, 2)))
	document.getElementById('cTextBox').innerHTML = 'The length of side c is ' + c // change the innerHTML of the label to 'Hello ' + username
}
