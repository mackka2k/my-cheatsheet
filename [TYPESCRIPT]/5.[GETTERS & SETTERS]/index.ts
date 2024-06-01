class Person {
	private _name: string;
	private _age: number;

	constructor(name: string, age: number) {
			this._name = name;
			this._age = age;
	}

	get name(): string {
			return this._name;
	}

	set name(name: string) {
			this._name = name;
	}

	get age(): number {
			return this._age;
	}

	set age(age: number) {
			if (age >= 0 && age <= 120) {
					this._age = age;
			} else {
					console.log("Invalid age!");
			}
	}
}

const person = new Person("Alice", 30);

console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30

person.name = "Bob";
person.age = 25;

console.log(person.name); // Output: Bob
console.log(person.age); // Output: 25

person.age = 150; // Output: Invalid age!
