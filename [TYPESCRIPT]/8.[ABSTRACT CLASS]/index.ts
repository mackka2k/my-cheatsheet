abstract class Animal_2 {
	abstract makeSound_2(): void;
}

class Dog_2 extends Animal_2 {
	makeSound_2(): void {
			console.log("Woof!");
	}
}

const dog_2 = new Dog_2();
dog_2.makeSound_2(); // Output: Woof!
