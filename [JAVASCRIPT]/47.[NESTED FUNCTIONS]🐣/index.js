// nested functions = Functions inside other functions
//                    Outer functions have access to inner functions
//                    Inner functions are hidden from outside world
// 									  Used in closures (future video topic)

let userName = 'John'
let userInbox = 0

login()

function login() {
	displayUserName()
	displayUserInbox()

	function displayUserName() {
		console.log(`Hello, ${userName}`)
	}

	function displayUserInbox() {
		console.log(`You have ${userInbox} messages`)
	}
}
