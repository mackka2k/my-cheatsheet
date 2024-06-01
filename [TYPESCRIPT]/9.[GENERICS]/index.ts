// A simple generic class to hold any type of value
class Box<T> { // T is a placeholder for the type of value the Box will hold
	private value: T; 

	constructor(value: T) { 
			this.value = value;
	}

	getValue(): T { 
			return this.value;
	}

	setValue(newValue: T): void {
			this.value = newValue;
	}
}

// Create a box to hold a string
const stringBox = new Box<string>("Hello, World!");

// Create a box to hold a number
const numberBox = new Box<number>(42);

// Get and log the values
console.log(stringBox.getValue()); // Output: Hello, World!
console.log(numberBox.getValue()); // Output: 42

// Update the values
stringBox.setValue("Goodbye, World!");
numberBox.setValue(100);

// Get and log the updated values
console.log(stringBox.getValue()); // Output: Goodbye, World!
console.log(numberBox.getValue()); // Output: 100
