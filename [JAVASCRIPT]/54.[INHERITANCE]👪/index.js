// inheritance = a child class can inherit all the methods and properties from another class

class Animal {
	alive = true

	eat() {
		console.log('This animal is eating...')
	}

	sleep() {
		console.log('This animal is sleeping...')
	}
}

class Rabbit extends Animal {
	alive = true
	name = 'Rabbit'

	run() {
		console.log(`${this.name} is running...`)
	}
}
class Fish extends Animal {
	alive = true
	name = 'Fish'

	swim() {
		console.log(`${this.name} is swimming...`)
	}
}
class Hawk extends Animal {
	name = 'Hawk'

	fly() {
		console.log(`${this.name} is flying...`)
	}
}

const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()

console.log(rabbit.alive)
rabbit.eat()
rabbit.sleep()
rabbit.run()
