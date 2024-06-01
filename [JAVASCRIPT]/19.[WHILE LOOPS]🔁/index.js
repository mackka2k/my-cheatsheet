// while loop = repeat some code
//              while a condition is true
//              potentially infinite

let userName = ''

while (userName == '' || userName == null) {
	userName = prompt('Enter your name')
}

alert('Hello ' + userName)
