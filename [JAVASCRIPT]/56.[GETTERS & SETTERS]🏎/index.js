// get = binds an object property to a function
//       when that property is accessed
// set = binds an object property to a function
//       to be executed when there is an attempt

class Car {
	constructor(power) {
		this._gas = 25
		this._power = power
	}
	get power() {
		return `${this._power}hp`
	}
	get gas() {
		return `${this._gas}L (${(this._gas / 50) * 100}%)`
		// Fixed the formula for calculating the gas percentage
	}
	set gas(value) {
		if (value > 50) {
			value = 50
		} else if (value < 0) {
			value = 0
		}
		this._gas = value
	}
}

let car = new Car(100)

car.gas = 50 // Set the gas to 50L

console.log(car.power) // Output: 100hp
console.log(car.gas) // Output: 25L (50%)
