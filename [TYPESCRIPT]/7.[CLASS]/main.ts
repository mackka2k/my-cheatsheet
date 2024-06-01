class Car {
	name: string
	price: number

	constructor(name: string, price: number) {
		this.name = name
		this.price = price
	}

	public getInfo(): string {
		return `The ${this.name} costs ${this.price}`
	}
}

class Bas extends Car {
	constructor(name: string, price: number) {
		super(name, price)
	}

	test() {
		console.log(this.getInfo())
	}
}

const myCar = new Car('Ferrari', 1000000)
console.log(myCar.getInfo()) // Accessing getInfo() from outside the class
