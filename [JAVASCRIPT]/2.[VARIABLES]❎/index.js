// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var / let / const)
// 2. Assignment (= assignment operator)

let firstName = 'Bro' // strings
let age = 21 // numbers
let student = true // booleans

// age = age + 1

console.log('Hello', firstName)
console.log('You are', age, 'years old')
console.log('Enrolled:', student)

document.getElementById('p1').innerHTML = 'Hello ' + firstName // getting the element with id 'p1' and changing its innerHTML to 'Hello Bro'
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old'
document.getElementById('p3').innerHTML = 'Enrolled: ' + student

// innerHTML is a property of the element object that allows us to change the HTML inside of an element
