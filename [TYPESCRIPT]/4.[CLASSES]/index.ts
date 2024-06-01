class Dog {
	name: string;
	age: number;

	constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
	}

	bark(): void {
			console.log(`${this.name} says woof!`);
	}
}

const myDog = new Dog("Buddy", 3);
myDog.bark(); // Output: Buddy says woof!
