// do while loop = do some code,
//                 then check a condition
//                 repeat until the condition is true

let userName = ''

do {
	userName = prompt('Enter your name')
} while (userName == '' || userName == null)

console.log('Hello ' + userName)
