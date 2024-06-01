// Get the body element
let element = document.body

// Access the first child element of the body
let child = element.firstElementChild

// Check if the first child exists before modifying its style
if (child) {
	// Change the background color of the first child of the body
	child.style.backgroundColor = 'tomato'
}

// Accessing elements by their IDs
let fruitList = document.getElementById('fruit')
let vegetableList = document.getElementById('vegetables')
let dessertList = document.getElementById('dessert')

// Change background colors of specific list items
if (fruitList && vegetableList && dessertList) {
	// Change the background color of the first list item in the fruit list
	fruitList.firstElementChild.style.backgroundColor = 'lightgreen'

	// Change the background color of the last list item in the vegetable list
	vegetableList.lastElementChild.style.backgroundColor = 'lightblue'

	// Change the background color of the second list item in the dessert list
	dessertList.children[1].style.backgroundColor = 'lightcoral'

	// Convert the dessert list items to an array and log their text content
	let dessertItems = Array.from(dessertList.children)
	dessertItems.forEach(item => {
		console.log(item.textContent)
	})
}
