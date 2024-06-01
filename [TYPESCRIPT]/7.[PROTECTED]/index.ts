class Animal {
	protected sound: string;

	constructor(sound: string) {
			this.sound = sound;
	}
}

class Dog_1 extends Animal {
	bark(): void {
			console.log("Barking: " + this.sound); // Accessing protected member from the base class
	}
}

const dog = new Dog_1("Woof!");
dog.bark(); // Output: Barking: Woof!
// console.log(dog.sound); // Error: Property 'sound' is protected and only accessible within class 'Animal' and its subclasses.
