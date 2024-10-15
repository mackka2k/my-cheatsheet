
---[C++]---
---
# 1.[BASIC DATA TYPES]👨‍💻

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    // Integer (whole number)
    int age = 21;
    int year = 2023;
    int days = 7;

    // Double (number including decimal)
    double price = 10.99;
    double gpa = 2.5;
    double temperature = 36.6;

    // Char (single character)
    char grade = 'A';
    char initial = 'C';
    char currency = '$';

    // Boolean (true or false)
    bool student = false;
    bool power = true;
    bool forSale = true;

    // String (sequence of text)
    string name = "John";
    string day = "Monday";
    string food = "Pizza";
    string address = "123 Main Street";

    cout << "Hello " << name << '\n';
    cout << "You are " << age << " years old";

    return 0;
}

```

---

# 2.[CONST]🚫  
- The `const` keyword is used to make a variable constant, meaning it cannot be changed.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    // The const keyword is used to make a variable constant, meaning that it cannot be changed.
    
    const double PI = 3.14159;   // Constant value of PI
    double radius = 10;          // Radius of the circle
    double circumference = 2 * PI * radius;   // Formula for circumference
    
    cout << "Circumference: " << circumference << '\n';
}
```

---

# 3.[NAMESPACES]📛
- **Namespace** = Provides a scope to identifiers (variables, functions, classes, etc.) to avoid name conflicts.

```cpp
#include <iostream>
#include <iomanip>

/* using namespace std; */

int main() {
// Namespace = provides a scope to identifiers (variables, functions, classes, etc) to avoid name conflicts
std::string name = "John";
std::cout << "Hello " << name;


return 0;
}
```

---

# 4.[TYPEDEF+TYPE ALIASES]🙋‍♂️  
- **typedef** = Reserved keyword that creates an additional name (alias) for another data type.

```cpp
#include <iostream>
#include <iomanip>
#include <vector>
// typedef = reserved keyword that creates an additional name (alias) for an another data type.

// typedef std::vector<std::pair<std::string, int>> pairList_t; 
// typedef std::string text_t;
// typedef int number_t;
using text_t = std::string;
using number_t = int;
int main() {

text_t name = "John";
number_t age = 20;

std::cout << name << '\n';
std::cout << age << '\n';

return 0;
}
```

---

# 6.[ARITHMETIC OPERATORS]🧮  
**Arithmetic operators** are used to perform mathematical operations on variables and values.

```cpp
#include <iostream>
#include <iomanip>

int main() {
    int students = 20;

    // Increment and Decrement
    // students = students + 1;
    // students += 1;
    // students++;
    // ++students;
    // students--;
    // --students;

    // Addition and Subtraction
    // students = students - 1;
    // students -= 1;

    // Multiplication and Division
    // students = students * 2;
    // students *= 2;
    // students = students / 2;
    // students /= 2;

    // Modulus
    // students = students % 2;
    // students %= 2;

    int remainder = students % 2;
    std::cout << students;

    return 0;
}
```

---

# 7. [TYPE CONVERSION]✨

- **Type conversion** = Converting one data type to another.
- **Implicit** = Performed by the compiler automatically.
- **Explicit** = Performed by the programmer.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double x = (int) 3.14;  // Explicit type conversion (casting)
    cout << x << '\n';     // Output: 3.00

    return 0;
}
```
---

# 8.[USER INPUT]⌨️  
- **`cout`** << (insertion operator) = Used to output data to the console.
- **`cin`** >> (extraction operator) = Used to receive input from the user.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    string name;
    int age;

    cout << "Enter your name: ";
    cin >> name;    // Input name from the user
    cout << "Enter your age: ";
    cin >> age;     // Input age from the user
    cout << "Hello " << name << '\n';
    cout << "You are " << age << " years old\n";

    return 0;
}
```
---

# 9.[MATH FUNCTIONS]🔢  
- **Math functions** provide various mathematical operations and calculations.

```cpp
#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

int main() {
    double a = 3;
    double b = 4;
    double c;

    c = max(a, b);    // Maximum value
    cout << c << '\n';

    c = min(a, b);    // Minimum value
    cout << c << '\n';

    c = pow(2, 3);    // 2^3 (2 raised to the power of 3)
    cout << c << '\n';

    c = sqrt(144);    // Square root of 144
    cout << c << '\n';

    c = round(2.7);   // Rounding to the nearest integer
    cout << c << '\n';

    c = ceil(2.1);    // Rounding up to the nearest integer
    cout << c << '\n';

    c = floor(2.9);   // Rounding down to the nearest integer
    cout << c << '\n';

    c = abs(-10);     // Absolute value
    cout << c << '\n';

    c = cos(a);       // Cosine of a
    cout << c << '\n';

    c = sin(a);       // Sine of a
    cout << c << '\n';

    c = tan(a);       // Tangent of a
    cout << c << '\n';

    return 0;
}
```
---

# 10.[IF STATEMENTS]🤔  
- **If statements** = Execute a block of code if a condition is true.
- **Else statements** = Execute a different block of code if the condition is false.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int age;

    cout << "Enter your age: ";
    cin >> age;

    if (age >= 18) {
        cout << "You are an adult." << endl;
    } 
    else if (age >= 13) {
        cout << "You are a teenager." << endl;
    }
    else if (age >= 1) {
        cout << "You are a child." << endl;
    }
    else if (age == 0) {
        cout << "You are a baby." << endl;
    }
    else {
        cout << "You are not born yet." << endl;
    }

    return 0;
}
```

---

# 11.[SWITCHES]🔀 
- **Switch** = An alternative to using many "else if" statements.
- Compares one value against multiple cases and executes the corresponding block.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int month;

    cout << "Enter a month (1-12): ";
    cin >> month;

    switch(month) {
        case 1:
            cout << "January" << endl;
            break;
        case 2: 
            cout << "February" << endl;
            break;
        case 3: 
            cout << "March" << endl;
            break;
        case 4: 
            cout << "April" << endl;
            break;
        case 5:
            cout << "May" << endl;
            break;
        case 6:
            cout << "June" << endl;
            break;
        case 7:
            cout << "July" << endl;
            break;
        case 8:
            cout << "August" << endl;
            break;
        case 9:
            cout << "September" << endl;
            break;
        case 10:
            cout << "October" << endl;
            break;
        case 11:
            cout << "November" << endl;
            break;
        case 12: 
            cout << "December" << endl;
            break;
        default:  // default = else
            cout << "Not a valid month." << endl;
            break;
    }

    return 0;
}
```

---

# 12.[CONSOLE CALCULATOR]🖩  
```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    char op;
    double num1, num2, result;

    cout << "****************** CALCULATOR ******************\n";

    cout << "Enter either (+, -, *, /): ";
    cin >> op;

    cout << "Enter #1: ";
    cin >> num1;

    cout << "Enter #2: ";
    cin >> num2;

    switch(op) {
        case '+':
            result = num1 + num2;
            cout << "Result: " << result << endl;
            break;
        case '-':
            result = num1 - num2;
            cout << "Result: " << result << endl;
            break;
        case '*':
            result = num1 * num2;
            cout << "Result: " << result << endl;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
                cout << "Result: " << result << endl;
            } else {
                cout << "Error: Division by zero is not allowed." << endl;
            }
            break;
        default:
            cout << "Invalid operator." << endl;
            break;
    }

    cout << "************************************************\n";

    return 0;    
}
```
---

# 13.[TERNARY OPERATOR]❓  
- **Ternary operator** `?:` = A shorthand for an `if/else` statement.
- Syntax: `condition ? expression1 : expression2;`

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    // Example of ternary operator with a number
    // int number = 8;
    // number % 2 ? cout << "ODD" << endl : cout << "EVEN" << endl;

    bool hungry = true;

    // Using ternary operator to check hunger
    cout << (hungry ? "I'M HUNGRY" : "I'M FULL") << endl;

    // Equivalent if/else statement
    // if (hungry) {
    //     cout << "I'M HUNGRY" << endl;
    // } else {
    //     cout << "I'M FULL" << endl;
    // }

    return 0;
}
```

---

# 14.[LOGICAL OPERATORS]🔣  
- **`&&` (AND)** = Check if two conditions are true.
- **`||` (OR)** = Check if at least one of two conditions is true.
- **`!` (NOT)** = Reverse the result; true becomes false, and false becomes true.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int temp;
    bool sunny = false;

    cout << "Enter the temperature: ";
    cin >> temp;

    // Check temperature conditions using OR (||)
    if (temp <= 0 || temp >= 30) {
        cout << "The temperature is bad!\n";
    } else {
        cout << "The temperature is good!\n";
    }

    // Check if it is sunny using NOT (!)
    if (!sunny) {
        cout << "It is sunny outside.\n";
    } else {
        cout << "It is cloudy outside.\n";
    }

    return 0;
}
```

---

# 15.[TEMP CONVERSION]🌡️ 
```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double temp;
    char unit;

    cout << "******* TEMPERATURE CONVERSION PROGRAM *******\n";

    cout << "F = Fahrenheit\n";
    cout << "C = Celsius\n";
    cout << "What unit would you like to convert to? ";
    cin >> unit;

    if (unit == 'F' || unit == 'f') {
        cout << "Enter the temperature in Celsius: ";
        cin >> temp;

        temp = (1.8 * temp) + 32.0;  // Celsius to Fahrenheit
        cout << "The temperature in Fahrenheit is: " << temp << endl;
    } 
    else if (unit == 'C' || unit == 'c') {
        cout << "Enter the temperature in Fahrenheit: ";
        cin >> temp;

        temp = (temp - 32.0) / 1.8;  // Fahrenheit to Celsius
        cout << "The temperature in Celsius is: " << temp << endl;
    } 
    else {
        cout << "Invalid unit." << endl;
    }

    cout << "**********************************************\n";

    return 0;
}
```

---

# 16.[STRING METHODS]〰️  
** **

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string name;
    cout << "Enter your name: ";
    getline(cin, name);

    if (name.length() > 12) {
        cout << "Your name is long." << endl;
    } 
    else if (name.length() < 3) {
        cout << "Your name is short." << endl;
    } 
    else if (name.empty()) {
        cout << "You didn't enter a name." << endl;
    } 
    else {
        name.append("@gmail.com");  // Append a domain to the name
        cout << "Your username is now: " << name << "!" << endl;
    }

    return 0;
}

/* 
// [gets the first character of the string]
cout << "Enter your name: "; 
getline(cin, name);
cout << name.at(0) << endl; 

// [inserts a character at a specific index]
cout << "Enter your name: "; 
getline(cin, name);
cout << name.insert(0, "@") << endl; 

// [removes a character at a specific index]
cout << "Enter your name: ";
getline(cin, name);
cout << name.erase(0, 1) << endl;

// [replaces a character at a specific index]
cout << "Enter your name: ";
getline(cin, name);
cout << name.replace(0, 1, "@") << endl;

// [finds a character or substring]
cout << "Enter your name: ";
getline(cin, name);
cout << name.find("a") << endl;
*/
```

---

# 17.[WHILE LOOPS]♾️ 
- **While loop** = Repeats a block of code as long as the condition is true.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string name;

    // While loop to keep asking for input until a non-empty name is provided
    while (name.empty()) {
        cout << "Enter your name: ";
        getline(cin, name);
    }

    cout << "Hello " << name << '\n';

    return 0;
}
```
---

# 18.[DO WHILE LOOPS]🔃  
- **Do while loop** = Executes a block of code first, then repeats if the condition is true.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int number;

    // Do while loop: execute the block first, then repeat if the condition is true
    do {
        cout << "Enter a number between 1 and 10: ";
        cin >> number;
    } while (number < 1 || number > 10);  // Repeat as long as the condition is true

    cout << "You entered " << number << endl;  // Exit loop when condition is false

    return 0;
}
```

---

# 19.[FOR LOOPS]🔂  

- **For loop** = Used for iterating over a range or sequence with a known number of iterations.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    // For loop: iterate from 1 to 3
    for (int i = 1; i <= 3; i++) {
        cout << i << endl;
    }

    return 0;
}
```

---

# 20.[BREAK & CONTINUE]💔  
- **`break`** = Exits the loop immediately.
- **`continue`** = Skips the current iteration and continues with the next iteration of the loop.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    // For loop: prints numbers from 1 to 20, skipping the number 13
    for (int i = 1; i <= 20; i++) {
        if (i == 13) {
            continue;  // Skip the rest of the loop body for this iteration
        }
        cout << i << endl;
    }

    return 0;
}
```

---

# 21.[NESTED LOOPS]➿  
- **Nested Loops** = Loops inside other loops.
- Used for printing patterns, tables, or performing multi-dimensional operations.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int rows;
    int columns;
    char symbol;

    cout << "HOW MANY ROWS?: ";
    cin >> rows;

    cout << "HOW MANY COLUMNS?: ";
    cin >> columns;

    cout << "WHAT SYMBOL?: ";
    cin >> symbol;

    // Outer loop for rows
    for (int i = 1; i <= rows; i++) {
        // Inner loop for columns
        for (int j = 1; j <= columns; j++) {
            cout << symbol;  // Print the symbol
        }
        cout << endl;  // Move to the next line after printing all columns
    }

    return 0;
}
```

---

# 22.[RANDOM NUMBER GENERATOR]🎲  
- **Pseudo-Random** = Not truly random but close.
- Example: `int num1 = rand() % 6;` generates a random number between 0 and 5.

```cpp
#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

int main() {
    srand(time(NULL));  // Seeds the random number generator with the current time

    int num1 = (rand() % 6) + 1;  // Random number between 1 and 6
    int num2 = (rand() % 6) + 1;
    int num3 = (rand() % 6) + 1;

    cout << num1 << endl;
    cout << num2 << endl;
    cout << num3 << endl;

    return 0;
}
```

---

# 23.[RANDOM EVENT GENERATOR]🎁 

- Generates a random number to determine an event or prize.

```cpp
#include <iostream>
#include <iomanip>
#include <ctime>

using namespace std;

int main() {
    srand(time(0));  // Seeds the random number generator with the current time

    int randNum = rand() % 5 + 1;  // Random number between 1 and 5

    // Switch case to determine the event or prize based on the random number
    switch (randNum) {
        case 1:
            cout << "You win a bumper sticker!" << endl;
            break;

        case 2:
            cout << "You win a t-shirt!" << endl;
            break;

        case 3:
            cout << "You win a free lunch!" << endl;
            break;

        case 4:
            cout << "You win a gift card!" << endl;
            break;

        case 5:
            cout << "You win concert tickets!" << endl;
            break;

        default:
            cout << "Invalid random number." << endl;
            break;
    }

    return 0;
}
```

---

# 24.[NUMBER GUESSING GAME]↕️  

- A simple game where the user guesses a randomly generated number between 1 and 100.

```cpp
#include <iostream>
#include <iomanip>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    int num;       // The number to guess
    int guess;     // User's guess
    int tries = 0; // Number of attempts

    srand(time(NULL));  // Seeds the random number generator with the current time
    num = rand() % 100 + 1;  // Random number between 1 and 100

    cout << "********** NUMBER GUESSING GAME **********" << endl;

    do {
        cout << "Enter a guess between 1 and 100: ";
        cin >> guess;
        tries++;

        if (guess > num) {
            cout << "Too high!" << endl;
        } else if (guess < num) {
            cout << "Too low!" << endl;
        } else {
            cout << "CORRECT! # of tries: " << tries << endl;
        }
    } while (guess != num);

    cout << "**********************************************" << endl;

    return 0;
}
```

---

# 25.[USER DEFINED FUNCTIONS]📞  

- User-defined functions allow you to encapsulate code into reusable blocks.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

// Function to print a birthday greeting
void happyBirthday(string name, int age) {
    cout << "Happy Birthday to " << name << "!" << endl;
    cout << "Happy Birthday to you!" << endl;
    cout << "Happy Birthday dear " << name << "!" << endl;
    cout << "You are " << age << " years old!" << endl;
}

int main() {
    string name = "Bro";
    int age = 21;

    happyBirthday(name, age);  // Calling the function

    return 0;
}
```

---

# 26.[RETURN KEYWORD]🔙

- The `return` keyword is used to exit a function and optionally return a value.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

// Function declarations
int add(int a, int b);
void greet();
string concatStrings(string string1, string string2);

// Function definitions
void greet() {
    cout << endl << "Hello, World!" << endl;
}

string concatStrings(string string1, string string2) {
    return string1 + " " + string2;
}

int add(int a, int b) {
    return a + b;  // Returns the sum of a and b
}

int main() { 
    string firstName = "Bro";
    string lastName = "Code";
    string fullName = concatStrings(firstName, lastName); // Concatenates first and last names
    cout << "Hello " << fullName;

    int result = add(1, 2);  // Calls the add function and stores the result
    cout << endl << "The sum is: " << result;
    
    greet();  // Calls the greet function
    return 0;  // Exits the main function
}
```

---

# 27.[OVERLOADED FUNCTIONS]🍕  

- Function overloading allows you to define multiple functions with the same name but different parameters.

```cpp
#include <iostream>
#include <string>  // Include the string header

using namespace std;

// Function declarations
void bakePizza();
void bakePizza(string topping1);
void bakePizza(string topping1, string topping2);

int main() {
    bakePizza();  // Calls the no-argument version
    bakePizza("Pepperoni");  // Calls the version with one topping
    bakePizza("Pepperoni", "Mushroom");  // Calls the version with two toppings

    return 0;
}

// Function definitions
void bakePizza() {
    cout << "Here is your pizza!\n";  // No toppings
}

void bakePizza(string topping1) {
    cout << "Here is your " << topping1 << " pizza!\n";  // One topping
}

void bakePizza(string topping1, string topping2) {
    cout << "Here is your " << topping1 << " and " << topping2 << " pizza!\n";  // Two toppings
}
```

---

# 28.[VARIABLE SCOPE]🌎  
- **Local Variables** = Declared inside a function or block `{}`.
- **Global Variables** = Declared outside all functions.

```cpp
#include <iostream>
#include <iomanip>

int myNum = 10; // Global variable

void printNum(); // Function declaration

using namespace std;

int main() {

    int myNum = 5; // Local variable
    printNum(); // Calls function to print global variable
    cout << myNum << endl; // Prints local variable

    return 0;
}

void printNum() {
    cout << myNum << endl; // Prints global variable
}
```

---

# 29.[BANKING PRACTICE PROGRAM]💰  

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

void showBalance(double balance);
double deposit(double balance);  
double withdraw(double balance);

int main() {
    double balance = 0;
    int choice = 0;

    do {
        cout << "******************\n";
        cout << "Enter your choice:\n";
        cout << "******************\n";
        cout << "1. Show Balance\n";
        cout << "2. Deposit Money\n";
        cout << "3. Withdraw Money\n";
        cout << "4. Exit\n";
        cin >> choice;

        cin.clear();
        fflush(stdin);

        switch (choice) {
            case 1:
                showBalance(balance);
                break;
            case 2:
                balance += deposit(balance);
                showBalance(balance);
                break;
            case 3:
                balance -= withdraw(balance);
                showBalance(balance);
                break;
            case 4:
                cout << "Thank you for using Bro Bank!\n";
                break;
            default:
                cout << "Invalid choice!\n";
                break;
        }
    } while (choice != 4);

    return 0;
}

void showBalance(double balance) {
    cout << "Your balance is: $" << fixed << setprecision(2) << balance << endl;
}

double deposit(double balance) {
    double amount = 0;
    cout << "Enter amount to deposit: ";
    cin >> amount;

    if (amount > 0) {
        return amount;
    } else {
        cout << "Invalid amount!\n";
        return 0;
    }
}

double withdraw(double balance) {
    double amount = 0;
    cout << "Enter amount to withdraw: ";
    cin >> amount;

    if (amount > balance) {
        cout << "Insufficient funds!\n";
        return 0;
    } else if (amount < 0) {
        cout << "Invalid amount!\n";
        return 0;
    } else {
        return amount;
    }
}
```

---
# 30.[ROCK-PAPER-SCISSORS GAME]👊  

```cpp
#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

char getUserChoice();
char getComputerChoice();
void showChoice(char choice);
void chooseWinner(char userChoice, char computerChoice);

int main() {
    char player;
    char computer;

    player = getUserChoice();
    cout << "Your choice: ";
    showChoice(player);

    computer = getComputerChoice();
    cout << "Computer choice: ";
    showChoice(computer);

    chooseWinner(player, computer);

    return 0;
}

char getUserChoice() {
    char choice;
    cout << "--------------------------" << endl;
    cout << "Rock, Paper, Scissors Game" << endl;
    cout << "--------------------------" << endl;
    cout << "Enter your choice (R for Rock, P for Paper, S for Scissors): ";
    cin >> choice;
    return toupper(choice);
}

char getComputerChoice() {
    int random = rand() % 3;
    if (random == 0)
        return 'R';
    else if (random == 1)
        return 'P';
    else
        return 'S';
}

void showChoice(char choice) {
    switch (choice) {
        case 'R':
            cout << "Rock";
            break;
        case 'P':
            cout << "Paper";
            break;
        case 'S':
            cout << "Scissors";
            break;
        default:
            cout << "Invalid choice";
    }
    cout << endl;
}

void chooseWinner(char userChoice, char computerChoice) {
    if (userChoice == computerChoice) {
        cout << "It's a tie!" << endl;
    } else if ((userChoice == 'R' && computerChoice == 'S') ||
               (userChoice == 'P' && computerChoice == 'R') ||
               (userChoice == 'S' && computerChoice == 'P')) {
        cout << "You win!" << endl;
    } else {
        cout << "Computer wins!" << endl;
    }
}
```
---
Here's a well-formatted Markdown version for your section on arrays:

---

# **31. ARRAYS** 🚗

- **Array**: A data structure that can hold multiple values.
- **Accessing Values**: Values are accessed using an index number, starting from 0.
- **Concept**: Think of an array as a variable that can hold multiple values of the same type.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

    double prices[] = { 9.99, 10.99, 5.99, 7.99, 8.99 };

    cout << prices[0] << endl;
    cout << prices[1] << endl;
    cout << prices[2] << endl;
    cout << prices[3] << endl;
    cout << prices[4] << endl;

    return 0;
}
```
---
Here's a clean Markdown representation for the section on the `sizeof` operator:

---

# 32. [SIZEOF OPERATOR]⚖️

- **`sizeof()`**: Determines the size in bytes of a variable, data type, class, object, etc.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

    string name = "John";
    double gpa = 3.5;
    char grade = 'A';
    bool isMale = true;
    char grades[] = { 'A', 'B', 'C', 'D', 'F' };
    string students[] = { "John", "Jane", "Jack", "Jill" };

    cout << sizeof(students) / sizeof(string) << " elements in the array" << endl; 

    return 0;
}
```
---

# 33.[ITERATE OVER AN ARRAY]🗃️
```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

string students[] = { "John", "Jane", "Jack", "Jill" };

for(int i = 0; i < sizeof(students)/sizeof(string); i++) {
	cout << students[i] << endl;
}

return 0;
}
```

---
# 34. [FOREACH LOOP] 🗂️
- `foreach` loop = loop that eases the traversal over an iterable data set

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {

    int grades[] = { 1, 2, 3, 4, 5 };

    for(int grade : grades) {
        cout << grade << endl;
    }

    return 0;
}
```

---
# 35.[PASS ARRAY TO A FUNCTION]💵

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

double getTotal(double prices[], int size);

int main() {

double prices[] = { 9.99, 10.99, 5.99, 7.99, 8.99 };
int size = sizeof(prices)/sizeof(double);
double total = getTotal(prices, size);

cout << '$' << total;

return 0;
}

double getTotal(double prices[], int size) {
	double total = 0;

	for(int i = 0; i < size; i++) {
		total += prices[i];
	}
	return total;
}
```

---
# 36.[SEARCH ARRAY FOR AN ELEMENT]🔎
- **Purpose**: To demonstrate how to search for an element in an array and check if it exists.

- **Linear Search Overview**:
  - **Algorithm**: Sequentially checks each element of the array until the desired element is found or the end of the array is reached.
  - **Complexity**: O(n), where n is the number of elements. Suitable for unsorted arrays or small datasets.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int searchArray(int array[], int size, int element); // Function prototype

int main() {
    int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(numbers) / sizeof(int);
    int index;
    int myNum;

    cout << "Enter an element to search for: " << endl;
    cin >> myNum;

    index = searchArray(numbers, size, myNum);

    if (index != -1) {
        cout << "Element found at index " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }

    return 0;
}

int searchArray(int array[], int size, int element) { 
    for (int i = 0; i < size; i++) {
        if (array[i] == element) {
            return i;
        }
    }
    return -1; // Element not found
}

```

---
# 37. [SORT AN ARRAY]➡️
- **Purpose**: To demonstrate how to sort an array using the bubble sort algorithm.

- **Bubble Sort Overview**:
  - **Algorithm**: Compares adjacent elements and swaps them if they are in the wrong order. This process is repeated until the array is sorted.
  - **Complexity**: O(n^2), where n is the number of elements. Suitable for small arrays or educational purposes.
  
```cpp
// Bubble sort algorithm

#include <iostream>
#include <iomanip>

using namespace std;

// Function prototype
void sort(int array[], int size);

int main() {
    int array[] = {10, 1, 9, 2, 8, 3, 7, 4, 6, 5};
    int size = sizeof(array) / sizeof(int);

    // Call the sort function to sort the array
    sort(array, size);

    // Display the sorted array
    for (int element : array) {
        cout << element << " ";
    }

    return 0;
}

void sort(int array[], int size) {
    int temp;
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
```

---
# 38. [FILL FUNCTION]🍔
- **Purpose**: To demonstrate how to use the `fill` function to initialize or modify elements of an array with a specified value.

- **Function Overview**:
  - **`fill()`**: A standard library function that assigns a specified value to a range of elements in a container.
  - **Syntax**: `fill(begin, end, value)`, where `begin` is the starting iterator, `end` is the ending iterator, and `value` is the value to be assigned.

```cpp
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main() {
    const int SIZE = 99;
    string foods[SIZE]; 

    fill(foods, foods + (SIZE/3), "pizza"); // Fill the first third of array with "pizza"
    fill(foods + (SIZE/3), foods + (SIZE/3)*2, "hamburger"); // Fill the second third with "hamburger"
    fill(foods + (SIZE/3)*2, foods + SIZE, "hotdog"); // Fill the last third with "hotdog"
    
    for (string food : foods) {
        cout << food << endl;
    }

    return 0;
}
```

---
# 39.[FILL AN ARRAY WITH USER INPUT]🌭
- **Purpose**: To dynamically fill an array with values provided by the user during runtime.

- **Steps**:
  1. Declare an array.
  2. Prompt the user to enter values.
  3. Store these values in the array.
  4. Optionally, print the array to verify.
  
```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() 
{

	string foods[5];
	int size = sizeof(foods)/sizeof(foods[0]);
	string temp;

	for(int i = 0; i < size; i++)
	{
		cout << "Enter a food you like # or 'q' to quit" << i + 1 << ": ";
		getline(cin, temp);
		if (temp == "q")
		{
			break;
		}
		else {
			foods[i] = temp;
		}
	}

	cout << "You like the following food:\n";

	for(int i = 0; !foods[i].empty(); i++)
	{
		cout << foods[i] << endl;
	}

return 0;
}
```

---
# 40.[MULTIDIMENSIONAL ARRAYS]⬜
- **Multidimensional Arrays**: Arrays that have more than one dimension. Commonly used for representing matrices, tables, or grids in programming.

- **Declaration and Initialization**:
  - Multidimensional arrays are declared by specifying multiple dimensions.
  - Example: A 2D array can be visualized as a table or grid with rows and columns.
```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

	string cars[3][3] = {{"Chevy", "Camaro", "Corvette"},{"Ford", "Mustang", "GT"},{"Dodge", "Charger", "Challenger"}};

	// cout << cars[0][0] << " "; // Chevy
	// cout << cars[0][1] << " "; // Camaro
	// cout << cars[0][2] << " "; // Corvette
	// cout << endl;
	// cout << cars[1][0] << " "; // Ford
	// cout << cars[1][1] << " "; // Mustang
	// cout << cars[1][2] << " "; // GT
	// cout << endl;
	// cout << cars[2][0] << " "; // Dodge
	// cout << cars[2][1] << " "; // Charger
	// cout << cars[2][2] << " "; // Challenger

	int rows = sizeof(cars)/sizeof(cars[0]);
	int cols = sizeof(cars[0])/sizeof(cars[0][0]);

	for(int i = 0; i < rows; i++)
	{
		for(int j = 0; j < cols; j++) 
		{
			cout << cars[i][j] << " ";
		}
		cout << endl;
	}

return 0;
}
```

---
# 41. [QUIZ GAME]💯

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string questions[] = {
        "1. What year was C++ created?: ",
        "2. Who invented C++?: ",
        "3. What is the predecessor of C++: ",
        "4. Is the Earth flat?"
    };

    string options[4][4] = {
        {"a. 1980", "b. 1979", "c. 1970", "d. 1985"},
        {"a. Bjarne Stroustrup", "b. Dennis Ritchie", "c. James Gosling", "d. Steve Jobs"},
        {"a. C", "b. C#", "c. B", "d. A"},
        {"a. Yes", "b. No", "c. Maybe", "d. I don't know"}
    };

    char answerKey[] = {'a', 'a', 'a', 'b'};

    int size = sizeof(questions) / sizeof(questions[0]);
    char guess;
    int score = 0; // Initialize score to 0

    for (int i = 0; i < size; i++) {
        cout << "***************************\n";
        cout << questions[i] << endl;
        cout << "***************************\n";
        for (int j = 0; j < 4; j++) {
            cout << options[i][j] << endl;
        }
        cout << "Enter your answer: ";
        cin >> guess;
        if (guess == answerKey[i]) {
            cout << "Correct!\n";
            score++;
        } else {
            cout << "Incorrect!\n";
            cout << "The correct answer is: " << answerKey[i] << endl;
        }
    }

    cout << "***************************\n";
    cout << "      *  RESULTS  *        \n";
    cout << "***************************\n";
    cout << "CORRECT GUESSES: " << score << endl;
    cout << "# OF QUESTIONS: " << size << endl;
    cout << "SCORE: " << (score / (double)size) * 100 << "%" << endl;

    return 0;
}
```

---
# 42. [MEMORY ADDRESSES]🏠
- **Memory addresses** = a location in memory where data is stored
- A memory address can be accessed using the `&` operator

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    string name = "John";
    int age = 30;
    bool student = true;

    cout << &name << endl; // Memory address of 'name'
    cout << &age << endl; // Memory address of 'age'
    cout << &student << endl; // Memory address of 'student'

    return 0;
}
```

---
# 43. [PASS BY VALUE VS PASS BY REFERENCE]📧

- **Pass By Value**: A method of passing arguments to functions where a copy of the actual data is passed. Changes made to the parameter inside the function do not affect the original data.
- **Pass By Reference**: A method of passing arguments to functions where the actual address of the data is passed. Changes made to the parameter inside the function directly affect the original data.

```cpp
#include <iostream>
#include <string>
using namespace std;

// Function prototype for pass by value
void swapByValue(string a, string b);

// Function prototype for pass by reference
void swapByReference(string &x, string &y);

int main() {
    string x = "Kool-Aid";
    string y = "Water";

    // Pass by value example
    cout << "Before pass by value:" << endl;
    cout << "X: " << x << endl;
    cout << "Y: " << y << endl;
    swapByValue(x, y); // Copies of x and y are passed
    cout << "After pass by value (no change):" << endl;
    cout << "X: " << x << endl;
    cout << "Y: " << y << endl;

    // Pass by reference example
    cout << "\nBefore pass by reference:" << endl;
    cout << "X: " << x << endl;
    cout << "Y: " << y << endl;
    swapByReference(x, y); // References to x and y are passed
    cout << "After pass by reference (values swapped):" << endl;
    cout << "X: " << x << endl;
    cout << "Y: " << y << endl;

    return 0;
}

// Function definition for pass by value
void swapByValue(string a, string b) {
    string temp = a;
    a = b;
    b = temp;
}

// Function definition for pass by reference
void swapByReference(string &x, string &y) {
    string temp = x;
    x = y;
    y = temp;
}
```

---
# 44. [CONST PARAMETERS]🧱

- **const parameter** = a parameter that is effectively read-only
- Code is more secure & easier to debug
- Useful for references and pointers

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

void printInfo(const string &name, const int &age);

int main() {
    string name = "John";
    int age = 30;
    printInfo(name, age);

    return 0;
}

void printInfo(const string &name, const int &age) {
    // Uncommenting the lines below will result in a compilation error
    // because you cannot modify const parameters.
    // name = "Jane"; // error
    // age = 20;      // error

    cout << name << endl;
    cout << age << endl;
}
```

---
# 45.[CREDIT CARD VALIDATOR PROGRAM]💳
```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int getDigit(const int number);
int sumOddDigits(const string& cardNumber);
int sumEvenDigits(const string& cardNumber);
bool isValidCreditCard(const string& cardNumber);

int main() {
    string cardNumber;
    int result = 0;

    cout << "Enter a credit card number: ";
    cin >> cardNumber;
    
    if (isValidCreditCard(cardNumber)) {
        result = sumOddDigits(cardNumber) + sumEvenDigits(cardNumber);
        cout << "Result: " << result << endl;
    } else {
        cout << "Invalid credit card number." << endl;
    }

    return 0;
}

int getDigit(const int number) {
    return number % 10;
}

int sumOddDigits(const string& cardNumber) {
    int sum = 0;
    for (size_t i = 0; i < cardNumber.length(); i += 2) {
        int digit = cardNumber[i] - '0';
        sum += digit;
    }
    return sum;
}

int sumEvenDigits(const string& cardNumber) {
    int sum = 0;
    for (size_t i = 1; i < cardNumber.length(); i += 2) {
        int digit = cardNumber[i] - '0';
        sum += getDigit(digit * 2);
    }
    return sum;
}

bool isValidCreditCard(const string& cardNumber) {
    int totalSum = sumOddDigits(cardNumber) + sumEvenDigits(cardNumber);

    return (totalSum % 10 == 0);
}

```

---

# 47. [POINTERS]⛔

- **Pointers** = variables that store the memory address of another variable
- Sometimes it's easier to work with an address
- `&` = address-of operator
- `*` = dereference operator

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

    string name = "John";
    int age = 30;
    string freePizzas[5] = {"pizza1", "pizza2", "pizza3", "pizza4", "pizza5"}; 

    string *pName = &name;
    int *pAge = &age;
    string *pFreePizzas = freePizzas;

    cout << *pName << endl; // John
    cout << *pAge << endl; // 30
    cout << pFreePizzas << endl; // 0x7ffeeb0b4a68

    return 0;
}
```

---
# 47. [NULL POINTERS]⛔⛔

- **NULL value** = a special value that means "no value".
- When a pointer is holding a null value, it is not pointing to anything (null pointer).
- `nullptr` = keyword representing a null pointer.
- `nullptrs` are helpful for determining if an address was successfully assigned to a pointer.
- Be cautious with pointers to avoid dereferencing a nullptr or pointing to freed memory, as this can cause undefined behavior.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {

    int *pointer = nullptr;

    int x = 123;
    pointer = &x;

    // Check if the pointer is pointing to anything (not assigned)
    if (pointer == nullptr) {
        cout << "Address was not assigned!" << endl;
    } else {
        cout << "Address was assigned!" << endl;
        cout << "Pointer Address: " << pointer << endl;
    }
    return 0;
}
```

---
# 48.[TIC TAC TOE GAME]⭕

```cpp
#include <iostream>
#include <iomanip>
#include <ctime>

using namespace std;

void drawBoard(char *spaces);
void playerMove(char *spaces, char player);
void computerMove(char *spaces, char computer);
bool checkWinner(char *spaces, char player, char computer);
bool checkTie(char *spaces);

int main() {
    char spaces[9] = {' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '};
    char player = 'X';
    char computer = 'O';
    bool running = true;

    while (running) {
        drawBoard(spaces);
        playerMove(spaces, player);
        if (checkWinner(spaces, player, computer)) {
            cout << "You win! Congratulations!" << endl;
            break;
        }
        if (checkTie(spaces)) {
            cout << "It's a tie!" << endl;
            break;
        }

        drawBoard(spaces);
        computerMove(spaces, computer);
        if (checkWinner(spaces, player, computer)) {
            cout << "Computer wins! Better luck next time." << endl;
            break;
        }
        if (checkTie(spaces)) {
            cout << "It's a tie!" << endl;
            break;
        }
    }

    return 0;
}

void drawBoard(char *spaces) {
    cout << " " << spaces[0] << " | " << spaces[1] << " | " << spaces[2] << endl;
    cout << "-----------" << endl;
    cout << " " << spaces[3] << " | " << spaces[4] << " | " << spaces[5] << endl;
    cout << "-----------" << endl;
    cout << " " << spaces[6] << " | " << spaces[7] << " | " << spaces[8] << endl;
}

void playerMove(char *spaces, char player) {
    int position;
    cout << "Enter your move (1-9): ";
    cin >> position;

    // Check if the chosen position is valid and not already taken
    if (position >= 1 && position <= 9 && spaces[position - 1] == ' ') {
        spaces[position - 1] = player;
    } else {
        cout << "Invalid move. Try again." << endl;
        playerMove(spaces, player);  // Recursive call for a valid move
    }
}

void computerMove(char *spaces, char computer) {
    int position;
    
    // Generate a random move for the computer
    do {
        position = rand() % 9;
    } while (spaces[position] != ' ');

    spaces[position] = computer;
}

bool checkWinner(char *spaces, char player, char computer) {
    // Check rows, columns, and diagonals for a winner
    for (int i = 0; i < 3; ++i) {
        if ((spaces[i] == player && spaces[i + 3] == player && spaces[i + 6] == player) ||
            (spaces[i * 3] == player && spaces[i * 3 + 1] == player && spaces[i * 3 + 2] == player)) {
            return true;
        }
    }

    if ((spaces[0] == player && spaces[4] == player && spaces[8] == player) ||
        (spaces[2] == player && spaces[4] == player && spaces[6] == player)) {
        return true;
    }

    return false;
}

bool checkTie(char *spaces) {
    // Check if the board is full (no empty spaces)
    for (int i = 0; i < 9; ++i) {
        if (spaces[i] == ' ') {
            return false; // There is an empty space, the game can continue
        }
    }
    return true; // The board is full, it's a tie
}

```

---
# 49. [DYNAMIC MEMORY]🧠

- **Dynamic memory** = Memory that is allocated after the program is already compiled and running.
- Use the `new` keyword to allocate memory in the heap rather than the stack.
- Useful when we don't know how much memory we will need. Makes our programs more flexible, especially when accepting user input.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main() {

    // int *pNum = NULL;

    // pNum = new int;

    // *pNum = 42;

    // cout <<"pNum address: " << pNum << endl;
    // cout <<"pNum value: " << *pNum << endl;

    // delete pNum;

    char *pGrades = NULL;
    int size;

    cout << "How many grades would you like to enter? ";
    cin >> size;

    pGrades = new char[size];

    for (int i = 0; i < size; i++) {
        cout << "Enter grade #" << i + 1 << ": ";
        cin >> pGrades[i];
    }

    for (int i = 0; i < size; i++) {
        cout << "Grade #" << i + 1 << ": " << pGrades[i] << endl;
    }

    delete[] pGrades;

    return 0;
}
```

---
# 50. [RECURSION]😵

- **Recursion** = A programming technique where a function calls itself from within to break a problem into a repeatable single step.
- **Iterative vs Recursive**:
  - **Iterative**: Uses loops to repeat a process.
  - **Recursive**: The function calls itself to solve a problem.
- **Advantages**:
  - Less code and cleaner.
  - Useful for sorting and searching algorithms.
- **Disadvantages**:
  - Uses more memory.
  - Slower.
- **Paprastai kalbant**: Rekursija eina nuo [10 iki 0], o iteracija nuo [0 iki 10].

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

void iterativeWalk(int steps) {
    for (int i = 0; i < steps; ++i) {
        cout << "You take a step!" << endl;
    }
}

void recursiveWalk(int steps) {
    if (steps > 0) {
        cout << "You take a step!" << endl;
        recursiveWalk(steps - 1); // Recursive call
    }
}

int main() {
    // Iterative approach
    cout << "Iterative Walk:" << endl;
    iterativeWalk(5);

    // Recursive approach
    cout << "\nRecursive Walk:" << endl;
    recursiveWalk(5);

    return 0;
}
```

---
# 51.[FUNCTION TEMPLATES]🍪
- **Function Template** = Describes what a function looks like.
- Can be used to generate as many functions as needed, each using different data types.
- **Example**: "It's like a cookie cutter... Cookies are the same shape, but the dough used can be different."


**CLASS TEMPLATE:**
```cpp
#include <iostream>

template <typename T>
class Container {
private:
    T item;
public:

    Container(T i) : item(i) {}

    // Method to get the item
    T getItem() const {
        return item;
    }

    void setItem(T i) {
        item = i;
    }
};

int main() {
    using namespace std;

    // Create a Container of integers
    Container<int> intContainer(42);
    cout << "Item in intContainer: " << intContainer.getItem() << endl;

    // Create a Container of characters
    Container<char> charContainer('A');
    cout << "Item in charContainer: " << charContainer.getItem() << endl;

    return 0;
}
```
**FUNCTION TEMPLATE:**
```cpp
#include <iostream>

using namespace std;

template <typename T, typename Z>
Z findMax (T a , Z b) {
    return (a > b ? a : b);
}

int main() {

    double result = findMax<int, double>(5, 6.7);
    double doubleMax = findMax(10, 20.5);
    cout << "The max of integers is: " << result << endl;
    cout << "The max of double is: " << doubleMax << endl;
    return 0;
}
```

---
# 52.[STRUCTS]🏗️
- **Struct** = Similar to arrays but can hold different data types.
- **Members** = Variables in a struct.
- Members can be accessed using the dot operator (.).

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

struct student{
	string name;
	double gpa;
	bool enrolled;
};

int main() {

student student1;
student1.name = "Patrick";
student1.gpa = 3.2;
student1.enrolled = true;

student student2;
student2.name = "Bob";
student2.gpa = 2.2;
student2.enrolled = true;

student student3;
student3.name = "Spongebob";
student3.gpa = 3.9;
student3.enrolled = false;

cout << student1.name << endl;
cout << student1.gpa << endl;
cout << student1.enrolled << endl;

cout << student2.name << endl;
cout << student2.gpa << endl;
cout << student2.enrolled << endl;

cout << student3.name << endl;
cout << student3.gpa << endl;
cout << student3.enrolled << endl;

return 0;
}
```

---
# 53.[PASS STRUCTS AS ARGUMENTS]🚚
- **Pass by Reference**: When passing a struct to a function by reference, the function can modify the original struct. This is efficient for large structs as it avoids copying the entire struct.
- **Pass by Value**: When passing a struct to a function by value, a copy of the struct is made. This can be less efficient for large structs due to the overhead of copying.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

struct Car {
    string model;
    int year;
    string color;
};

void paintCar(Car &car, string newColor);
void printCar(Car &car);

int main() {
    Car car1;
    Car car2;

    car1.model = "Mustang";
    car1.year = 1967;
    car1.color = "blue";

    car2.model = "Camaro";
    car2.year = 1969;
    car2.color = "green";

    paintCar(car1, "red");
    paintCar(car2, "black");

    printCar(car1);
    printCar(car2);

    return 0;
}

void printCar(Car &car) {
    cout << car.model << " " << car.year << " " << car.color << endl;
}

void paintCar(Car &car, string color) {
    car.color = color;
}

```

---
# 54.[ENUMS]📅
- **Enums** = Like a list of a few possible values for a variable.
- Enums help to represent a set of named integral constants.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

enum Day {Monday = 0, Tuesday = 1, Wednesday = 2, Thursday = 3, Friday = 4, Saturday = 5, Sunday = 6};

int main() {

    Day today = Sunday;

    switch(today){
        case Monday:
            cout << "Today is Monday" << endl;
            break;
        case Tuesday:
            cout << "Today is Tuesday" << endl;
            break;
        case Wednesday:
            cout << "Today is Wednesday" << endl;
            break;
        case Thursday:
            cout << "Today is Thursday" << endl;
            break;
        case Friday:
            cout << "Today is Friday" << endl;
            break;
        case Saturday:
            cout << "Today is Saturday" << endl;
            break;
        case Sunday:
            cout << "Today is Sunday" << endl;
            break;
        default:
            cout << "Invalid day" << endl;
            break;
    }

    return 0;
}

```

---
# 55.[OOP]🧍
- **Object** = A collection of attributes and methods.
- They can have characteristics and perform actions.
- Can be used to mimic real-world items (e.g., Phone, Car, Person, etc.).
- Created from a class, which acts as a "blueprint."

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

class Car {
		public:
			string make;
			string model;
			int year;
			string color;

			void accelerate() {
				cout << "You step on the gas!" << endl;
			}

			void brake() {
				cout << "You step on the brake!" << endl;
			}
};

int main() {

Car car1;

car1.make = "Ford";
car1.model = "Mustang";
car1.year = 1967;
car1.color = "blue";

cout << car1.make << endl;
cout << car1.model << endl;
cout << car1.year << endl;
cout << car1.color << endl;

car1.accelerate();
car1.brake();

return 0;
}
```

---
# 56. [CONSTRUCTORS]👷
- **Constructor** = A special method that is automatically called when an object of a class is created.
- Useful for assigning initial values to attributes.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Student{
	public:
	string name;
	int age;
	double gpa;

	Student(string name, int age, double gpa){
		this->name = name;
		this->age = age;
		this->gpa = gpa;
	}
};

int main() {

Student student1("Patrick", 22, 3.2);
Student student2("Bob", 19, 2.2);

cout << student1.name << endl;
cout << student1.age << endl;
cout << student1.gpa << endl;

cout << student2.name << endl;
cout << student2.age << endl;
cout << student2.gpa << endl;

return 0;
}
```

---
# 57. [CONSTRUCTOR OVERLOADING]👨‍🍳
- **Overloaded Constructors** = Multiple constructors with the same name but different parameters.
- Allows for varying arguments when instantiating objects.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Pizza {
public: 
	string topping1;
	string topping2;

	Pizza(){
	}

	Pizza(string topping1){
		this->topping1 = topping1;
	}

		Pizza(string topping1, string topping2){
		this->topping1 = topping1;
		this->topping2 = topping2;
	}

};

int main() {

Pizza pizza1("pepperoni");
Pizza pizza2("cheese, sausage");
Pizza pizza3;

cout << pizza2.topping1 << endl;
cout << pizza2.topping2 << endl;

return 0;
}
```

---
# 58. [GETTERS & SETTERS]🔒
- **Abstraction** = Hiding unnecessary data from outside a class.
- **Getter** = Function that makes a private attribute **READABLE**.
- **Setter** = Function that makes a private attribute **WRITEABLE**.

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

class Stove {
	private:
		int temperature = 0;
	public:
	Stove (int temperature) {
		setTemperature(temperature);
	}

	int getTemperature() { // getter
		return temperature;
	}

	void setTemperature(int temperature) { // setter
	  if (temperature < 0) {
	    this->temperature = 0;
	  }
		else if (temperature >= 10) {
			this->temperature = 10;
		}
		else
		this->temperature = temperature;
	}
};

int main() {

Stove stove(0);

cout << "Stove temperature: " << stove.getTemperature() << endl;

return 0;
}
```

---
# 59.[INHERITANCE]👩‍👧‍👦
- **Inheritance**: A fundamental concept in object-oriented programming (OOP) that allows a class (derived class) to inherit attributes and methods from another class (base class). It promotes code reuse and establishes a natural hierarchy between classes.

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Animal {
public: 
    bool alive = true;
};

class Dog : public Animal {
public: 
    void bark() {
        cout << "This dog barks." << endl;
    }

    void eat() {
        cout << "This dog eats." << endl;
    }
};

class Cat : public Animal {
public: 
    void meow() {
        cout << "This cat meows." << endl;
    }

		void eat() {
				cout << "This cat eats." << endl;
		}
};

int main() {
    Dog dog;
    Cat cat;

    cout << "Is the dog alive? " << dog.alive << endl;
    dog.eat();
    dog.bark();

    cout << "Is the cat alive? " << cat.alive << endl;
    cat.eat();
    cat.meow();

    return 0;
}

```

---
# 60.[EXCEPTION HANDLING]⚠️
- **Exception Handling** = Mechanism to handle runtime errors and exceptions, preventing the program from crashing.
- Uses `try`, `catch`, and `throw` keywords.

```cpp
#include <iostream>
using namespace std;

int dividetwonumbers(int x, int y) {
	if (y == 0) {
		throw 'c';
	}
	return x / y;
}

int main() {
	 int num, den;
	 cout << "Please enter the numerator and denominator: ";
	 cin >> num >> den;
	 int result;
	 try {
		 result = dividetwonumbers(num, den);
		 cout << "Result: " << result << endl;
	 }
	 catch (int msg) {
		 cout << "Error is zero: " << msg << endl;
	 }
	 catch (double msg) {
		 cout << "Error is double zero: " << endl;
	 }
   catch (...) {
		 cout << "Error is unknown" << endl;
	 }
	return 0;
}
```

---
# 61.[FILE HANDLING]📂
- **File Handling** = Mechanism to read from and write to files.
- Uses file streams: `ifstream` (input file stream) and `ofstream` (output file stream).

**READ:**
```cpp
#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {

	ifstream inFile("example.txt");
	if (inFile.is_open()) {
		cout << "File Opened" << endl;
		string line;
		while (getline(inFile, line)) {
			cout << line << endl;
		}
		inFile.close();
	}
	else {
		cout << "Could not open the file." << endl;
	}  
    return 0;
}
```
**WRITE:**
```cpp
#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ofstream outFile("example.txt", ios::app); // ios::app saves previaus data saved in the file.
    if(outFile.is_open()) {
        cout << "The file is open." << endl;
        outFile << "This is a line of text." << endl;
        outFile << "This is another line of text." << endl;
        outFile.close();
        cout << "The file is closed." << endl;
    }
    else {
        cout << "Could not open the file." << endl;
    }
    
    return 0;
}
```

---
# 62. [STL]📚

- **STL (Standard Template Library)**: A collection of C++ template classes and functions to provide common programming data structures and algorithms such as lists, stacks, arrays, etc.

- **STL includes 3 main components:**

1. **[Containers]**:
   - A collection of classes that store data.
   - Examples: `vector`, `list`, `stack`, `queue`, `deque`, `set`, `map`, etc.

2. **[Algorithms]**:
   - A collection of functions for performing various operations on containers.
   - Examples: Sorting (`sort()`), searching (`find()`), counting (`count()`), manipulating (`reverse()`, `transform()`), etc.

3. **[Iterators]**:
   - A collection of iterators that can be used to traverse the elements of containers.
   - Iterator functions are: `begin()`, `end()`, `rbegin()`, `rend()`, `cbegin()`, `cend()`, `crbegin()`, `crend()`
   
**ARRAY:**
```cpp
#include <iostream>
#include <array>

using namespace std;

int main() {
    array<int, 5> arr = {10, 20, 30, 40, 50}; // specify the size as 5
    int size = arr.size();
    cout << "Size of array: " << size << endl;
    for(int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    cout << "2nd element: " << arr.at(1) << endl;
    cout << "Array is empty: " << arr.empty() << endl;
    cout << "First element: " << arr.front() << endl;
    cout << "Last element: " << arr.back() << endl;
    return 0;
}
```
**LIST:**
```cpp
#include <iostream>
#include <list>

using namespace std;

int main() {
    // Define a list of integers
    list<int> num = {10, 20, 30, 40, 50};
    
    // Print the elements of the list using range-based for loop
    cout << "Elements of the list: ";
    for(int i : num) {
        cout << i << " ";
    }
    cout << endl;
    
    // Add elements to the front and back of the list
    num.push_front(5);
    num.push_back(70);
    cout << "After push_front(5) and push_back(70): ";
    
    // Print the elements of the list using iterators
    for(auto it = num.begin(); it != num.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Create a new list and initialize it with elements of the first list
    list<int> num2(num);
    cout << "Elements of list 2:" << endl;
    for(int i : num2) {
        cout << i << endl;
    }
    
    return 0;
}
```
**MAP:**
```cpp
#include <iostream>
#include <map>

using namespace std;

int main() {

		map<int, string> m;
		m.insert(pair<int, string>(1, "C"));
		m.insert(pair<int, string>(2, "C++"));
		m.insert(pair<int, string>(3, "Java"));
		m.insert(pair<int, string>(4, "SQL"));

		cout<<"Size of the map is:" << m.size() << endl;
		cout<<"Key 3 is in the map: " << m.count(3) << endl;

		map<int, string>::iterator it;
		for(it = m.begin(); it != m.end(); it++) {
				cout << it->first << " " << it->second << endl;
		}

		cout << "Find 3 Value: " << endl;
		it = m.find(3);
		cout << it->first << " " << it->second << endl;

    return 0;
}
```
**QUEUE:**
```cpp

#include <iostream>
#include <queue>

using namespace std;

int main() {

		queue<int> s;
    s.push(10);
		s.push(20);
		s.push(30);
		s.push(40);
		s.push(50);

		cout << "Top element: " << s.front() << endl;
		s.pop();
		cout << "Top element after pop: " << s.front() << endl;
		cout << "Size of queue: " << s.size() << endl;
		cout << "Is queue empty: " << s.empty() << endl;
		while(!s.empty()) {
				cout << s.front() << " ";
				s.pop();
		}
		cout << "Is queue empty: " << s.empty() << endl;
    return 0;
}
```
**SET:**
```cpp
#include <iostream>
#include <set>

using namespace std;

int main() {

		set <int, greater<int>> s1;
		s1.insert(10);
		s1.insert(20);
		s1.insert(5);
		s1.insert(2);
		s1.insert(50);
		s1.insert(10);

		for (int i : s1) {
				cout << i << " ";
		}
		set<int, greater<int>> s2(s1.begin(), s1.end());
		cout << "S2 elements: ";
		set<int, greater<int>>::iterator i;
		for (i = s2.begin(); i != s2.end(); i++) {
				cout << *i << " ";
		}
		s2.erase(s2.begin(), s2.find(5));
		cout << "S2 elements after erase up to 20: ";
				for (i = s2.begin(); i != s2.end(); i++) {
				cout << *i << " ";
		}
    return 0;
}
```
**STACK:**
```cpp
#include <iostream>
#include <stack>

using namespace std;

int main() {

		stack<int> s;
    s.push(10);
		s.push(20);
		s.push(30);
		s.push(40);
		s.push(50);

		cout << "Top element: " << s.top() << endl;
		s.pop();
		cout << "Top element after pop: " << s.top() << endl;
		cout << "Size of stack: " << s.size() << endl;
		cout << "Is stack empty: " << s.empty() << endl;
		while(!s.empty()) {
				cout << s.top() << " ";
				s.pop();
		}
		cout << "Is stack empty: " << s.empty() << endl;
    return 0;
}
```
**VECTOR:**
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    // Create a vector
    vector<int> vect;

    // Initial capacity of the vector
    cout << "Initial capacity of vector: " << vect.capacity() << endl;

    // Add elements to the vector
    vect.push_back(10);
    vect.push_back(50);
    vect.push_back(30);
    vect.push_back(20);
    vect.push_back(40);

    // Display elements of the vector
    cout << "Elements of the vector:";
    for(int x : vect) {
        cout << " " << x;
    }
    cout << endl;

    // Remove an element from the end of the vector and add a new one
    vect.pop_back(); 
    vect.push_back(40);

    // Iterator for traversing the vector
    vector<int>::iterator i;

    // Before sorting
    cout << "Before sorting:";
    for(i = vect.begin(); i != vect.end(); i++) {
        cout << " " << *i;
    }
    cout << endl;

    // Sort the vector
    sort(vect.begin(), vect.end());

    // After sorting
    cout << "After sorting:";
    for(i = vect.begin(); i != vect.end(); i++) {
        cout << " " << *i;
    }
    cout << endl;

    // Perform binary search on the vector
    bool result = binary_search(vect.begin(), vect.end(), 30);
    cout << "Binary search result for element 30: " << result << endl;

    // Reverse the vector
    reverse(vect.begin(), vect.end());
    cout << "After reversing:";
    for(i = vect.begin(); i != vect.end(); i++) {
        cout << " " << *i;
    }
    cout << endl;

    // Find minimum and maximum elements in the vector
    cout << "Minimum element: " << *min_element(vect.begin(), vect.end()) << endl;
    cout << "Maximum element: " << *max_element(vect.begin(), vect.end()) << endl;

    return 0;
}
```
---
# 63.[CHRONO TIME LIBRARY]
- **Chrono Time Library**: A part of the C++ Standard Library for handling date and time. It provides facilities for representing time points, durations, and clocks.
```cpp
#include <iostream>
#include <chrono>
#include <thread>

using namespace std;
using namespace std::chrono;

// Function to perform some time-consuming task
void timeConsumingTask() {
    // Simulate a time-consuming task by sleeping for 2 seconds
    this_thread::sleep_for(2s);
}

int main() {
    // Measure the execution time of a time-consuming task
    auto start = high_resolution_clock::now(); // Get the current time
    timeConsumingTask(); // Call the time-consuming task
    auto end = high_resolution_clock::now(); // Get the current time again

    // Calculate the elapsed time
    auto duration = duration_cast<milliseconds>(end - start);

    // Output the elapsed time in various formats
    cout << "Elapsed time: " << duration.count() << " milliseconds" << endl;
    cout << "Elapsed time: " << duration.count() / 1000.0 << " seconds" << endl;

    // Format the elapsed time using the chrono formatting library
    auto formattedTime = duration_cast<seconds>(duration); // Changed from chrono::seconds to seconds
    cout << "Formatted elapsed time: " << formattedTime.count() << " seconds" << endl; // Use count() to get the duration as seconds

    // Perform time conversions
    auto now = system_clock::now();
    time_t nowTime = system_clock::to_time_t(now);
    cout << "Current time: " << ctime(&nowTime);

    // Add a duration to the current time
    auto futureTime = now + hours(24);
    time_t futureTimeT = system_clock::to_time_t(futureTime);
    cout << "Future time after 24 hours: " << ctime(&futureTimeT);

    return 0;
}
```

---
# 64. [31 NOOBY HABITS] 🚫

```txt
#1. using namespace std
#2. using std endl in a loop
#3. index based for when range-for fits better
#4. rewriting std algorithms
#5. using C array over std array
#6. any use of reinterpret cast
#7. casting away const
#8. not knowing map bracket inserts element
#9. ignoring const-correctness
#10. not knowing string literal lifetime
#11. not using structured bindings
#12. out-params instead of returning a struct
#13. not using constexpr
#14. forgetting to mark destructor virtual
#15. thinking class members init in order of init list
#16. not knowing about default vs value initialization
#17. MAGIC NUMBERS
#18. modifying a container while looping over it
#19. returning std move of a local
#20. thinking std move moves something
#21. thinking evaluation order is left to right
#22. unnecessary heap allocations
#23. not using unique ptr and shared ptr
#24. not using make unique and make shared
#25. any use of new and delete
#26. any manual resource management
#27. thinking raw pointers are bad
#28. using shared ptr when unique ptr would do
#29. thinking shared ptr is thread-safe
#30. mixing up const ptr vs ptr to const
#31. ignoring compiler warnings
```
---