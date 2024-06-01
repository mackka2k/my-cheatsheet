// super = Refers to the parent class.
//         Commonly used to invoke constructor of a parent class

class Animal {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}

class Rabbit extends Animal {
	constructor(name, age, runSpeed) {
		super(name, age)
		this.runSpeed = runSpeed
	}
}

class Fish extends Animal {
	constructor(name, age, swimSpeed) {
		super(name, age)
		this.swimSpeed = swimSpeed
	}
}

class Hawk extends Animal {
	constructor(name, age, flySpeed) {
		super(name, age)
		this.flySpeed = flySpeed
	}
}

const rabbit = new Rabbit('Rabbit', 3, 20)
const fish = new Fish('Fish', 1, 10)
const hawk = new Hawk('Hawk', 5, 30)

console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)
