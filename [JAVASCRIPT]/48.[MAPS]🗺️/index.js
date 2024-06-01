// Map: An object that holds key-value pairs of any data type

// Creating a Map with initial key-value pairs
const store = new Map([
	['t-shirt', 9.99],
	['sweater', 19.99],
	['jeans', 29.99],
	['jacket', 49.99],
])

// Adding a new item to the store
store.set('shoes', 39.99) // SET METHOD

// Removing an item from the store
store.delete('jacket') // DELETE METHOD

// Checking if an item exists in the store
console.log(`Does the store have a jacket? ${store.has('jacket')}`) // HAS METHOD

// Getting the size (number of items) in the store
console.log(`Number of items in the store: ${store.size}`) // SIZE PROPERTY

// Iterating over the items in the store
console.log('Items in the store:')
store.forEach((value, key) => console.log(`${key}: $${value.toFixed(2)}`))
