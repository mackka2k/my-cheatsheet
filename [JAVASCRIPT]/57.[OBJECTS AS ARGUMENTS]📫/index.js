class Car {
	constructor(model, year, color) {
		this.model = model
		this.year = year
		this.color = color
	}
}

const car1 = new Car('Mustang', 1969, 'red')
const car2 = new Car('Camaro', 1967, 'blue')
const car3 = new Car('Corvette', 1963, 'yellow')

changeColor(car1, 'black')
displayInfo(car1)

function displayInfo(car) {
	console.log(car.model)
	console.log(car.year)
	console.log(car.color)
}

function changeColor(car, newColor) {
	car.color = newColor
}
