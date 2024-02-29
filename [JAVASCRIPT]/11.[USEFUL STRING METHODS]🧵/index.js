let userName = 'John Doe   '
let phoneNumber = '123-456-7890'

console.log(userName.length) // 9
console.log(userName.charAt(0)) // J
console.log(userName.indexOf('D')) // 5
console.log(userName.lastIndexOf('D')) // 5
userName = userName.trim() // removes whitespace from both ends of a string
userName = userName.toLowerCase() // converts a string to lowercase letters
userName = userName.toUpperCase() // converts a string to uppercase letters
phoneNumber = phoneNumber.replaceAll('-', '/') // replaces the first argument with the second argument

console.log(phoneNumber)
