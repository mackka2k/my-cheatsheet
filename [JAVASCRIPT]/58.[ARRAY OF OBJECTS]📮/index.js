class Car {
	constructor(model, year, color) {
		this.model = model
		this.year = year
		this.color = color
	}

	drive() {
		console.log(`The ${this.color} ${this.year} ${this.model} is driving.`)
	}
}

const car1 = new Car('Mustang', 1969, 'red')
const car2 = new Car('Camaro', 1967, 'blue')
const car3 = new Car('Corvette', 1963, 'yellow')
const car4 = new Car('Challenger', 1970, 'orange')

const cars = [car1, car2, car3, car4]

console.log(cars[0].model)
console.log(cars[0].year)
console.log(cars[0].color)

cars[0].drive()
cars[1].drive()
cars[2].drive()

function startRace(cars) {
	for (const car of cars) {
		car.drive()
	}
}

startRace(cars) // Calls the drive method for all cars in the race
