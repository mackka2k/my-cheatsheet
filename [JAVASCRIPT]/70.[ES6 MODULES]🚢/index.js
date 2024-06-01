// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code to use whenever we want
// Great for any general utility values and functions
// Help to make your code more reusable and maintanable
// Think of modules as seperate chapters of a book

import { PI, getArea, getCircumference } from './math_util.js'

console.log(PI)

let Circumference = getCircumference(10)
console.log(Circumference)

let Area = getArea(10)
console.log(Area)
