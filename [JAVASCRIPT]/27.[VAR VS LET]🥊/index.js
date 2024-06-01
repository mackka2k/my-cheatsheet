// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to function scope (){}

// always use let instead of var

for (let i = 1; i <= 3; i += 1) {
	console.log(i) // inside of the for loop, let is accessible
}

// console.log(i) // outside of the for loop, let is not accessible

for (var j = 1; j <= 3; j += 1) {
	console.log(j) // inside of the for loop, var is accessible
}

console.log(j) // outside of the for loop, var is accessible
