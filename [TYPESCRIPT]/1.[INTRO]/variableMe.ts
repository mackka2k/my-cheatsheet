// Example 1: Declaring variables with explicit types
let numberVariable: number = 10;
let stringVariable: string = "Hello, TypeScript!";
let booleanVariable: boolean = true;
let arrayVariable: number[] = [1, 2, 3, 4, 5];
let tupleVariable: [string, number] = ["apple", 5];
let anyVariable: any = 10; // Any type allows any value

// Example 2: Type inference
let inferredNumber = 5; // TypeScript infers number type
let inferredString = "TypeScript"; // TypeScript infers string type

// Example 3: Const variables
const PI: number = 3.14;
// PI = 3.14159; // Error: Cannot assign to 'PI' because it is a constant

// Example 6: Default parameter values
function greet(name: string = "World") {
    console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, World!
greet("Alice"); // Output: Hello, Alice!

export { }

