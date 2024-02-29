// arrow function = compact alternative to a traditional function expression, but is limited and can't be used in all situations
// =>

// traditional function expression
const percent1 = function (x, y) {
	return (x / y) * 100
}

// arrow function expression
const percent2 = (x, y) => (x / y) * 100 // (no curly braces) and no need to use the return keyword, and function word is not needed

console.log(percent(2, 5)) // 40
