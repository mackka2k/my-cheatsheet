// Type Conversion = change the datatype of a value to another
//						       (strings, numbers, booleans)

// let age = window.prompt('Enter your age: ') // window.prompt() returns a string

// console.log(typeof age)
// age = Number(age) // Number() converts a string to a number
// console.log(typeof age)
// age += 1

// console.log('Next year, you will be', age) // 21 + 1 = 21

let x
let y
let z

x = Number('3.14') // Number() converts a string to a number
y = String(3.14) // String() converts a number to a string
z = Boolean(3.14) // Boolean() converts a value to a boolean

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)
