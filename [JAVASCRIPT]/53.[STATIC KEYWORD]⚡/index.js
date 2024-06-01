// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configurations, etc.
//          methods: useful for utility functions

class Car {
	static numberOfCars = 0

	constructor(model) {
		this.model = model
		Car.numberOfCars += 1
	}

	startRace() {
		console.log('Ready, set, go!')
	}
}

const car1 = new Car('Mustang')
const car2 = new Car('Camaro')
const car3 = new Car('Corvette')
const car4 = new Car('Challenger')

car1.startRace() // Start the race for car1
