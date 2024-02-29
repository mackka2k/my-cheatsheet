// Example 1: Declaring variables with explicit types
var numberVariable = 10;
var stringVariable = "Hello, TypeScript!";
var booleanVariable = true;
var arrayVariable = [1, 2, 3, 4, 5];
var tupleVariable = ["apple", 5];
var anyVariable = 10; // Any type allows any value
// Example 2: Type inference
var inferredNumber = 5; // TypeScript infers number type
var inferredString = "TypeScript"; // TypeScript infers string type
// Example 3: Const variables
var PI = 3.14;
// PI = 3.14159; // Error: Cannot assign to 'PI' because it is a constant
// Example 6: Default parameter values
function Greet(name) {
    if (name === void 0) { name = "World"; }
    console.log("Hello, " + name + "!");
}
Greet(); // Output: Hello, World!
Greet("Alice"); // Output: Hello, Alice!
