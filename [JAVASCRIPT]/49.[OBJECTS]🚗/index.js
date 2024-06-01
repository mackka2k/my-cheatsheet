// object = A group of properties and methods
//          Properties = what an object has
//					Methods = what an object can do
//          use . to access properties/methods

const car1 = {
	model: 'Mustang',
	color: 'red',
	year: 1969,

	drive: function () {
		console.log('You drive the car')
	},
	brake: function () {
		console.log('You step on the brake')
	},
}

const car2 = {
	model: 'Camaro',
	color: 'blue',
	year: 1922,

	drive: function () {
		console.log('You drive the car')
	},
	brake: function () {
		console.log('You step on the brake')
	},
}

console.log(car1.model)
console.log(car1.color)
console.log(car1.year)

console.log(car2.model)
console.log(car2.color)
console.log(car2.year)

car1.drive() // Use car1 instead of car for calling methods
car1.brake() // Use car1 instead of car for calling methods
