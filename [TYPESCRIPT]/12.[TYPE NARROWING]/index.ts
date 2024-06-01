// Define a union type
type MyType = string | number;

// Function that processes values of MyType
function processValue(value: MyType): void {
  if (typeof value === "string") {
    // Inside this block, TypeScript knows that 'value' is a string
    console.log(value.toUpperCase()); // Allowed because 'value' is narrowed to string
  } else {
    // Inside this block, TypeScript knows that 'value' is a number
    console.log(value.toFixed(2)); // Allowed because 'value' is narrowed to number
  }
}

// Example usage
processValue("hello"); // Output: HELLO
processValue(3.14159); // Output: 3.14
