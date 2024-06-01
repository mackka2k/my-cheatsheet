// this = reference to a particular object
// 				the object depends on the immediate context

const car1 = {
	model: 'Mustang',
	color: 'red',
	year: 1969,

	drive: function () {
		console.log(`You drive the ${this.model}`)
	},
}

const car2 = {
	model: 'Camaro',
	color: 'blue',
	year: 1922,

	drive: function () {
		console.log(`You drive the ${this.model}`)
	},
}

car1.drive()
car2.drive()
