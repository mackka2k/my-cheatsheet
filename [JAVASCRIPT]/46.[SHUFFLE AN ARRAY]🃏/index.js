let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

shuffle(cards)
console.log(cards)

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * i)
		let temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}
