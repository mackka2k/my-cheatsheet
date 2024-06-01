// slice() extacts a section of a string
//		     and returns it as a new string
//			   without modifying the original string

let fullname = 'John Doe'
let firstName
let lastName

// firstName = fullname.slice(0, 4) // John
// lastName = fullname.slice(5) // Doe

firstName = fullName.slice(0, fullName.indexOf(' ')) // John
lastName = fullName.slice(fullName.indexOf(' ') + 1) // Doe

console.log(lastName) // Doe
console.log(firstName) // John
