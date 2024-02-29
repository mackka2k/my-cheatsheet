// array.reduce() = reduces an array to a single value

let prices = [5, 7.99, 9.99, 0.99, 21]
let total = prices.reduce(checkOut)

console.log(`total: ${total}`)

function checkOut(total, element) {
	return total + element
}
