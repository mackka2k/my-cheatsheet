
---[JAVASCRIPT]---
---
# 1. [INTRO] 🌐

`console.log()` sends messages to the browser's console for debugging purposes.  
`window.alert()` creates a pop-up box that interrupts the user's flow to display important messages.

```js
console.log('I like pizza');
console.log("It's really good");
window.alert('I REALLY LOVE PIZZA!');
```

---

# 2. [VARIABLES] ❎

- A variable is a container for storing data. Variables are declared using `var`, `let`, or `const` and hold values like strings, numbers, or booleans.
- `document.getElementById().innerHTML` changes the HTML content of an element.

```js
let firstName = 'Bro'; // string
let age = 21; // number
let student = true; // boolean

console.log('Hello', firstName);
console.log('You are', age, 'years old');
console.log('Enrolled:', student);

document.getElementById('p1').innerHTML = 'Hello ' + firstName;
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old';
document.getElementById('p3').innerHTML = 'Enrolled: ' + student;
```


# 3. [ARITHMETIC EXPRESSIONS] 🧮

- An arithmetic expression combines operands (values, variables) and operators (`+`, `-`, `*`, `/`, `%`, `**`) to be evaluated to a value.
- Operator precedence: 
  1. Parentheses `()`
  2. Exponents `**`
  3. Multiplication `*` and division `/`
  4. Addition `+` and subtraction `-`

```js
let students = 20;

// students = students + 1; // 21
// students = students - 1; // 20
// students = students * 2; // 40
// students = students / 2; // 20
// students = students % 2; // 0
// students = students ** 2; // 400

// students += 1; // 21
// students -= 1; // 20
// students *= 2; // 40
// students /= 2; // 20

let result = (1 + 2) * (3 + 4); // 21
console.log(result);
```

---

# 4. [USER INPUT] 🧮

- Accepting user input can be done easily through a prompt or by using HTML elements like textboxes.

```js
// HOW TO ACCEPT USER INPUT
// [EASY WAY] WITH A WINDOW PROMPT

// let username = window.prompt('Enter your name: ');
// console.log('Hello', username);

// [DIFFICULT WAY] HTML TEXTBOX
document.getElementById('myButton').onclick = function () {
	// when the button is clicked...
	username = document.getElementById('myText').value; // get the value of the textbox and store it in the variable username
	console.log('Hello', username); // print the value of username to the console
	document.getElementById('myLabel').innerHTML = 'Hello ' + username; // change the innerHTML of the label to 'Hello ' + username
}
```

---
# 5. [TYPE CONVERSION] 💱

- Type conversion is the process of changing the datatype of a value to another type (e.g., strings, numbers, booleans).

```js
// let age = window.prompt('Enter your age: '); // window.prompt() returns a string

// console.log(typeof age);
// age = Number(age); // Number() converts a string to a number
// console.log(typeof age);
// age += 1;

// console.log('Next year, you will be', age); // 21 + 1 = 22

let x;
let y;
let z;

x = Number('3.14'); // Number() converts a string to a number
y = String(3.14); // String() converts a number to a string
z = Boolean(3.14); // Boolean() converts a value to a boolean

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
```

---

# 6. [CONST] ⛔

**Const** defines a variable that cannot be changed once assigned. 

```js
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt('Enter the radius of the circle: ');
radius = Number(radius);

circumference = 2 * PI * radius;

console.log('The circumference of the circle is', circumference);
```

---

# 7. [MATH] 🔣

Mathematical functions in JavaScript can be accessed via the `Math` object, which provides methods for performing common mathematical operations.

```js
let x;
let y = 5;
let z = 9;
let maximum;
let minimum;

// x = Math.round(x); // rounds to the nearest integer
// x = Math.floor(x); // rounds down
// x = Math.ceil(x); // rounds up
// x = Math.pow(x, 2); // x squared
// x = Math.sqrt(x); // square root of x
// x = Math.abs(x); // absolute value of x (distance from 0)
// maximum = Math.max(x, y, z); // maximum value
// minimum = Math.min(x, y, z); // minimum value
x = Math.PI; // 3.14159...

console.log(x);
```
---

# 8. [HYPOTENUSE CALC PROGRAM] 📐

This program calculates the length of the hypotenuse of a right triangle using the Pythagorean theorem.

```js
let a;
let b;
let c;

/* 
a = window.prompt('Enter the length of side a: ');
a = Number(a);

b = window.prompt('Enter the length of side b: ');
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log('The length of side c is', c);
*/

document.getElementById('submitButton').onclick = function () {
	// when the button is clicked...
	a = document.getElementById('aTextBox').value; // get the value of the textbox and store it in the variable a
	a = Number(a);
	b = document.getElementById('bTextBox').value; // get the value of the textbox and store it in the variable b
	b = Number(b);

	c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	document.getElementById('cTextBox').innerHTML = 'The length of side c is ' + c; // display the result
}
```
---

# 9. [COUNTER PROGRAM] #️⃣ 

This program implements a simple counter that can be increased, decreased, or reset to zero.

```js
let count = 0;

document.getElementById('decreaseBtn').onclick = function () {
	count -= 1; // Decrease count by 1
	document.getElementById('countLabel').innerHTML = count; // Update the displayed count
}

document.getElementById('resetBtn').onclick = function () {
	count = 0; // Reset count to 0
	document.getElementById('countLabel').innerHTML = count; // Update the displayed count
}

document.getElementById('increaseBtn').onclick = function () {
	count += 1; // Increase count by 1
	document.getElementById('countLabel').innerHTML = count; // Update the displayed count
}
```
---

# 10. [RANDOM NUMBER GENERATOR] 🎲

This program generates three random numbers between 1 and 6, simulating the roll of three dice.

```js
let x;
let y;
let z;

document.getElementById('rollButton').onclick = function () {
	x = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
	y = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
	z = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

	document.getElementById('xlabel').innerHTML = x; // Display the first random number
	document.getElementById('ylabel').innerHTML = y; // Display the second random number
	document.getElementById('zlabel').innerHTML = z; // Display the third random number
}
```

---

# 11. [USEFUL STRING METHODS] 🧵

This section demonstrates several useful string methods in JavaScript that help manipulate and analyze string data.

```js
let userName = 'John Doe   ';
let phoneNumber = '123-456-7890';

console.log(userName.length); // 9
console.log(userName.charAt(0)); // J
console.log(userName.indexOf('D')); // 5
console.log(userName.lastIndexOf('D')); // 5
userName = userName.trim(); // removes whitespace from both ends of a string
userName = userName.toLowerCase(); // converts a string to lowercase letters
userName = userName.toUpperCase(); // converts a string to uppercase letters
phoneNumber = phoneNumber.replaceAll('-', '/'); // replaces all occurrences of '-' with '/'

console.log(phoneNumber);
```

---

# 12. [STRING SLICING] ✂️ 

The `slice()` method extracts a section of a string and returns it as a new string without modifying the original string.

```js
let fullname = 'John Doe';
let firstName;
let lastName;

// firstName = fullname.slice(0, 4); // John
// lastName = fullname.slice(5); // Doe

firstName = fullname.slice(0, fullname.indexOf(' ')); // John
lastName = fullname.slice(fullname.indexOf(' ') + 1); // Doe

console.log(lastName); // Doe
console.log(firstName); // John
```
---

# 13. [METHOD CHAINING] ⛓️ 

Method chaining allows you to call multiple methods on an object in a single line of code.

```js
// method chaining = calling one method after another
// in one continuous line of code

let userName = 'bro';

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter); // B
```

---

# 14. [IF STATEMENTS] ❔ 

The `if` statement is a basic form of decision making in JavaScript. If a condition is true, the corresponding block of code executes; if not, it doesn’t.

```js
// if statement = a basic form of decision making
//                if a condition is true, then do something
//                if not, then don't do it!

/* 

let age = 21;

if (age >= 18) {
	console.log('You are an adult');
} else if (age < 0) {
	console.log('You are not born yet');
} else if (age >= 65) {
	console.log('You are a senior');
} else {
	console.log('You are a child');
} 

*/

let online = true;

if (online) {
	console.log('User is online');
} else {
	console.log('User is offline');
}
```

---

# 15. [CHECKED PROPERTY] ✔️ 

This example demonstrates how to check if a checkbox is selected and to determine the selected payment method.

```js
document.getElementById('myButton').onclick = function () {
	const myCheckBox = document.getElementById('myCheckBox');
	const visaBtn = document.getElementById('visaBtn');
	const mastercardBtn = document.getElementById('mastercardBtn');
	const paypalBtn = document.getElementById('paypalBtn');

	if (myCheckBox.checked) {
		console.log('You are subscribed');
	} else {
		console.log('You are not subscribed');
		if (visaBtn.checked) {
			console.log('You are paying with Visa');
		} else if (mastercardBtn.checked) {
			console.log('You are paying with Mastercard');
		} else if (paypalBtn.checked) {
			console.log('You are paying with Paypal');
		} else {
			console.log('You are not paying with anything');
		}
	}
}
```

---

# 16. [SWITCHES] 🔀️ 

The `switch` statement examines a value for a match against case clauses, making it more efficient than using multiple "else if" statements.

```js
// switch = statement that examines a value
//          for a match against case clauses
//          More efficient than many "else if" statements

let grade = 'A';

switch (grade) {
	case 'A':
		console.log('You did great!');
		break;
	case 'B':
		console.log('You did good!');
		break;
	case 'C':
		console.log('You did okay!');
		break;
	case 'D':
		console.log('You did not do well!');
		break;
	case 'F':
		console.log('You failed!');
		break;
	default:
		console.log(grade, 'is not a valid grade');
}
```

---

# 17. [AND OR - LOGICAL OPERATORS] 

Logical operators allow you to check multiple conditions at once:
- `&&` (AND) = Both conditions must be true.
- `||` (OR) = At least one condition must be true.

```js
// Gives us the ability to check more than 1 condition concurrently

let temp = 15;
let sunny = true;

if (temp >= 0 && temp < 30 && sunny) {
	console.log('The weather is good!');
} else {
	console.log('The weather is bad!');
}
```
---

# 18. [NOT LOGICAL OPERATOR!] ❕ 

The `!` (NOT) logical operator is used to reverse a condition's boolean value:
- `true` becomes `false`
- `false` becomes `true`

```js
// ! NOT logical operator
// typically used to reverse a condition's boolean value

let temp = 15;
let sunny = false;

if (!(temp > 0)) {
	console.log('It’s cold outside!');
} else {
	console.log('It’s warm outside!');
}

if (!sunny) {
	console.log('It’s cloudy outside!');
} else {
	console.log('It’s sunny outside!');
}
```

---

# 19. [WHILE LOOPS] 🔁 

A `while` loop repeats code as long as a specified condition is true, and it can potentially lead to infinite loops if not handled properly.

```js
// while loop = repeat some code
//              while a condition is true
//              potentially infinite

let userName = '';

while (userName == '' || userName == null) {
	userName = prompt('Enter your name');
}

alert('Hello ' + userName);
```

---

# 20. [DO WHILE LOOPS] 🔂 

A `do while` loop executes a block of code once, and then checks a condition to determine if it should repeat. This guarantees that the code runs at least once.

```js
// do while loop = do some code,
//                 then check a condition
//                 repeat until the condition is true

let userName = '';

do {
	userName = prompt('Enter your name');
} while (userName == '' || userName == null);

console.log('Hello ' + userName);
```

---

# 21. [FOR LOOPS] 🔃 

A `for` loop is used to repeat a block of code a specific number of times, making it useful for iterating over a range.

```js
// for = repeat some code a
//       specific number of times

for (let i = 1; i <= 10; i += 1) {
	console.log(i);
}
```

---

# 22. [BREAK AND CONTINUE STATEMENTS] 💔 

- `break` is used to exit a loop.
- `continue` is used to skip the current iteration of a loop.

```js
// break = used to exit a loop

/* 
for (let i = 1; i <= 10; i += 1) {
	if (i == 5) {
		break; // exits the loop
	}
	console.log(i);
} 
*/

// continue = used to skip the current iteration

/* 
for (let i = 1; i <= 10; i += 1) {
	if (i == 5) {
		continue; // skips the current iteration
	}
	console.log(i);
}
*/
```

---

# 23. [NESTED LOOPS] ➿ 

A nested loop is a loop inside another loop, allowing for more complex iterations and operations.

```js
// nested loop = loop inside of another loop

let symbol = window.prompt('Enter a symbol');
let rows = window.prompt('Enter number of rows');
let columns = window.prompt('Enter number of columns');

for (let i = 1; i <= rows; i += 1) {
	for (let j = 1; j <= columns; j += 1) {
		document.getElementById('myRectangle').innerHTML += symbol;
	}
	document.getElementById('myRectangle').innerHTML += '<br>';
}
```

---

# 24. [FUNCTIONS] ☎️ 

A function allows you to define code once and use it multiple times by calling its name.

```js
// function = Define code once, and use it many times.
//           To perform some code, call the function name.

startProgram(); // call the function

function startProgram() {
	// define the function
	let userName = 'Bro';
	let age = 21;

	happyBirthday(userName, age); // call the function
}

function happyBirthday(userName, age) {
	console.log('Happy birthday to you!');
	console.log('Happy birthday to you!');
	console.log('Happy birthday dear', userName);
	console.log('Happy birthday to you!');
	console.log('Happy Birthday', userName, 'you are', age, 'years old!');
}
```

---

# 25. [RETURN STATEMENT] 🔙 

The `return` statement sends a value back to the location where the function was invoked.

```js
// return = returns a value back to the place
//          where you invoked a function

let area;
let width;
let height;

width = window.prompt('Enter width');
height = window.prompt('Enter height');

area = getArea(width, height);

console.log('The area is: ', area);

function getArea(width, height) {
	return width * height;
}
```

---

# 26. [TERNARY OPERATOR] ❔ 

The ternary operator is a shortcut for an `if/else` statement that takes three operands: a condition, an expression if true, and an expression if false.

```js
// ternary operator = Shortcut for an 'if/else' statement
//                    Takes 3 operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False

// condition ? expression if True : expression if False

checkWinner(false);

function checkWinner(win) {
	win ? console.log('You win!') : console.log('You lose!');
}
```

---

# 27. [VAR VS LET] 🥊 

Variable scope refers to where a variable is accessible. 

- **`let`**: Variables are limited to block scope `{}`.
- **`var`**: Variables are limited to function scope `(){}`.

Always use `let` instead of `var`.

```js
for (let i = 1; i <= 3; i += 1) {
	console.log(i); // inside of the for loop, let is accessible
}

// console.log(i); // outside of the for loop, let is not accessible

for (var j = 1; j <= 3; j += 1) {
	console.log(j); // inside of the for loop, var is accessible
}

console.log(j); // outside of the for loop, var is accessible
```

---

# 28. [TEMPLATE LITERALS] 💬  

Template literals are delimited with (``) instead of ('') or (""). They allow embedded variables and expressions.

```js
let userName = 'Bro'
let items = 3
let total = 75

// [Concatenation]
// console.log('Hello', userName)
// console.log('You have', items, 'items in your cart')
// console.log('Your total is $', total)

// [Template literals]
console.log(`Hello ${userName}`)
console.log(`You have ${items} items in your cart`)
console.log(`Your total is $${total}`)

let text = `Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`

// console.log(text)
document.getElementById('myLabel').innerHTML = text
```

---

# 29. [FORMAT CURRENCY] 💲  

The `toLocaleString()` method returns a string with a language-sensitive representation of this number.

```js
// number.toLocaleString(locale, {options});

// 'locale' = specify the language (undefined = default)
// 'options' = object with formatting options

let myNum = 1500.45

// myNum = myNum.toLocaleString('en-US') // US English
// myNum = myNum.toLocaleString('de-DE') // German
// myNum = myNum.toLocaleString('hi-IN') // Hindi (India)

// myNum = myNum.toLocaleString('lt-LT', { style: 'currency', currency: 'EUR' }) // Lithuanian (Lithuania)

// myNum = myNum.toLocaleString(undefined, { style: 'percent' }) // 150,045%

myNum = myNum.toLocaleString(undefined, { style: 'unit', unit: 'celsius' })

console.log(myNum)
```

---
# 30. [NUMBER GUESSING GAME] 🔢

```js
const answer = Math.floor(Math.random() * 10 + 1)
let guesses = 0

document.getElementById('submitButton').onclick = function () {
	let guess = document.getElementById('guessField').value
	guesses += 1

	if (guess == answer) {
		alert(`${guess} is correct! You guessed ${guesses} times.`)
	} else if (guess > answer) {
		alert(`${guess} is too high!`)
	} else {
		alert(`${guess} is too low!`)
	}
}
```
---

# 31.[TEMP CONVERT PROGRAM]🌡️

```js
document.getElementById('submitButton').onclick = function () {
    let temp = parseFloat(document.getElementById('tempField').value);
    let convertedTemp;

    if (document.getElementById('toCelsius').checked) {
        convertedTemp = toCelsius(temp);
        alert(`${temp} °F is ${convertedTemp.toFixed(2)} °C`);
    } else if (document.getElementById('toFahrenheit').checked) {
        convertedTemp = toFahrenheit(temp);
        alert(`${temp} °C is ${convertedTemp.toFixed(2)} °F`);
    }
}

function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
    return temp * (9 / 5) + 32;
}
```

# 32.[ARRAYS]🍎
`Array` = think of it as a variable that can store multiple values
```js
let fruits = ['apple', 'banana', 'kiwi']

fruits.push('orange') // add to the end
fruits.unshift('strawberry') // add to the beginning
fruits.pop() // remove the last item
fruits.shift() // remove the first item

let length = fruits.length // get the length of the array
let index = fruits.indexOf('banana') // get the index of an item

console.log(index)
```
---

# 33.[LOOP THROUGH AN ARRAY]➰
`Looping through an array` allows you to access each element and perform operations on them.

```js
let prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (let i = 0; i < prices.length; i++) {
	console.log(prices[i]) // Accessing each element by index
}

// Alternatively, you can use a for...of loop
// for (let price of prices) {
// 	console.log(price) // Accessing each element directly
// }
```

---
# 34.[SORT AN ARRAY OF STRINGS]🗃️
- `foreach` loop = a loop that eases traversal over an iterable data set.

This example demonstrates how to sort and reverse an array of strings.

```js
let fruits = ['apple', 'banana', 'kiwi', 'orange', 'strawberry']

// Sort the array
fruits = fruits.sort() // sort the array
// Sort and reverse the array
fruits = fruits.reverse() // reverse the sorted array

for (let fruit of fruits) {
	console.log(fruit) // Output each fruit in the sorted array
}
```

---
# 35.[2D ARRAYS]🛒

```js
let fruits = ['apple', 'banana', 'kiwi']
let vegetables = ['asparagus', 'broccoli', 'carrot']
let meats = ['bacon', 'steak', 'chicken']

let groceryList = [fruits, vegetables, meats]

console.log(groceryList[2][1]) // 'steak' (accessing 'steak' from the meats array)

for (let list of groceryList) {
	for (let food of list) {
		console.log(food) // Output each food item in the grocery list
	}
}
```

---
# 36.[SPREAD OPERATOR]🖐️

The **spread operator** (`...`) allows an iterable (like an array or string) to be expanded in places where multiple arguments are expected. This is useful for unpacking elements from an array.

```js
let numbers = [1, 2, 3, 4, 5]
let maximum = Math.max(...numbers) // Expands the array into individual arguments
console.log(maximum) // Outputs: 5
```

---
# 37.[REST PARAMETERS]💤

**Rest parameters** (`...`) allow a function to accept an indefinite number of arguments as an array. This is useful for packing multiple arguments into a single array parameter.

```js
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5

console.log(sum(a, b, c, d, e)) // Outputs: 15

function sum(...numbers) {
	let sum = 0
	for (let number of numbers) {
		sum += number // Accumulates the sum of all numbers
	}
	return sum
}
```

---
# 38.[CALLBACKS]🤙

**Callback**: A function passed as an argument to another function. Callbacks ensure that a function runs only after a task is completed, which is crucial for developing asynchronous JavaScript code. This pattern helps prevent errors by ensuring that operations depending on asynchronous tasks are executed only after those tasks finish.

```js
sum(2, 3, displayDOM)

function sum(a, b, myFunc) {
	let result = a + b
	return myFunc(result) // Calls the callback function with the result
}

function displayConsole(output) {
	console.log(output) // Logs the output to the console
}

function displayDOM(output) {
	document.getElementById('myLabel').innerHTML = output // Displays the output in the DOM
}
```

---
# 39.[ARRAY.FOREACH]🔚

**Array.forEach()**: This method executes a provided function once for each element in the array, allowing for easy iteration and manipulation of array items.

```js
let students = ['john', 'jane', 'bob', 'emily', 'jane']
students.forEach(capitalize) // Capitalizes each student's name
students.forEach(print) // Prints each student's name

function capitalize(element, index, array) {
	array[index] = element[0].toUpperCase() + element.substring(1) // Capitalizes the first letter
}

function print(element) {
	console.log(element) // Logs the element to the console
}
```

---
# 40.[ARRAY.MAP]⚙️

**Array.map()**: This method executes a provided callback function once for each element in the array and creates a new array containing the results.

```js
let numbers = [1, 2, 3, 4, 5]
let squares = numbers.map(square) // Creates an array of squared values
let cubes = numbers.map(cube) // Creates an array of cubed values

squares.forEach(print) // Prints the squared values
cubes.forEach(print) // Prints the cubed values

function square(element) {
	return Math.pow(element, 2) // Returns the square of the element
}

function cube(element) {
	return Math.pow(element, 3) // Returns the cube of the element
}

function print(element) {
	console.log(element) // Logs the element to the console
}
```

---
# 41.[ARRAY.FILTER]🗑

**Array.filter()**: This method creates a new array containing all elements that pass the test implemented by the provided function.

```js
let ages = [18, 17, 8, 21, 14, 90]
let adults = ages.filter(checkAge) // Filters the ages to include only adults

adults.forEach(print) // Prints the ages of adults

function checkAge(element) {
	return element >= 18 // Checks if the age is 18 or older
}

function print(element) {
	console.log(element) // Logs the element to the console
}
```

---
# 42.[ARRAY.REDUCE]🔁

**Array.reduce()**: This method reduces an array to a single value by executing a reducer function on each element.

```js
let prices = [5, 7.99, 9.99, 0.99, 21]
let total = prices.reduce(checkOut) // Reduces the prices array to a single total value

console.log(`total: ${total}`) // Prints the total price

function checkOut(total, element) {
	return total + element // Adds each element to the total
}
```

---
# 43.[SORT AN ARRAY OF NUMBERS]📋

**Array.sort()**: This method sorts the elements of an array in place and returns the sorted array. The sorting order can be specified using a comparison function.

```js
let grades = [100, 50, 90, 60, 80, 70]

grades.sort(ascendingSort) // Sorts the grades in ascending order

grades.forEach(print) // Prints each grade

function descendingSort(x, y) {
	return y - x // Comparison function for descending order
}

function ascendingSort(x, y) {
	return x - y // Comparison function for ascending order
}

function print(element) {
	console.log(element) // Prints the element
}
```

---
# 44.[FUNCTION EXPRESSIONS]🤫

**Function Expression**: A function that does not have a name (anonymous function). It helps avoid polluting the global scope and can be stored in a variable. 

```js
let count = 0 // Initialize a counter

document.getElementById('increaseButton').onclick = function () {
	count += 1 // Increase the count
	document.getElementById('myLabel').innerHTML = count // Update the label
}

document.getElementById('decreaseButton').onclick = function () {
	count -= 1 // Decrease the count
	document.getElementById('myLabel').innerHTML = count // Update the label
}
```

---
# 45.[ARROW FUNCTION EXPRESSIONS]🏹

**Arrow Function**: A compact alternative to a traditional function expression. It's limited in some contexts but offers a shorter syntax. 

```js
// Traditional function expression
const percent1 = function (x, y) {
	return (x / y) * 100
}

// Arrow function expression
const percent2 = (x, y) => (x / y) * 100 // No curly braces and no need for the return keyword

console.log(percent2(2, 5)) // 40
```

---

# 46.[SHUFFLE AN ARRAY]🃏

**Shuffling an Array**: This function randomly rearranges the elements of an array, which can be useful in games or any scenario where you need random order.

```js
let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

shuffle(cards)
console.log(cards)

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * i)
		let temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}
```

---
# 47.[NESTED FUNCTIONS]🐣

**Nested Functions**: Functions defined inside other functions. The outer function has access to the inner functions, while the inner functions are hidden from the outside world. This structure is often used in closures.

```js
let userName = 'John'
let userInbox = 0

login()

function login() {
	displayUserName()
	displayUserInbox()

	function displayUserName() {
		console.log(`Hello, ${userName}`)
	}

	function displayUserInbox() {
		console.log(`You have ${userInbox} messages`)
	}
}
```

---
# 48.[MAPS]🗺️

**Map**: An object that holds key-value pairs of any data type. Maps are useful for storing and manipulating collections of related data.

```js
// Creating a Map with initial key-value pairs
const store = new Map([
	['t-shirt', 9.99],
	['sweater', 19.99],
	['jeans', 29.99],
	['jacket', 49.99],
])

// Adding a new item to the store
store.set('shoes', 39.99) // SET METHOD

// Removing an item from the store
store.delete('jacket') // DELETE METHOD

// Checking if an item exists in the store
console.log(`Does the store have a jacket? ${store.has('jacket')}`) // HAS METHOD

// Getting the size (number of items) in the store
console.log(`Number of items in the store: ${store.size}`) // SIZE PROPERTY

// Iterating over the items in the store
console.log('Items in the store:')
store.forEach((value, key) => console.log(`${key}: $${value.toFixed(2)}`))
```

---
# 49.[OBJECTS]🚗

**Object**: A group of properties and methods. Objects allow you to encapsulate related data and functionality.

- **Properties**: What an object has (e.g., attributes like `model`, `color`, `year`).
- **Methods**: What an object can do (e.g., functions like `drive`, `brake`).

Use the dot (`.`) notation to access properties and methods.

```js
const car1 = {
	model: 'Mustang',
	color: 'red',
	year: 1969,

	drive: function () {
		console.log('You drive the car')
	},
	brake: function () {
		console.log('You step on the brake')
	},
}

const car2 = {
	model: 'Camaro',
	color: 'blue',
	year: 1922,

	drive: function () {
		console.log('You drive the car')
	},
	brake: function () {
		console.log('You step on the brake')
	},
}

console.log(car1.model)
console.log(car1.color)
console.log(car1.year)

console.log(car2.model)
console.log(car2.color)
console.log(car2.year)

car1.drive() // Use car1 to call methods
car1.brake() // Use car1 to call methods
```

---
# 50.[THIS KEYWORD]🔝

**`this` Keyword**: Refers to a particular object and its context. The object that `this` points to depends on where it is used.

```js
const car1 = {
	model: 'Mustang',
	color: 'red',
	year: 1969,

	drive: function () {
		console.log(`You drive the ${this.model}`)
	},
}

const car2 = {
	model: 'Camaro',
	color: 'blue',
	year: 1922,

	drive: function () {
		console.log(`You drive the ${this.model}`)
	},
}

car1.drive() // Output: You drive the Mustang
car2.drive() // Output: You drive the Camaro
```

---
# 51.[CLASSES]👨‍🏫

**Classes**: A blueprint for creating objects, defining their properties and methods. A constructor is used to initialize unique properties.

```js
class Player {
	score = 0

	pause() {
		console.log('Paused')
	}

	exit() {
		console.log('Exited')
	}
}

const player1 = new Player()

player1.score += 1

console.log(player1.score) // Output: 1

player1.pause() // Output: Paused
player1.exit() // Output: Exited
```

---
# 52.[CONSTRUCTORS]👷

**Constructor**: A special method in a class that allows for object creation with specific property values. It accepts arguments and assigns them to the object's properties.

```js
class Student {
	constructor(name, age, gpa) {
		this.name = name
		this.age = age
		this.gpa = gpa
	}
	study() {
		console.log(`${this.name} is studying`)
	}
}

const student1 = new Student('John', 19, 3.8)
const student2 = new Student('Jane', 20, 3.9)
const student3 = new Student('Jack', 21, 3.7)

console.log(student1.name) // Output: John
console.log(student1.age)  // Output: 19
console.log(student1.gpa)  // Output: 3.8

student1.study() // Output: John is studying

console.log(student2.name) // Output: Jane
console.log(student2.age)  // Output: 20
console.log(student2.gpa)  // Output: 3.9

student2.study() // Output: Jane is studying

console.log(student3.name) // Output: Jack
console.log(student3.age)  // Output: 21
console.log(student3.gpa)  // Output: 3.7

student3.study() // Output: Jack is studying
```

---
# 53.[STATIC KEYWORD]⚡

- **Static Properties**: Belongs to the class, not the objects. Useful for values shared across all instances, such as counting the number of instances.
- **Static Methods**: Called on the class itself rather than on instances. Useful for utility functions or configuration-related actions.

```js
// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configurations, etc.
//          methods: useful for utility functions

class Car {
  static numberOfCars = 0; // shared by all instances of Car

  constructor(model) {
    this.model = model;   // individual property
    Car.numberOfCars += 1;  // modify static property
  }

  startRace() {
    console.log(`Ready, set, go!`);
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Camaro");
const car3 = new Car("Corvette");
const car4 = new Car("Challenger");

console.log(Car.numberOfCars); // Accessing static property
car1.startRace();  // Start the race for car1
```

---
# 54.[INHERITANCE]👪
- **Inheritance**: A mechanism where a child class inherits properties and methods from a parent class, allowing for code reuse and a hierarchical structure.

```js
// inheritance = a child class can inherit all the methods and properties from another class

class Animal {
  alive = true;

  eat() {
    console.log("This animal is eating...");
  }

  sleep() {
    console.log("This animal is sleeping...");
  }
}

class Rabbit extends Animal {
  name = "Rabbit";

  run() {
    console.log(`${this.name} is running...`);
  }
}

class Fish extends Animal {
  name = "Fish";

  swim() {
    console.log(`${this.name} is swimming...`);
  }
}

class Hawk extends Animal {
  name = "Hawk";

  fly() {
    console.log(`${this.name} is flying...`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);  // Accessing inherited property
rabbit.eat();               // Inherited method from Animal class
rabbit.sleep();
rabbit.run();               // Unique method of Rabbit class
```

---
# 55.[SUPER KEYWORD]🦸‍♂
- **Super Keyword**: Refers to the parent class and is commonly used to call the parent class's constructor when extending a class.

```js
// super = Refers to the parent class.
//         Commonly used to invoke constructor of a parent class

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age); // Calls the constructor of the Animal class
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age); // Calls the constructor of the Animal class
    this.swimSpeed = swimSpeed;
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age); // Calls the constructor of the Animal class
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("Rabbit", 3, 20);
const fish = new Fish("Fish", 1, 10);
const hawk = new Hawk("Hawk", 5, 30);

console.log(rabbit.name);     // Rabbit
console.log(rabbit.age);      // 3
console.log(rabbit.runSpeed); // 20
```

---
# 56.[GETTERS & SETTERS]🏎
- **Getters**: Bind a property to a function when the property is accessed.  
- **Setters**: Bind a property to a function that executes when the property is set or modified.

```js
// get = binds an object property to a function
//       when that property is accessed
// set = binds an object property to a function
//       to be executed when there is an attempt

class Car {
  constructor(power) {
    this._gas = 25;
    this._power = power;
  }
  
  get power() {
    return `${this._power}hp`; // Get the car's horsepower
  }
  
  get gas() {
    return `${this._gas}L (${(this._gas / 50) * 100}%)`; // Get the gas in liters and percentage
  }
  
  set gas(value) {
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(100);

car.gas = 50; // Set the gas to 50L

console.log(car.power); // Output: 100hp
console.log(car.gas);   // Output: 50L (100%)
```

---
# 57.[OBJECTS AS ARGUMENTS]📫
- **Objects as Arguments**: Objects can be passed to functions as arguments. This allows modifying the object’s properties directly.

```js
class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car1 = new Car('Mustang', 1969, 'red');
const car2 = new Car('Camaro', 1967, 'blue');
const car3 = new Car('Corvette', 1963, 'yellow');

changeColor(car1, 'black');
displayInfo(car1);

function displayInfo(car) {
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}

function changeColor(car, newColor) {
  car.color = newColor; // Change the color of the car
}
```

---
# 58.[ARRAY OF OBJECTS]📮
- **Array of Objects**: You can create arrays that contain objects. Each object in the array can be accessed and modified just like any array element.

```js
class Car {
	constructor(model, year, color) {
		this.model = model;
		this.year = year;
		this.color = color;
	}

	drive() {
		console.log(`The ${this.color} ${this.year} ${this.model} is driving.`);
	}
}

const car1 = new Car('Mustang', 1969, 'red');
const car2 = new Car('Camaro', 1967, 'blue');
const car3 = new Car('Corvette', 1963, 'yellow');
const car4 = new Car('Challenger', 1970, 'orange');

const cars = [car1, car2, car3, car4]; // Array of car objects

console.log(cars[0].model);
console.log(cars[0].year);
console.log(cars[0].color);

cars[0].drive(); // Drive method for first car
cars[1].drive(); // Drive method for second car
cars[2].drive(); // Drive method for third car

function startRace(cars) {
	for (const car of cars) {
		car.drive(); // Calls the drive method for all cars
	}
}

startRace(cars); // Start the race for all cars
```

---
# 59.[ANONYMOUS OBJECTS]🎭
- **Anonymous Objects**: Objects that do not have a name and are not directly referenced. They can simplify code by reducing syntax and eliminating the need for unique names.

```js
class Card {
	constructor(value, suit) {
		this.value = value;
		this.suit = suit;
	}
}

// Create a deck of cards
let cards = [
	new Card('A', 'Spades'),
	new Card('K', 'Diamonds'),
	new Card('Q', 'Clubs'),
	new Card('J', 'Hearts'),
	new Card('10', 'Spades'),
	new Card('9', 'Diamonds'),
	new Card('8', 'Clubs'),
	new Card('7', 'Hearts'),
	new Card('6', 'Spades'),
	new Card('5', 'Diamonds'),
	new Card('4', 'Clubs'),
	new Card('3', 'Hearts'),
	new Card('2', 'Spades'),
];

cards.forEach(card => console.log(card.value, card.suit));
```

---
# 60.[ERROR HANDLING]🏤
- **Exception Handling** = Mechanism to handle runtime errors and exceptions, preventing the program from crashing.
- Uses `try`, `catch`, and `throw` keywords.

```js
// error = object with a description of something that has gone wrong

// Can't open a file
// Lose connection
// User types incorrect input
// TypeError

try {
	let x = window.prompt('Enter a number')
	x = Number(x)

	if (isNaN(x)) {
		throw 'You did not enter a number'
	}
	if (x == '') {
		throw 'You did not enter anything'
	}

	console.log(`You entered ${x}`)
} catch (error) {
	console.log(error)
} finally {
	console.log('This code will always run')
}

```

---
# 61.[SET TIMEOUT]⏰
- **setTimeout()**: Invokes a function after a specified number of milliseconds. It's an asynchronous function, meaning it doesn't pause the execution of the code.

```js
let item = 'cryptocurrency';
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 5000);
let timer3 = setTimeout(thirdMessage, 7000);

function firstMessage(item, price) {
	alert(`Buy this ${item} course for $${price}!`);
}

function secondMessage() {
	alert(`This is not the scam!`);
}

function thirdMessage() {
	alert(`DO IT!`);
}

document.getElementById('myButton').onclick = function () {
	clearTimeout(timer1);
	clearTimeout(timer2);
	clearTimeout(timer3);
	alert(`Thanks for buying <3`);
};
```

---
# 62.[SET INTERVAL]⏲️
- **setInterval()**: Invokes a function repeatedly after a specified number of milliseconds. It's an asynchronous function, meaning it doesn't pause the execution of the code.

```js
let count = 0;

let max = window.prompt(`Count up to what number?`);
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
	count += 1;
	console.log(count);
	if (count >= max) {
		clearInterval(myTimer);
	}
}
```
   
---
# 63.[DATE OBJECTS]📅
- **Date Objects**: Used to handle dates and times in JavaScript. You can get the current date and time, update to a specific date, and format it for display.

```js
// Get current date & time
let currentDate = new Date();

// Update date to a specific date and time
currentDate.setFullYear(2024);
currentDate.setMonth(11); // December (months are 0-indexed)
currentDate.setDate(31);
currentDate.setHours(23);
currentDate.setMinutes(59);
currentDate.setSeconds(59);
currentDate.setMilliseconds(999);

// Display date and time
document.getElementById('dateTime').innerHTML = currentDate.toLocaleString();

// Function to format date
function formatDate(date) {
	let year = date.getFullYear();
	let month = date.getMonth() + 1; // Month starts from 0, so add 1
	let day = date.getDate();

	return `${month}/${day}/${year}`;
}

// Function to format time
function formatTime(date) {
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let amOrPm = hour >= 12 ? 'PM' : 'AM';

	hour = hour % 12 || 12; // Convert to 12-hour format

	return `${hour}:${minute}:${second} ${amOrPm}`;
}

// Display formatted date
document.getElementById('formattedDate').innerHTML = formatDate(currentDate);

// Display formatted time
document.getElementById('formattedTime').innerHTML = formatTime(currentDate);
```

---
# 64.[CLOCK PROGRAM]🕧
- **Clock Program**: A simple JavaScript program that updates and displays the current time every second. It formats the time in a 12-hour format with leading zeroes.

```js
const myLabel = document.getElementById('myLabel');

update(); // Call the update function initially
setInterval(update, 1000); // Update the time every second

function update() {
	let date = new Date();
	myLabel.innerHTML = formatTime(date); // Pass the 'date' parameter to formatTime()

	function formatTime(date) {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let amOrPm = hours >= 12 ? 'PM' : 'AM';

		hours = hours % 12 || 12; // Convert to 12-hour format

		hours = formatZeroes(hours);
		minutes = formatZeroes(minutes);
		seconds = formatZeroes(seconds);

		return `${hours}:${minutes}:${seconds} ${amOrPm}`;
	}

	function formatZeroes(time) {
		time = time.toString();
		return time.length < 2 ? `0${time}` : time; // Add leading zero if needed
	}
}
```

---
# 65.[ASYNCHRONOUS]⏳
- **Synchronous vs Asynchronous Code**: Synchronous code runs in a sequential manner, completing one task before moving to the next. Asynchronous code allows certain tasks to run in the background, enabling other code to execute while waiting for long-running tasks to complete.

```js
// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence
//                     Ex. Access a database
//                     Fetch a file
//                     Tasks that take time
//                     (start now, finish sometime later)

// Synchronous example
console.log('Synchronous code starts...');
for (let i = 0; i < 5; i++) {
	console.log(`Synchronous iteration ${i}`);
}
console.log('Synchronous code ends!');

// Asynchronous example
console.log('Asynchronous code starts...');
setTimeout(() => {
	console.log('Asynchronous code: This will appear later!');
}, 3000); // This will execute after 3 seconds

console.log('Asynchronous code ends!');
```

---
# 66.[CONSOLE.TIME]⌚
- **Console Timer**: `console.time()` starts a timer that can be used to track the duration of operations. Each timer should have a unique name to differentiate between multiple timers.

```js
// console.time() = Start a timer you can use to
//                  track how long an operation takes
//                  Give each timer a unique name.

// start
console.time('Response Time');

alert('CLICK OK TO CONTINUE');
setTimeout(() => console.log('Hello World!'), 3000);

// end
console.timeEnd('Response Time');
```
---
# 67.[PROMISES]🤞
- **Promise**: An object that encapsulates the result of an asynchronous operation, allowing methods to return values like synchronous methods. It can be in one of three states: 
  1. **Pending**: Initial state, neither fulfilled nor rejected.
  2. **Fulfilled**: Operation completed successfully.
  3. **Rejected**: Operation failed.

- **Methods**:
  - `.then()`: Used to get the result of a successfully fulfilled promise.
  - `.catch()`: Used to get the result of a rejected promise.

```js
// Example 1: Promise resolving with a successful operation
const promiseLoaded = new Promise((resolve, reject) => {
	let fileLoaded = true; // Simulating a successful operation

	if (fileLoaded) {
		resolve('File loaded successfully');
	} else {
		reject('File not loaded');
	}
});

promiseLoaded
	.then(successMessage => {
		console.log('Sėkmingai gautas rezultatas:', successMessage); // Logging the success message when promise is resolved
	})
	.catch(errorMessage => {
		console.error('Klaida:', errorMessage); // Logging the error message when promise is rejected
	});

// Example 2: Promise resolving after a delay of 5 seconds
const delayPromise = new Promise(resolve => {
	setTimeout(() => {
		resolve('5 seconds delay is over!');
	}, 5000); // Resolving the promise after 5 seconds
});

delayPromise.then(message => {
	console.log(message, 'Visogero'); // Logging the message after the delay
});
```
---
# 68.[ASYNC]📥
- **async**: A keyword that makes a function return a Promise. It allows for cleaner asynchronous code, as it can use `await` to pause execution until the promise is resolved.

```js
async function loadFile() {
	let fileLoaded = true;

	if (fileLoaded) {
		return 'File loaded successfully';
	} else {
		throw 'File not loaded';
	}
}

loadFile()
	.then(value => console.log(value))
	.catch(error => console.log(error));
```
---
# 69.[AWAIT]✋
- **await**: A keyword that makes an async function wait for a Promise to resolve. It allows for cleaner syntax by avoiding the need to use `.then()` and `.catch()`.

```js
async function loadFile() {
	let fileLoaded = true;

	if (fileLoaded) {
		return 'File loaded successfully';
	} else {
		throw 'File not loaded';
	}
}

async function startProcess() {
	try {
		let message = await loadFile();
		console.log(message);
	} catch (error) {
		console.log(error);
	}
}

startProcess();
```
---
# 70.[ES6 MODULES]🚢
- **ES6 Modules**: A way to organize and reuse code by exporting and importing functionalities from different files. Modules help improve the maintainability and reusability of your code, similar to chapters in a book.

```js
// The idea behind a module is that it's a file of reusable code
// We can import sections of pre-written code to use whenever we want
// Great for any general utility values and functions
// Help to make your code more reusable and maintanable
// Think of modules as seperate chapters of a book

import { PI, getArea, getCircumference } from './math_util.js'

console.log(PI)

let Circumference = getCircumference(10)
console.log(Circumference)

let Area = getArea(10)
console.log(Area)
```

```js 
export const PI = 3.14159265359

export function getCircumference(radius) {
	return 2 * PI * radius
}

export function getArea(radius) {
	return PI * radius * radius
}
```
---
# 71.[DOM INTRO]✨
- **DOM (Document Object Model)**: An interface that allows programs to manipulate the content, structure, and style of a document. It represents the document as a tree of objects.

```js
// Accessing the document object
// console.dir(document); // shows the document object
// console.log(document.title); // shows the title of the document
// console.log(document.URL); // shows the URL of the document

// Modifying the document properties
// document.title = 'New Title'; // changes the title of the document
// document.location = 'https://www.google.com'; // changes the URL of the document

// Changing styles and content
document.body.style.backgroundColor = 'red'; // changes the background color of the body
document.getElementById('myDiv').innerHTML = 'Hello World'; // changes the content of the div with id="myDiv"
```
---
# 72.[ELEMENT SELECTORS]👇
- **Element Selectors**: Methods to select and manipulate HTML elements using JavaScript. They provide ways to access elements by ID, name, tag, class, or using CSS selectors.

```js
// Select an element by ID
let element = document.getElementById('myTitle');
element.style.backgroundColor = 'tomato'; // Change background color

// Select elements by name
let fruits = document.getElementsByName('fruits');
for (let i = 0; i < fruits.length; i++) {
	if (fruits[i].checked) {
		console.log(fruits[i].value); // Log checked fruit value
	}
}

// Select elements by tag name
let vegetables = document.getElementsByTagName('li');
if (vegetables.length >= 2) {
	vegetables[1].style.backgroundColor = 'tomato'; // Change color of the second vegetable
}

// Select elements by class name
let desserts = document.getElementsByClassName('desserts');
if (desserts.length >= 2) {
	desserts[1].style.backgroundColor = 'tomato'; // Change color of the second dessert
}

// Select an element using querySelector
let queryElement = document.querySelector('#myTitle');
queryElement.style.backgroundColor = 'tomato'; // Change background color again

// Select all elements using querySelectorAll
let elements = document.querySelectorAll('.fruits');
elements.forEach(element => {
	element.style.backgroundColor = 'tomato'; // Change color of all fruit elements
});
```
---
# 73.[DOM TRAVERSAL]🌳
- **DOM Traversal**: The process of navigating the Document Object Model (DOM) to access and manipulate elements. This includes accessing parent, child, and sibling elements.

```js
// Get the body element
let element = document.body;

// Access the first child element of the body
let child = element.firstElementChild;

// Check if the first child exists before modifying its style
if (child) {
	// Change the background color of the first child of the body
	child.style.backgroundColor = 'tomato';
}

// Accessing elements by their IDs
let fruitList = document.getElementById('fruit');
let vegetableList = document.getElementById('vegetables');
let dessertList = document.getElementById('dessert');

// Change background colors of specific list items
if (fruitList && vegetableList && dessertList) {
	// Change the background color of the first list item in the fruit list
	fruitList.firstElementChild.style.backgroundColor = 'lightgreen';

	// Change the background color of the last list item in the vegetable list
	vegetableList.lastElementChild.style.backgroundColor = 'lightblue';

	// Change the background color of the second list item in the dessert list
	dessertList.children[1].style.backgroundColor = 'lightcoral';

	// Convert the dessert list items to an array and log their text content
	let dessertItems = Array.from(dessertList.children);
	dessertItems.forEach(item => {
		console.log(item.textContent);
	});
}
```
---
# 74.[ADD-CHANGE HTML ELEMENTS]🌎
- **Adding/Changing HTML Elements**: Techniques to dynamically manipulate the DOM by adding or changing elements. Using `.innerHTML` can expose your application to XSS attacks, while `.textContent` is a safer alternative.

```js
// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement('h1')
// nameTag.textContent = window.prompt('What is your name?')
// document.body.appendChild(nameTag)

const myList = document.querySelector('#fruit');
const listItem = document.createElement('li');
listItem.textContent = 'Pears';
// myList.append(listItem) // append adds to the end of the list
// myList.prepend(listItem) // prepend adds to the beginning of the list
myList.insertBefore(listItem, myList.getElementsByTagName('li')[1]); // insertBefore adds before the second child of the list
```
---
# 75.[ADD-CHANGE CSS PROPERTIES]🎨
- **Changing CSS Properties**: Dynamically modify the styles of HTML elements using JavaScript to enhance their appearance and layout.

```js
const title = document.getElementById('myTitle');

title.style.backgroundColor = 'red';
title.style.color = 'rgb(23, 100, 230)';
title.style.fontFamily = 'consolas';
title.style.textAlign = 'center';
title.style.fontSize = '2rem';
title.style.padding = '1rem';
title.style.border = '2px solid black';
title.style.borderRadius = '5px';
title.style.boxShadow = '0 0 10px black';
title.style.margin = '1rem';
title.style.display = 'block';
```
---
# 76.[EVENTS]🎟️
- **Event Handling**: JavaScript allows you to respond to user interactions with HTML elements through events. You can define actions that occur when users interact with elements like buttons, text fields, or the mouse.

```js
// const element = document.getElementById('myButton')
// const element = document.body
// const element = document.getElementById('myText')
const element = document.getElementById('myDiv');

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething() {
	// alert('Something Happened!');
	element.style.backgroundColor = 'red';
}

function doSomethingElse() {
	// alert('Something Else Happened!');
	element.style.backgroundColor = 'lightgreen';
}
```
---
# 77.[ADD-EVENT-LISTENER]👂
- **Event Listeners**: Use `addEventListener` to register an event handler for a specific event on an element. This method provides more flexibility than assigning events directly to properties and supports event capturing and bubbling.

```js
const innerDiv = document.getElementById('innerDiv');
const outerDiv = document.getElementById('outerDiv');

innerDiv.addEventListener('click', changeBlue);
outerDiv.addEventListener('click', changeBlue, true); // true means the event will be captured by the outerDiv first

function changeBlue(event) {
	const clickedElement = event.currentTarget;
	alert(`You selected ${clickedElement.id}`);
	clickedElement.style.backgroundColor = 'blue';
}
```
---
# 78.[SHOW-HIDE HTML ELEMENTS]💡
- **Show/Hide Elements**: Use JavaScript to toggle the visibility of HTML elements by changing their `display` property. This allows for dynamic interactions on a webpage.

```js
const myButton = document.querySelector('#myButton');
const myImg = document.querySelector('#myImg');

myButton.addEventListener('click', () => {
	if (myImg.style.display === 'none') {
		myImg.style.display = 'block';
	} else {
		myImg.style.display = 'none';
	}
});
```
---
# 79.[DETECT KEY PRESSES]🛎️
- **Detecting Key Presses**: Use the `keydown` event to move an element based on arrow key inputs. This allows for interactive movements on a webpage.

```js
const myDiv = document.getElementById('myDiv');
window.addEventListener('keydown', move);
let x = 0;
let y = 0;

function move(event) {
	switch (event.key) {
		case 'ArrowDown':
			y += 5;
			myDiv.style.top = `${y}px`;
			break;
		case 'ArrowUp':
			y -= 5;
			myDiv.style.top = `${y}px`;
			break;
		case 'ArrowLeft':
			x -= 5;
			myDiv.style.left = `${x}px`;
			break;
		case 'ArrowRight':
			x += 5;
			myDiv.style.left = `${x}px`;
			break;
		default:
			break;
	}
}
```
---
# 80.[ANIMATIONS]🎞️
- **Animations**: Functions to create various animations on an HTML element using `setInterval`. These animations include moving, scaling, rotating, and reversing an element.

```js
function moveRight() {
	const myDiv = document.getElementById('myDiv');
	let currentX = 0;
	const animationId = setInterval(frame, 5);

	function frame() {
		if (currentX >= 200) {
			clearInterval(animationId);
		} else {
			currentX++;
			myDiv.style.transform = `translateX(${currentX}px)`;
		}
	}
}

function moveLeft() {
	const myDiv = document.getElementById('myDiv');
	let currentX = 0;
	const animationId = setInterval(frame, 5);

	function frame() {
		if (currentX <= -200) {
			clearInterval(animationId);
		} else {
			currentX--;
			myDiv.style.transform = `translateX(${currentX}px)`;
		}
	}
}

function reverse() {
	const myDiv = document.getElementById('myDiv');
	let scaleX = 1;
	const animationId = setInterval(frame, 5);

	function frame() {
		if (scaleX <= -1) {
			clearInterval(animationId);
		} else {
			scaleX -= 0.02;
			myDiv.style.transform = `scaleX(${scaleX})`;
		}
	}
}

function rotate() {
	const myDiv = document.getElementById('myDiv');
	let degrees = 0;
	const animationId = setInterval(frame, 5);

	function frame() {
		if (degrees === 360) {
			clearInterval(animationId);
		} else {
			degrees++;
			myDiv.style.transform = `rotate(${degrees}deg)`;
		}
	}
}

function scale() {
	const myDiv = document.getElementById('myDiv');
	let scaleValue = 1;
	const animationId = setInterval(frame, 5);

	function frame() {
		if (scaleValue >= 1.5) {
			clearInterval(animationId);
		} else {
			scaleValue += 0.01;
			myDiv.style.transform = `scale(${scaleValue})`;
		}
	}
}
```
---
# 81.[CANVAS API]🖌️
- **Canvas API**: A means for drawing graphics, commonly used for animations, games, and data visualization.

```js
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

/*
// DRAW LINES
context.strokeStyle = 'purple';
context.lineWidth = 5;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/

/*
// DRAW TRIANGLE
context.strokeStyle = 'tomato';
context.fillStyle = 'purple';
context.lineWidth = 10;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/

/*
// DRAW RECTANGLES
context.fillStyle = 'tomato';
context.fillRect(0, 0, 250, 250);
context.strokeStyle = 'black';
context.strokeRect(0, 0, 250, 250);

context.fillStyle = 'gold';
context.fillRect(0, 250, 250, 250);
context.strokeStyle = 'black';
context.strokeRect(0, 250, 250, 250);

context.fillStyle = 'green';
context.fillRect(250, 250, 250, 250);
context.strokeStyle = 'black';
context.strokeRect(250, 250, 250, 250);

context.fillStyle = 'pink';
context.fillRect(250, 0, 250, 250);
context.strokeStyle = 'black';
context.strokeRect(250, 0, 250, 250);
*/

/*
// DRAW CIRCLE
// (x, y, r, startAngle, endAngle, counterclockwise)
context.fillStyle = 'tomato';
context.strokeStyle = 'black';
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, Math.PI * 2);
context.stroke();
context.fill();
*/

// DRAW TEXT
context.font = '50px MV Boli';
context.fillStyle = 'tomato';
context.textAlign = 'center';
context.fillText('YOU WIN!', canvas.width / 2, canvas.width / 2);
```
---
# 81.[STOPWATCH]⏱️

The code demonstrates how to use JavaScript Promises, which represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are particularly useful for managing asynchronous tasks, allowing you to handle results and errors in a structured way.

```js
// Promise = object that encapsulates the result of an asynchronous operation.
// Allows asynchronous methods to return values like synchronous methods.
// "I promise to return something in the future"

// Promise states: 
// 1. Pending: initial state, neither fulfilled nor rejected
// 2. Fulfilled: operation completed successfully
// 3. Rejected: operation failed

// Example 1: Promise resolving with a successful operation
const promiseLoaded = new Promise((resolve, reject) => {
	let fileLoaded = true; // Simulating a successful operation

	if (fileLoaded) {
		resolve('File loaded successfully');
	} else {
		reject('File not loaded');
	}
});

promiseLoaded
	.then(successMessage => {
		console.log('Sėkmingai gautas rezultatas:', successMessage); // Logging success message
	})
	.catch(errorMessage => {
		console.error('Klaida:', errorMessage); // Logging error message
	});

// Example 2: Promise resolving after a delay of 5 seconds
const delayPromise = new Promise(resolve => {
	setTimeout(() => {
		resolve('5 seconds delay is over!');
	}, 5000); // Resolving the promise after 5 seconds
});

delayPromise.then(message => {
	console.log(message, 'Visogero'); // Logging message after delay
});
```
---
# 82.[WINDOW]🗔
The `window` interface is used to interact with the web browser. It represents the browser window and is the global object for JavaScript in the browser. The DOM (Document Object Model) is a property of the window, allowing you to manipulate the content of the web page.

```js
// window = interface used to talk to the web browser
//          the DOM is a property of the window

const myButton = document.getElementById('myButton')

// Example usage of window properties
// console.dir(window); // Display the window object in the console
// console.log(window.innerHeight); // Height of the browser window (viewport)
// console.log(window.innerWidth); // Width of the browser window (viewport)
// console.log(window.outerHeight); // Height including the address bar and toolbars
// console.log(window.outerWidth); // Width including the address bar and toolbars
// console.log(window.scrollX); // Horizontal scroll position
// console.log(window.scrollY); // Vertical scroll position

// Working with the current URL
// console.log(window.location.href); // Current URL of the page
// window.location.href = 'https://www.google.com'; // Redirect to Google

// More about the current location
// console.log(window.location.hostname); // Hostname of the page
// console.log(window.location.pathname); // Pathname of the page

// Example event listeners for button actions
// myButton.addEventListener('click', () => {
//     window.open('https://www.google.com', '_blank'); // Open a new window/tab with Google
// });

// myButton.addEventListener('click', () => {
//     window.close(); // Close the current window
// });

// myButton.addEventListener('click', () => {
//     window.print(); // Print the current window
// });

// Alerts and prompts
// window.alert('Hello World'); // Open an alert dialog with a message
// window.confirm('Are you sure?'); // Open a confirm dialog with OK/Cancel options

// Prompting user input
// let age = window.prompt('How old are you?'); // Ask the user for their age
// if (age < 18) {
//     window.alert('You must be 18 or older to enter this site'); // Alert if under 18
//     window.close(); // Close the window if the condition is met
// }
```
---
# 83.[COOKIES]🍪

This code demonstrates how to create, read, and delete cookies in JavaScript. Cookies are small text files stored on the user's computer, typically used to remember user information across sessions.

```js
// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name = value pairs

// console.log(navigator.cookieEnabled) // check if cookies are enabled
// document.cookie = 'firstName=John; expires=Sun, 1 Jan 2030 12:00:00 UTC; path=/' // create a cookie
// document.cookie = 'lastName=Doe; expires=Sun, 1 Jan 2030 12:00:00 UTC; path=/'
// console.log(document.cookie) // read the cookie

document.addEventListener('DOMContentLoaded', function () {
	const firstText = document.querySelector('#firstText')
	const lastText = document.querySelector('#lastText')
	const submitBtn = document.querySelector('#submitBtn')
	const cookieBtn = document.querySelector('#cookieBtn')

	submitBtn.addEventListener('click', function () {
		setCookie('firstName', firstText.value, 1) // Set the first name cookie
		setCookie('lastName', lastText.value, 1) // Set the last name cookie
	})

	cookieBtn.addEventListener('click', function () {
		console.log(getCookie('firstName')) // Get and log the first name cookie
		console.log(getCookie('lastName')) // Get and log the last name cookie
	})

	// Function to set a cookie
	function setCookie(name, value, daysToLive) {
		const date = new Date()
		date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000) // Set expiration date
		const expires = 'expires=' + date.toUTCString()
		document.cookie = name + '=' + value + ';' + expires + ';path=/' // Create the cookie
	}

	// Function to delete a cookie
	function deleteCookie(name) {
		setCookie(name, '', -1) // Set the cookie's expiration date in the past
	}

	// Function to get a cookie value
	function getCookie(name) {
		const cDecoded = decodeURIComponent(document.cookie) // Decode the cookie
		const cArray = cDecoded.split(';') // Split the cookie into an array

		for (let i = 0; i < cArray.length; i++) {
			let cookie = cArray[i].trim()
			if (cookie.indexOf(name + '=') === 0) {
				return cookie.substring(name.length + 1, cookie.length) // Return the cookie value
			}
		}

		return null // Return null if cookie not found
	}
})
```
---
# 84.[STOPWATCH PROGRAM]⏱️

This code snippet illustrates basic DOM manipulation in JavaScript, which allows you to change the content and style of a web page.

```js
// DOM = Document Object Model (API)
//       An interface for changing the content of a page

// console.dir(document) // shows the document object
// console.log(document.title) // shows the title of the document
// console.log(document.URL) // shows the URL of the document

// document.title = 'New Title' // changes the title of the document
// document.location = 'https://www.google.com' // changes the URL of the document

// Change the background color of the body to red
document.body.style.backgroundColor = 'red' 

// Change the content of the div with id="myDiv" to 'Hello World'
document.getElementById('myDiv').innerHTML = 'Hello World' 
```
---
# 85.[ROCK PAPER SCISSORS GAME]✊

This code snippet sets up a simple Rock-Paper-Scissors game using JavaScript and DOM manipulation.

```js
// DOM = Document Object Model (API)
//       An interface for changing the content of a page

// Basic document interactions can be logged for debugging
// console.dir(document) // shows the document object
// console.log(document.title) // shows the title of the document
// console.log(document.URL) // shows the URL of the document

// document.title = 'New Title' // changes the title of the document
// document.location = 'https://www.google.com' // changes the URL of the document

// Change the background color of the body to red
document.body.style.backgroundColor = 'red'; 

// Change the content of the div with id="myDiv" to 'Hello World'
document.getElementById('myDiv').innerHTML = 'Hello World'; 
```
---
# 85.[TIC-TAC-TOE GAME]⭕
This code snippet sets up a basic structure for a Tic-Tac-Toe game using JavaScript and the DOM.
```js
// DOM = Document Object Model (API)
//       An interface for changing the content of a page

// console.dir(document) // shows the document object
// console.log(document.title) // shows the title of the document
// console.log(document.URL) // shows the URL of the document

// document.title = 'New Title' // changes the title of the document
// document.location = 'https://www.google.com' // changes the URL of the document

document.body.style.backgroundColor = 'red' // changes the background color of the body
document.getElementById('myDiv').innerHTML = 'Hello World' // changes the content of the div with id="MyDiv"
```
---
# 87.[SNAKE GAME]🐍
This code snippet provides a foundation for a Snake game using JavaScript and the DOM.
```js
// DOM = Document Object Model (API)
//       An interface for changing the content of a page

// console.dir(document) // shows the document object
// console.log(document.title) // shows the title of the document
// console.log(document.URL) // shows the URL of the document

// document.title = 'New Title' // changes the title of the document
// document.location = 'https://www.google.com' // changes the URL of the document

document.body.style.backgroundColor = 'red' // changes the background color of the body
document.getElementById('myDiv').innerHTML = 'Hello World' // changes the content of the div with id="MyDiv"
```
---
# 88.[PONG GAME]🏓
This code snippet provides a foundational structure for a Pong game using JavaScript and the DOM.
```js
// DOM = Document Object Model (API)
//       An interface for changing the content of a page

// console.dir(document) // shows the document object
// console.log(document.title) // shows the title of the document
// console.log(document.URL) // shows the URL of the document

// document.title = 'New Title' // changes the title of the document
// document.location = 'https://www.google.com' // changes the URL of the document

document.body.style.backgroundColor = 'red' // changes the background color of the body
document.getElementById('myDiv').innerHTML = 'Hello World' // changes the content of the div with id="MyDiv"
```
---
# 89.[IMAGE SLIDER]🖼️
This JavaScript code creates a simple image slider that automatically transitions between images every 5 seconds.
```js
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.remove('displaySlide'));
    slides[slideIndex].classList.add('displaySlide');
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

```
---
# 90.[NODELISTS]📃
This JavaScript code demonstrates how to dynamically manage buttons in a web page, including adding new buttons, changing their colors, and handling various events.
```js
// Function to remove a button
function removeButton(button) {
	button.remove();
}

// Function to add a new button
function addNewButton() {
	const container = document.getElementById('buttonContainer');
	const newButton = document.createElement('button');
	newButton.textContent = `Button ${container.children.length + 1}`;
	newButton.classList.add('myButtons');
	container.appendChild(newButton);
	newButton.addEventListener('click', () => {
			console.log(`Button ${Array.from(container.children).indexOf(newButton) + 1} clicked`);
	});
	handleHoverEffect(newButton);
	handleDoubleClick(newButton);
	handleLongPress(newButton);
}

// Function to change the color of buttons
function changeButtonColor() {
	const buttons = document.querySelectorAll('.myButtons');
	buttons.forEach(button => {
			const hue = Math.floor(Math.random() * 360); // Random hue value between 0 and 360
			button.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; // Set background color using HSL color format
	});
}

// Function to handle hover effect
function handleHoverEffect(button) {
	button.addEventListener('mouseenter', () => {
			button.style.backgroundColor = 'hsl(60, 100%, 50%)'; // Yellow color
	});

	button.addEventListener('mouseleave', () => {
			button.style.backgroundColor = 'hsl(240, 100%, 50%)'; // Blue color
	});
}

// Function to handle double click event
function handleDoubleClick(button) {
	button.addEventListener('dblclick', () => {
			button.textContent += ' - Double Clicked!';
	});
}

// Function to handle long press event
function handleLongPress(button) {
	let timeout;
	button.addEventListener('mousedown', () => {
			timeout = setTimeout(() => {
					button.textContent += ' - Long Pressed!';
			}, 1000); // 1 second for long press
	});

	button.addEventListener('mouseup', () => {
			clearTimeout(timeout);
	});
}

// Add event listeners for existing buttons
document.querySelectorAll('.myButtons').forEach(button => {
	handleHoverEffect(button);
	handleDoubleClick(button);
	handleLongPress(button);
});

// Add click event listener for "Add More" button
document.getElementById('addMoreButton').addEventListener('click', addNewButton);

// Add click event listener for "Change Color" button
document.getElementById('changeColorButton').addEventListener('click', changeButtonColor);
```
---
# 91. [CLASSLIST] 🧾

The `classList` property in JavaScript is used to interact with an element's list of classes. It allows for the creation of reusable classes across multiple elements on a website.

Methods:
- **add()**: Adds a class to an element.
- **remove()**: Removes a class from an element.
- **toggle()**: Toggles between adding and removing a class from an element.
- **contains()**: Checks if an element contains a specified class.
- **replace()**: Replaces one class with another class.

```js
const myButton = document.getElementById('myButton');
const myH1 = document.getElementById('myH1');

// Adding a class
myButton.classList.add('enabled');

// Adding hover effect using mouseover and mouseout events
myButton.addEventListener('mouseover', event => {
    event.target.classList.add('hover'); // Add 'hover' class on mouse over
});

myButton.addEventListener('mouseout', event => {
    event.target.classList.remove('hover'); // Remove 'hover' class on mouse out
});

// Click event to toggle class and add text content
myButton.addEventListener('click', event => {
    if (event.target.classList.contains('enabled')) {
        event.target.textContent += ' clicked'; // Append text if 'enabled' class is present
    } else {
        event.target.classList.replace('disabled', 'enabled'); // Replace 'disabled' with 'enabled'
        event.target.textContent = 'My button'; // Reset text
    }
});

// Removing a class after a delay
setTimeout(() => {
    myButton.classList.remove('enabled'); // Remove 'enabled' class after 3 seconds
}, 3000);

// Checking if an element contains a class
console.log("myButton contains 'enabled' class:", myButton.classList.contains('enabled'));

// Replacing a class
myH1.classList.replace('enabled', 'disabled'); // Replace 'enabled' with 'disabled'

// Toggling a class
document.getElementById('toggleButton').addEventListener('click', () => {
    myH1.classList.toggle('disabled'); // Toggle 'disabled' class on click
});
```
---
# 92. [CLOSURES] 🔒

A **closure** is a function defined inside another function. The inner function has access to the variables and scope of the outer function. Closures allow for private variables and state maintenance, and they are commonly used in JavaScript frameworks such as React, Vue, and Angular.

```js
function createGame() {
    let score = 0; // Private variable accessible only inside createGame

    // Function to increase the score
    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    // Function to decrease the score
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    // Function to get the current score
    function getScore() {
        return score;
    }

    // Returning the inner functions as an object
    // This object forms a closure, maintaining access to the 'score' variable
    return {
        increaseScore,
        decreaseScore,
        getScore
    };
}

const game = createGame();
game.increaseScore(5); // +5pts
game.decreaseScore(3); // -3pts
console.log(game.getScore()); // 2
```
---
# 93. [JSON FILES] 📄

**JSON** (JavaScript Object Notation) is a data-interchange format used for exchanging data between a server and a web application. JSON files can represent data in the following formats:

- **Object**: `{key: value}`
- **Array**: `[value1, value2, value3]`

Key Methods:

- `JSON.stringify()`: Converts a JavaScript object into a JSON string.
- `JSON.parse()`: Converts a JSON string into a JavaScript object.

```js
fetch("people.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
```
---
# 94.[FETCH DATA FROM AN API]↩️
**fetch** is a function used for making HTTP requests to fetch resources, such as JSON-style data, images, or files. It simplifies asynchronous data fetching in JavaScript and is commonly used for interacting with APIs to retrieve and send data asynchronously over the web.
```js
// fetch = Function used for making HTTP requests to fetch resourses.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send 
//         data asynchronously overt the web. 
//         fetch(url, {options})

async function fetchDate() {
    
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https:/pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch (error) {
        console.log("Error: ", error);
    }
}
```
---
# 95.[WEATHER APP PROJECT]☀️
This project demonstrates how to build a simple weather application using JavaScript and the OpenWeatherMap API. Users can input a city name to retrieve and display the current weather information, including temperature, humidity, and a weather description with an emoji representation.
```js
const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "23fc33c2ef4848eca47fad05be751e81";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            displayError(error);
        }
    } else {
        displayError("Please enter a city name");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
    
}

function displayWeatherInfo(data) {
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");


    cityDisplay.textContent = city;
    tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {

    switch(true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default: return "🤷‍♂️";

    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
```
---
