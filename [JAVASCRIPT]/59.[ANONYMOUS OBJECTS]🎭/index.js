// anonymous objects = Objects wihout a name
//                     Not directly referenced
//                     Less syntax. No need for unique names

class Card {
	constructor(value, suit) {
		this.value = value
		this.suit = suit
	}
}

// Create a deck of cards
let cards = [
	new Card('A', 'Spades'),
	new Card('K', 'Diamonds'),
	new Card('Q', 'Clubs'),
	new Card('J', 'Hearts'),
	new Card('10', 'Spades'),
	new Card('9', 'Diamonds'),
	new Card('8', 'Clubs'),
	new Card('7', 'Hearts'),
	new Card('6', 'Spades'),
	new Card('5', 'Diamonds'),
	new Card('4', 'Clubs'),
	new Card('3', 'Hearts'),
	new Card('2', 'Spades'),
]

cards.forEach(card => console.log(card.value, card.suit))
