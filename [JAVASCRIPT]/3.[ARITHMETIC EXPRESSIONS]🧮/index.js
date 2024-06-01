// arithmetic expression is a combination of...
// operands (values, variables, etc.)
// operators (+, -, *, /, %, **)
// that can be evaluated to a value
// ex. y = x + 5; // x + 5 is an arithmetic expression

let students = 20

// students = students + 1 // 21
// students = students - 1 // 20
// students = students * 2 // 40
// students = students / 2 // 20
// students = students % 2 // 0
// students = students ** 2 // 400

// students += 1 // 21
// students -= 1 // 20
// students *= 2 // 40
// students /= 2 // 20

/* 
	operator precedence
	1. parenthesis ()
	2. exponents **
	3. multiplication * and division /
	4. addition + and subtraction -
*/

let result = (1 + 2) * (3 + 4) // 21
console.log(result)
