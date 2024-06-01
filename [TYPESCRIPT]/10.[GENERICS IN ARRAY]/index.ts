// A function to reverse an array of any type using generics
const reverseArray = <T>(array: T[]): T[] => array.slice().reverse();

// Example usage
const numbers: number[] = [1, 2, 3, 4, 5];
const reversedNumbers: number[] = reverseArray(numbers);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

const strings: string[] = ["apple", "banana", "orange"];
const reversedStrings: string[] = reverseArray(strings);
console.log(reversedStrings); // Output: ["orange", "banana", "apple"]
