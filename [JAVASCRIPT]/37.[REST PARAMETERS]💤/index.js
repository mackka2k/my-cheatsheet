// rest parameters = represents an idefinite number of parameters
// ...               of parameters
//									 (packs arguments into an array)

let a = 1
let b = 2
let c = 3
let d = 4
let e = 5

console.log(sum(a, b, c, d, e))

function sum(...numbers) {
	let sum = 0
	for (let number of numbers) {
		sum += number
	}
	return sum
}
