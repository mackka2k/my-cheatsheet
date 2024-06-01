// Function to add two numbers
const addNumbers = (num1: number, num2: number): number => num1 + num2;

// Function to concatenate two strings
const concatenateStrings = (str1: string, str2: string): string => str1 + str2;

// Function to find the maximum of two numbers
const findMax = (num1: number, num2: number): number => (num1 > num2 ? num1 : num2);

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

// Function to check if a number is even
const isEven = (num: number): boolean => num % 2 === 0;

// Function to reverse a string
const reverseString = (str: string): string => str.split('').reverse().join('');

// Function to calculate the factorial of a number
const factorial = (num: number): number => (num === 0 || num === 1 ? 1 : num * factorial(num - 1));

// Function to check if a string is a palindrome
const isPalindrome = (str: string): boolean => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

const heros = ["Superman ", "Batman ", "Wonder"]
heros.map((hero):string => {
		return `hero is ${hero}`;
})

function consoleError(errmsg:string):void {
	console.log(errmsg);
}

function handleError(errmsg:string):never {
	throw new Error(errmsg);
}

// Example usage
console.log(addNumbers(5, 3)); // Output: 8
console.log(concatenateStrings("Hello", " World!")); // Output: Hello World!
console.log(findMax(10, 20)); // Output: 20
console.log(capitalizeFirstLetter("typescript")); // Output: Typescript
console.log(isEven(7)); // Output: false
console.log(reverseString("typescript")); // Output: tpircsepyt
console.log(factorial(5)); // Output: 120
console.log(isPalindrome("radar")); // Output: true
