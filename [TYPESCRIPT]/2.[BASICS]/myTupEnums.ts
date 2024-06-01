// Tuple representing a person's information: [name, age, isStudent]
type PersonInfo = [string, number, boolean];

// Declare a variable of type PersonInfo
let person: PersonInfo;

// Initialize the variable
person = ["Alice", 30, false];

// Accessing elements of the tuple
console.log(`Name: ${person[0]}, Age: ${person[1]}, Is Student: ${person[2]}`);
