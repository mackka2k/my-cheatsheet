// 2D array = An array of arrays

let fruits = ['apple', 'banana', 'kiwi']
let vegetables = ['asparagus', 'broccoli', 'carrot']
let meats = ['bacon', 'steak', 'chicken']

let groceryList = [fruits, vegetables, meats]

console.log(groceryList[2][1]) // 'steak'

for (let list of groceryList) {
	for (let food of list) {
		console.log(food)
	}
}
