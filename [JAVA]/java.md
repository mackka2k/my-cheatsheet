# 1. INTRO

In this section, we will cover the basics of Java programming, including how to print variables and text, comment your code, and use shortcuts to enhance productivity.

```java
public class Main {
    public static void main(String[] args) {
        int x = 1;
        System.out.println(x); // Print variable value

        System.out.println("Tekstas"); // Print text

        int y = 123;
        System.out.println("y = " + y); // Print text and variable value
    }
}
```

**Comments**

```java
// This is a single-line comment

/*
 * This
 * is
 * a
 * multi-line comment
 */
```

**Shortcuts**

- **Shortcut for `System.out.println`:** 
  - Type `sysout` and press `Ctrl + Space`
  
- **Special Characters:**
  - `\t` - **[TAB]**
  - `\n` - **[Equivalent to `endl`]**
  
- **Printing Methods:**
  - `System.out.println` - **[With new line]**
  - `System.out.print` - **[Without new line]**

--- 
# 2. VARIABLES

In this section, we will explore variable declaration in Java, including different data types and their syntax.

```java
public class Main {
    public static void main(String[] args) {
        int x = 123;
        System.out.println("My number is: " + x);
    }
}
```

**Variable Declarations:**

```java
// int x = 123;           // Integer
// boolean x = true;     // Boolean
// char symbol = '@';    // Character
// String name = "Bro";  // String (capitalize 'S')
// double x = 3.14;      // Double
// float x = 3.14f;      // Float (use 'f' suffix)
// long x = 12315456861L; // Long (use 'L' suffix)
// byte x = 100;         // Byte (range: -128 to 127)
```

**Key Explanations**

- **Integer:** 
  - `int x = 123;` - Declares an integer variable `x` and initializes it with the value 123.

- **Boolean:**
  - `boolean x = true;` - Declares a boolean variable `x`, which can hold either `true` or `false`.

- **Character:**
  - `char symbol = '@';` - Declares a character variable `symbol` initialized with the character '@'.

- **String:**
  - `String name = "Bro";` - Declares a string variable `name`. Note that `String` should be capitalized.

- **Double:**
  - `double x = 3.14;` - Declares a double variable `x` for decimal values.

- **Float:**
  - `float x = 3.14f;` - Declares a float variable `x`, where the value must end with an `f`.

- **Long:**
  - `long x = 12315456861L;` - Declares a long variable `x`, with values that need an `L` suffix.

- **Byte:**
  - `byte x = 100;` - Declares a byte variable `x`, which can hold values from -128 to 127.

--- 

# 4. SWAP TWO VARIABLES

In this section, we will look at how to swap the values of two variables in Java using a temporary variable.

```java
public class Main {
    public static void main(String[] args) {
        String x = "water";
        String y = "Kool-Aid";
        String temp; // Let's temporarily store the value

        temp = x; // temp is now "water"
        x = y;    // x is now "Kool-Aid"
        y = temp; // y is now "water"

        System.out.println("x: " + x);
        System.out.println("y: " + y);
    }
}
```

**Key Explanations**

- **Variables Initialization:**
  - `String x = "water";` and `String y = "Kool-Aid";` - These lines initialize two string variables, `x` and `y`, with the values "water" and "Kool-Aid," respectively.

- **Using a Temporary Variable:**
  - `String temp;` - A temporary variable `temp` is declared to facilitate the swapping of values.
  
- **Swapping Process:**
  - `temp = x;` - The value of `x` ("water") is stored in `temp`.
  - `x = y;` - The value of `y` ("Kool-Aid") is assigned to `x`.
  - `y = temp;` - Finally, the value stored in `temp` ("water") is assigned to `y`.

- **Output:**
  - The program prints the new values of `x` and `y` after swapping using `System.out.println()`.

---
# 5. USER INPUT

In this section, we will explore how to take user input in Java using the `Scanner` class.

```java
import java.util.Scanner; // NEED TO IMPORT LIBRARY

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // Create Scanner OBJ

        System.out.println("What is your name? ");
        String name = scanner.nextLine(); // Read "STRING" name value

        System.out.println("How old are you? ");
        int age = scanner.nextInt(); // Read "INT" age value

        scanner.nextLine(); // Clear the '\n' leftover,
        // because scanner.nextInt(); only reads the number and leaves
        // '\n' which prevents reading the next [String food]

        System.out.println("What is your favorite food?");
        String food = scanner.nextLine(); // Read "STRING" food value

        System.out.println("Hello " + name);
        System.out.println("You are " + age + " years old");
        System.out.println("You like " + food);
    }
}
```

**Key Explanations**

- **Import Statement:** 
  - `import java.util.Scanner;` - This imports the `Scanner` class, which is part of the Java Utility package. It allows us to read user input from various sources, including keyboard input.

- **Creating a Scanner Object:**
  - `Scanner scanner = new Scanner(System.in);` - This creates a new `Scanner` object named `scanner` that reads input from the standard input stream (usually the keyboard).

- **Reading String Input:**
  - `String name = scanner.nextLine();` - This reads an entire line of text input by the user and stores it in the variable `name`.

- **Reading Integer Input:**
  - `int age = scanner.nextInt();` - This reads an integer value input by the user and stores it in the variable `age`.

- **Clearing the Buffer:**
  - `scanner.nextLine();` - This clears the newline character left in the buffer after reading the integer input. Without this, subsequent calls to `nextLine()` would be skipped.

- **Output:**
  - The program then prints the user's name, age, and favorite food using `System.out.println()`.

---
# 6. EXPRESSIONS

In this section, we will examine expressions in Java, which involve the combination of operands and operators to perform various calculations or operations.

```java
public class Main {
    public static void main(String[] args) {
        int friends = 10;

        // friends = friends - 1; // Decrementing friends
        // friends -= -1;          // Incrementing friends

        // friends = friends * 2;  // Doubling friends
        // friends *= -1;          // Negating friends

        // friends = friends / 2;   // Halving friends
        // friends /= -1;           // Negating the value of friends

        // friends = friends % 2;   // Remainder of friends divided by 2
        // friends %= -1;           // Negating the remainder

        // friends = (double) friends / 3; // Casting to double for division

        // friends++; // Incrementing friends
        friends--; // Decrementing friends

        System.out.println(friends); // Printing the final value of friends
    }
}

// Expression = operands & operators
// Operands = values, variables, numbers, quantities
// Operators = + - * / %
```
---
# 7. GUI INTRO

In this section, we will explore how to create simple graphical user interface (GUI) elements using the `JOptionPane` class in Java. This allows us to gather user input and display messages in dialog boxes.

```java
import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) throws Exception {
        String name = JOptionPane.showInputDialog("Enter your name"); // Input dialog
        JOptionPane.showMessageDialog(null, "Hello " + name); // Message dialog

        int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your age")); // Input dialog with conversion to int
        JOptionPane.showMessageDialog(null, "You are " + age + " years old"); // Message dialog

        double height = Double.parseDouble(JOptionPane.showInputDialog("Enter your height")); // Input dialog with conversion to double
        JOptionPane.showMessageDialog(null, "You are " + height + " cm tall"); // Message dialog
    }
}
```

---
# 8. MATH CLASS

In this section, we will explore some basic mathematical functions provided by the `Math` class in Java, as well as how to calculate the hypotenuse of a right triangle using user input.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Example of Math class functions
        /*
        double x = 3.14;
        double y = -10;

        // double z = Math.max(x, y);     // Maximum value
        // double z = Math.min(x, y);     // Minimum value
        // double z = Math.abs(y);         // Absolute value
        // double z = Math.sqrt(x);        // Square root
        // double z = Math.pow(x, 2);      // Power of x
        // double z = Math.round(x);       // Round to nearest integer
        // double z = Math.ceil(x);        // Round up
        // System.out.println(z);
        */

        // HYPOTENUSE
        double x;
        double y;
        double z;

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter side x: ");
        x = scanner.nextDouble();
        System.out.println("Enter side y: ");
        y = scanner.nextDouble();
        z = Math.sqrt((x * x) + (y * y)); // Calculate hypotenuse using Pythagorean theorem

        System.out.println("The hypotenuse is: " + z);

        scanner.close();
    }
}
```
--- 
# 9. RANDOM NUMBERS

In this section, we will explore how to generate random numbers using the `Random` class in Java.

```java
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random random = new Random();
        
        // Example of generating random numbers
        /*
        int x = random.nextInt(5) + 1;   // Generates a random integer between 1 and 5
        double y = random.nextDouble();    // Generates a random double between 0.0 (inclusive) and 1.0 (exclusive)
        */
        
        boolean z = random.nextBoolean();   // Generates a random boolean value (true or false)

        System.out.println(z);  // Print the random boolean value
    }
}
```
---
# 10. IF STATEMENTS

In this section, we will explore how to use if statements to control the flow of execution in Java based on certain conditions.

```java
public class Main {
    public static void main(String[] args) {
        int age = 12;

        if (age == 75) {
            System.out.println("Ok Boomer!"); // Executes if age is exactly 75
        } 
        else if (age >= 18) {
            System.out.println("You are an adult!"); // Executes if age is 18 or older
        } 
        else if (age >= 13) {
            System.out.println("You are a teenager!"); // Executes if age is between 13 and 17
        } 
        else {
            System.out.println("You are not an adult!"); // Executes if age is less than 13
        }
    }
}
```
---
# 11. SWITCHES

In this section, we will explore how to use switch statements to execute different parts of code based on the value of a variable.

```java
public class Main {
    public static void main(String[] args) {
        String day = "Monday";

        switch (day) {
            case "Monday":
                System.out.println("Today is Monday"); // Executes if day is Monday
                break;
            case "Tuesday":
                System.out.println("Today is Tuesday"); // Executes if day is Tuesday
                break;
            case "Wednesday":
                System.out.println("Today is Wednesday"); // Executes if day is Wednesday
                break;
            case "Thursday":
                System.out.println("Today is Thursday"); // Executes if day is Thursday
                break;
            case "Friday":
                System.out.println("Today is Friday"); // Executes if day is Friday
                break;
            case "Saturday":
                System.out.println("Today is Saturday"); // Executes if day is Saturday
                break;
            case "Sunday":
                System.out.println("Today is Sunday"); // Executes if day is Sunday
                break;
            default:
                System.out.println("Invalid day"); // Executes if day does not match any case
                break;
        }
    }
}
```
---
# 12. LOGICAL OPERATORS

In this section, we will explore logical operators, which are used to connect two or more expressions.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Logical operators = used to connect two or more expressions
        //
        // && = (AND) both conditions must be true
        // || = (OR) either condition must be true
        // ! = (NOT) reverses boolean value of condition

        Scanner scanner = new Scanner(System.in);

        System.out.println("You are playing a game! Press q or Q to quit");
        String response = scanner.next();

        if (!response.equals("q") && !response.equals("Q")) { // Check if response is not 'q' or 'Q'
            System.out.println("You are still playing the game :)"); // Executes if the player continues
        } else {
            System.out.println("You quit the game"); // Executes if the player quits
        }

        scanner.close(); // Close the scanner to prevent resource leaks
    }
}
```
---
# 13. WHILE LOOP

In this section, we will explore the while loop, which executes a block of code as long as its condition remains true.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // While loop = executes a block of code as long as its condition remains true

        Scanner scanner = new Scanner(System.in);
        String name = "";

        // Loop until the user enters a non-blank name
        while (name.isBlank()) { 
            System.out.print("Enter your name: "); // Prompt user for input
            name = scanner.nextLine(); // Read user input
        }
        System.out.println("Hello " + name); // Greet the user

        scanner.close(); // Close the scanner to prevent resource leaks
    }
}
```
---
# 14. FOR LOOP

In this section, we will explore the for loop, which is used to iterate a specific number of times, including nested loops (a loop inside of a loop).

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Nested loops = a loop inside of a loop

        Scanner scanner = new Scanner(System.in);
        int rows;
        int columns;
        String symbol = "";

        System.out.println("Enter # of rows: ");
        rows = scanner.nextInt(); // Read the number of rows from user input
        System.out.println("Enter # of columns: ");
        columns = scanner.nextInt(); // Read the number of columns from user input
        System.out.println("Enter symbol to use: ");
        symbol = scanner.next(); // Read the symbol to use for printing

        // Outer loop for rows
        for (int i = 1; i <= rows; i++) { 
            System.out.println(); // Move to the next line after each row
            // Inner loop for columns
            for (int j = 1; j <= columns; j++) { 
                System.out.print(symbol); // Print the symbol for each column
            }
        }

        scanner.close(); // Close the scanner to prevent resource leaks
    }
}
```
---
# 15. ARRAYS

In this section, we will explore arrays, which are used to store multiple values within a single variable.

```java
public class Main {
    public static void main(String[] args) {
        // Array = used to store multiple values within a single variable

        String[] cars = new String[3]; // Declare an array of Strings with a size of 3

        // Assign values to the array
        cars[0] = "Camaro";
        cars[1] = "Corvette";
        cars[2] = "Tesla";

        // Loop through the array and print each value
        for (int i = 0; i < cars.length; i++) {
            System.out.println(cars[i]); // Print the value at index i
        }
    }
}
```
---
Here’s your section on 2D arrays in Java, formatted as requested:

# 16. [2D ARRAYS]

In this section, we will explore 2D arrays, which are essentially arrays of arrays.

```java
public class Main {
    public static void main(String[] args) {
        // 2D array = an array of arrays

        String[][] cars = {
                {"Camaro", "Corvette", "Silverado"},
                {"Mustang", "Ranger", "F-150"},
                {"Ferrari", "Lambo", "Tesla"}
        };

        /*
        // Alternative way to assign values
        cars[0][0] = "Camaro";
        cars[0][1] = "Corvette";
        cars[0][2] = "Silverado";
        cars[1][0] = "Mustang";
        cars[1][1] = "Ranger";
        cars[1][2] = "F-150";
        cars[2][0] = "Ferrari";
        cars[2][1] = "Lambo";
        cars[2][2] = "Tesla";
        */

        // Loop through the 2D array and print each value
        for (int i = 0; i < cars.length; i++) {
            System.out.println(); // Print a new line for each row
            for (int j = 0; j < cars[i].length; j++) {
                System.out.print(cars[i][j] + " "); // Print the value at row i, column j
            }
        }
    }
}
```
---
# 17. [STRING METHODS]

In this section, we will explore some useful methods available for Strings in Java. Strings are reference data types that can store one or more characters and have access to various helpful methods.

```java
public class Main {
    public static void main(String[] args) {
        // String = a reference data type that can store one or more characters
        //   reference data types have access to useful methods

        String name = "Bro";

        // Uncomment any of the following lines to test different String methods
        
        // boolean result = name.equalsIgnoreCase("bro"); // Check if names are equal (case-insensitive)
        int result = name.length(); // Get the length of the string
        // char result = name.charAt(0); // Get the character at index 0
        // int result = name.indexOf("o"); // Find the index of character 'o'
        // boolean result = name.isEmpty(); // Check if the string is empty
        // String result = name.toUpperCase(); // Convert the string to uppercase
        // String result = name.toLowerCase(); // Convert the string to lowercase
        // String result = name.trim(); // Remove whitespace from both ends
        // String result = name.replace('o', 'a'); // Replace 'o' with 'a'

        System.out.println(result); // Print the result
    }
}
```
---
# 18. [WRAPPER CLASSES]

In this section, we will discuss wrapper classes in Java. Wrapper classes provide a way to use primitive data types as reference data types, allowing you to take advantage of the useful methods they contain. They can also be used with collections, such as `ArrayList`.

Primitive Types vs. Wrapper Classes

| Primitive Type | Wrapper Class |
|----------------|---------------|
| boolean        | Boolean       |
| char           | Character     |
| int            | Integer       |
| double         | Double        |

Autoboxing and Unboxing

- **Autoboxing**: The automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes.
- **Unboxing**: The reverse of autoboxing; it is the automatic conversion of a wrapper class to a primitive type.

Example Code

```java
public class Main {
    Boolean a = true;          // Wrapper for boolean
    Character b = '@';         // Wrapper for char
    Integer c = 123;           // Wrapper for int
    Double d = 3.14;           // Wrapper for double
    String e = "Bro";          // String type

    // Wrapper class methods
    // a.booleanValue();        // Convert Boolean to boolean
    // b.charValue();           // Convert Character to char
    // c.intValue();            // Convert Integer to int
    // d.doubleValue();         // Convert Double to double
    // e.length();              // Get the length of the string
}
```

---
# 19. [ARRAYLIST]

In this section, we will explore the `ArrayList` class in Java, which provides a resizable array implementation.

Key Features of ArrayList

- **Resizable Array**: Unlike standard arrays, an `ArrayList` can grow and shrink dynamically.
- **Element Manipulation**: You can add, remove, and modify elements even after the compilation phase.
- **Storage of Reference Data Types**: `ArrayList` can only store reference data types (e.g., objects), not primitive types directly. However, Java performs autoboxing to convert primitive types to their corresponding wrapper classes.

Example Code

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        // Create an ArrayList to store food items
        ArrayList<String> food = new ArrayList<String>();

        // Adding elements to the ArrayList
        food.add("pizza");
        food.add("hamburger");
        food.add("hotdog");

        // Modifying elements
        food.set(0, "sushi"); // Change "pizza" to "sushi"
        food.remove(2);       // Remove "hotdog"
        food.clear();         // Clear all elements from the ArrayList

        // Print elements in the ArrayList
        for (int i = 0; i < food.size(); i++) {
            System.out.println(food.get(i));
        }
    }
}
```

---
# 20. [2D_ARRAYLIST]

In this section, we will explore the concept of a 2D `ArrayList`, which is a dynamic list of lists in Java.

Key Features of 2D ArrayList

- **Dynamic Sizing**: Unlike traditional 2D arrays, the size of each list in a 2D `ArrayList` can change during runtime.
- **Nested Lists**: Each element of the outer `ArrayList` can itself be an `ArrayList`, allowing for a flexible structure.

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        // Create a 2D ArrayList to store grocery lists
        ArrayList<ArrayList<String>> groceryList = new ArrayList<>();

        // Create a list for bakery items
        ArrayList<String> bakeryList = new ArrayList<>();
        bakeryList.add("pasta");
        bakeryList.add("garlic bread");
        bakeryList.add("donuts");

        // Create a list for produce items
        ArrayList<String> produceList = new ArrayList<>();
        produceList.add("tomatoes");
        produceList.add("zucchini");
        produceList.add("peppers");

        // Create a list for drinks
        ArrayList<String> drinksList = new ArrayList<>();
        drinksList.add("soda");
        drinksList.add("coffee");

        // Add each list to the grocery list
        groceryList.add(bakeryList);
        groceryList.add(produceList);
        groceryList.add(drinksList);

        // Access and print a specific item (e.g., "peppers" from produceList)
        System.out.println(groceryList.get(1).get(2)); // Output: peppers
    }
}
```
---
# 21. [FOREACH_LOOP]

In this section, we will discuss the **for-each loop**, a simple and efficient way to iterate through elements in an array or collection.

Key Features of the For-Each Loop

- **Simplified Syntax**: The for-each loop provides a more concise and readable syntax compared to traditional for loops.
- **Readability**: It enhances code readability by abstracting the iterator or index management.
- **Less Flexibility**: The for-each loop does not allow modification of the collection while iterating.

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // for-each loop = traversing technique to iterate through elements in an array/collection

        // Create an ArrayList of animals
        ArrayList<String> animals = new ArrayList<>();

        animals.add("cat");
        animals.add("dog");
        animals.add("rat");
        animals.add("bird");

        // Use a for-each loop to iterate through the list of animals
        for (String i : animals) {
            System.out.println(i);
        }
    }
}
```
---

Here’s your section on **Methods** in Java, formatted as per your preferences:

# 22. [METHODS]

In this section, we will discuss **methods**, which are blocks of code designed to perform specific tasks and can be called upon whenever needed.

Key Features of Methods

- **Reusability**: Methods allow you to reuse code, making your program more organized and efficient.
- **Parameters**: Methods can accept inputs (parameters) that can be used within the method.
- **Return Values**: Methods can return values after execution, which can be used in other parts of your program.

```java
public class Main {

    public static void main(String[] args) {
        // method = a block of code that is executed whenever it is called upon

        int x = 3;
        int y = 4;

        // Call the add method and store the result in z
        int z = add(x, y);

        // Print the result
        System.out.println(z);
    }

    // Method to add two integers
    static int add(int x, int y) {
        int z = x + y; // Calculate the sum
        return z; // Return the result
    }
}
```

---
# 23. [OVERLOADED METHODS]

This section covers **overloaded methods**, which allow you to define multiple methods with the same name but different parameters.

Key Features of Overloaded Methods

- **Same Name**: Overloaded methods share the same method name.
- **Different Parameters**: They must differ in the type, number, or order of parameters, known as the method signature.
- **Enhanced Readability**: Overloading allows for better readability and organization of code, enabling similar operations to be performed using the same method name.

```java
public class Main {

    public static void main(String[] args) {
        // overloaded methods = methods that share the same name but have different parameters
        //                     method name + parameters = method signature

        // Call the overloaded method and store the result in x
        double x = add(1.0, 2.0, 3.0, 4.0);

        // Print the result
        System.out.println(x);
    }

    // Overloaded methods for addition
    static int add(int a, int b) {
        System.out.println("This is overloaded method #1");
        return a + b;
    }

    static int add(int a, int b, int c) {
        System.out.println("This is overloaded method #2");
        return a + b + c;
    }

    static int add(int a, int b, int c, int d) {
        System.out.println("This is overloaded method #3");
        return a + b + c + d;
    }

    static double add(double a, double b) {
        System.out.println("This is overloaded method #4");
        return a + b;
    }

    static double add(double a, double b, double c) {
        System.out.println("This is overloaded method #5");
        return a + b + c;
    }

    static double add(double a, double b, double c, double d) {
        System.out.println("This is overloaded method #6");
        return a + b + c + d;
    }
}
```
---
Here's your section on **printf** in Java, formatted to align with your preferred style:

# 24. [PRINTF]

The `printf()` method in Java provides a powerful way to control, format, and display text in the console.

Key Features of `printf()`

- **Format String**: The first argument is a format string that specifies how to format the output.
- **Arguments**: The subsequent arguments are the objects, variables, or values that will be formatted and displayed.
- **Format Specifiers**: A format specifier includes:
  - **%**: The starting character for format specifiers.
  - **[flags]**: Optional modifiers for formatting (e.g., left-justify, zero-padding).
  - **[precision]**: Controls the number of digits after the decimal for floating-point numbers.
  - **[width]**: Specifies the minimum number of characters to output.

```java
public class Main {

    public static void main(String[] args) {
        // printf() = an optional method to control, format, and display text to the console window
        //             two arguments = format string + (object/variable/value)
        //             % [flags] [precision] [width] [conversion-character]

        // Variables to demonstrate printf()
        boolean myBoolean = true;
        char myChar = '@';
        String myString = "Bro";
        int myInt = 50;
        double myDouble = 1000;

        // [conversion-character]
        // System.out.printf("%b", myBoolean); // prints boolean
        // System.out.printf("%c", myChar); // prints char
        // System.out.printf("%s", myString); // prints string
        // System.out.printf("%d", myInt); // prints integer
        // System.out.printf("%f", myDouble); // prints floating-point number

        // [width]
        // System.out.printf("Hello %10s", myString); // right-justified

        // [precision]
        // System.out.printf("You have this much money %.1f", myDouble); // one decimal place

        // [flags]
        // - : left-justify
        // + : output a plus (+) or minus (-) sign for numeric values
        // 0 : zero-pad numeric values
        // , : comma grouping separator for numbers > 1000

        // System.out.printf("You have this much money %,f", myDouble); // comma formatting
    }
}
```

---
# 25. [FINAL KEYWORD]

The `final` keyword in Java is used to declare constants or prevent method overriding and inheritance.

Key Features of `final`

- **Final Variables**: When a variable is declared as `final`, its value cannot be changed once it is initialized. This is similar to `const` in C++.
- **Final Methods**: A method declared as `final` cannot be overridden by subclasses.
- **Final Classes**: A class declared as `final` cannot be subclassed.

```java
public class Main {

    public static void main(String[] args) {
        // Declaring a final variable
        final double PI = 3.14159;

        // PI = 4;  // You can't change a final variable
        // This line will cause a compilation error

        System.out.println(PI); // Outputs: 3.14159
    }
}
```
---
Here's your section on **Object-Oriented Programming (OOP)** in Java, formatted to match your preferred style:

# 26. [OOP]

Object-Oriented Programming (OOP) is a programming paradigm that uses objects to represent data and methods. It promotes greater flexibility and reusability in code.

Key Concepts of OOP

- **Class**: A blueprint for creating objects, defining properties (attributes) and behaviors (methods).
- **Object**: An instance of a class. It contains state (attributes) and behavior (methods).
- **Encapsulation**: The bundling of data and methods that operate on that data within a single unit (class).
- **Inheritance**: A mechanism to create a new class based on an existing class, inheriting attributes and methods.
- **Polymorphism**: The ability for different classes to be treated as instances of the same class through a common interface.

```java
// Class definition
public class Car {

    // Attributes (fields)
    String make = "Chevrolet";
    String model = "Corvette";
    int year = 2020;
    String color = "blue";
    double price = 50000.00;

    // Methods
    void drive() {
        System.out.println("You drive the car");
    }

    void brake() {
        System.out.println("You step on the brakes");
    }
}

// Main class
public class Main {

    public static void main(String[] args) {
        // Creating objects
        Car myCar1 = new Car();
        Car myCar2 = new Car();

        // Accessing object attributes
        System.out.println(myCar1.make);  // Outputs: Chevrolet
        System.out.println(myCar1.model); // Outputs: Corvette

        // Calling methods
        myCar1.drive(); // Outputs: You drive the car
        myCar1.brake(); // Outputs: You step on the brakes
    }
}
```
---
# 27. [CONSTRUCTORS]

Constructors are special methods used to initialize objects. They have the same name as the class and do not have a return type. Constructors can be overloaded to create objects in different ways.

Key Points

- **Default Constructor**: A constructor that does not take any arguments and initializes fields with default values.
- **Parameterized Constructor**: A constructor that takes parameters to initialize fields with specific values.
- **`this` Keyword**: Used to refer to the current object's attributes.

```java
// Class definition
public class Human {

    // Attributes
    String name;
    int age;
    double weight;

    // Parameterized constructor
    Human(String name, int age, double weight) {
        this.name = name;  // Assigning parameter to the object's attribute
        this.age = age;
        this.weight = weight;
    }

    // Methods
    void eat() {
        System.out.println(this.name + " is eating");
    }

    void drink() {
        System.out.println(this.name + " is drinking *burp*");
    }
}

// Main class
public class Main {

    public static void main(String[] args) {
        // Creating objects using the parameterized constructor
        Human human1 = new Human("Rick", 65, 70);
        Human human2 = new Human("Morty", 16, 50);

        // Calling methods
        human1.drink(); // Outputs: Rick is drinking *burp*
        human2.eat();   // Outputs: Morty is eating
    }
}
```
---

# 28. [VARIABLE SCOPE]

Variable scope determines where a variable is accessible within the code. In Java, there are two main types of scope: **local** and **global** (or class-level).

Key Points

- **Local Variables**: 
  - Declared inside a method.
  - Only accessible within that method.
  
- **Global Variables** (or Instance Variables): 
  - Declared outside methods but within a class.
  - Accessible to all methods within the class.

```java
import java.util.Random;

// DiceRoller class to handle dice rolling
public class DiceRoller {

    // Global (instance) variables
    Random random;
    int number;

    // Constructor
    DiceRoller() {
        random = new Random();
        roll(); // Calls the roll method to generate a number
    }

    // Method to roll the dice
    void roll() {
        // Local variable for the rolled number
        number = random.nextInt(6) + 1; // Generates a random number between 1 and 6
        System.out.println(number); // Prints the rolled number
    }
}

// Main class to execute the program
public class Main {

    public static void main(String[] args) {
        // Local variable explanation
        // Local = declared inside a method and visible only to that method
        // Global = declared outside a method, but within a class and visible to all parts of the class

        DiceRoller diceRoller = new DiceRoller(); // Creates a new instance of DiceRoller
    }
}
```
---
# 29. [OVERLOADED CONSTRUCTORS]

Overloaded constructors allow a class to have multiple constructors with different parameter lists. This enables the creation of objects in various ways, depending on the arguments provided.

Key Points

- **Constructors**: Special methods that are called when an object is instantiated.
- **Overloading**: The ability to define multiple constructors with the same name but different parameters.

```java
// Main class to demonstrate the usage of overloaded constructors
public class Main {

    public static void main(String[] args) {
        // Creating a Pizza object using the overloaded constructor
        Pizza pizza = new Pizza("thicc crust", "tomato", "mozzerella", "pepperoni");

        // Displaying the ingredients of the pizza
        System.out.println("Here are the ingredients of your pizza: ");
        System.out.println(pizza.bread);
        System.out.println(pizza.sauce);
        System.out.println(pizza.cheese);
        System.out.println(pizza.topping);
    }
}

// Pizza class with overloaded constructors
public class Pizza {

    // Instance variables for pizza ingredients
    String bread;
    String sauce;
    String cheese;
    String topping;

    // Default constructor
    Pizza() {}

    // Overloaded constructor with one parameter
    Pizza(String bread) {
        this.bread = bread;
    }

    // Overloaded constructor with two parameters
    Pizza(String bread, String sauce) {
        this.bread = bread;
        this.sauce = sauce;
    }

    // Overloaded constructor with three parameters
    Pizza(String bread, String sauce, String cheese) {
        this.bread = bread;
        this.sauce = sauce;
        this.cheese = cheese;
    }

    // Overloaded constructor with four parameters
    Pizza(String bread, String sauce, String cheese, String topping) {
        this.bread = bread;
        this.sauce = sauce;
        this.cheese = cheese;
        this.topping = topping;
    }
}
```
---
# 30. [TOSTRING METHODS]

The `toString` method in Java is a special method that provides a string representation of an object. It is inherited by all objects and can be overridden to customize the output.

Key Points

- **Purpose**: To return a string that "textually represents" an object.
- **Usage**: Can be called explicitly using `toString()` or implicitly by just printing the object.

```java
// Car class with overridden toString method
public class Car {
    // Instance variables for the car attributes
    String make = "Ford";
    String model = "Mustang";
    String color = "red";
    int year = 2021;

    // Overriding the toString method to return a custom string representation
    @Override
    public String toString() {
        return make + "\n" + model + "\n" + color + "\n" + year;
    }
}
```

```java
// Main class to demonstrate the usage of toString method
public class Main {
    public static void main(String[] args) {
        // Creating a Car object
        Car car = new Car();

        // Printing the car object using toString method
        System.out.println(car.toString());

        // Printing the car object implicitly
        System.out.println(car);
    }
}
```

---
# 31. [ARRAY OF OBJECTS]

In Java, you can create an array of objects to store multiple instances of a class. This allows you to manage collections of objects conveniently.

Key Points

- **Array Declaration**: An array of objects can be created using the class type.
- **Initialization**: Objects can be instantiated and assigned to the array.

```java
// Main class to demonstrate array of objects
public class Main {
    public static void main(String[] args) {
        // Creating individual Food objects
        Food food1 = new Food("pizza");
        Food food2 = new Food("hamburger");
        Food food3 = new Food("hotdog");

        // Initializing an array of Food objects
        Food[] refrigerator = {food1, food2, food3};

        // Accessing the names of the food items in the array
        System.out.println(refrigerator[0].name); // Output: pizza
        System.out.println(refrigerator[1].name); // Output: hamburger
        System.out.println(refrigerator[2].name); // Output: hotdog
    }
}
```

```java
// Food class with a constructor
public class Food {
    // Instance variable for the food name
    String name;

    // Constructor to initialize the name
    Food(String name) {
        this.name = name;
    }
}
```

---
# 32. [OBJECT PASSING]

In Java, objects can be passed as arguments to methods, allowing you to manipulate the object's state or behavior within those methods.

Key Points

- **Object Reference**: When an object is passed to a method, a reference to that object is sent, not the actual object itself.
- **Method Parameter**: The method can then use this reference to access the object's properties and methods.

```java
// Main class to demonstrate object passing
public class Main {
    public static void main(String[] args) {
        // Creating a Garage object
        Garage garage = new Garage();

        // Creating Car objects
        Car car1 = new Car("BMW");
        Car car2 = new Car("Tesla");

        // Parking cars in the garage
        garage.park(car1); // Output: The BMW is parked in the garage
        garage.park(car2); // Output: The Tesla is parked in the garage
    }
}
```

```java
// Garage class with a method to park a car
public class Garage {
    // Method to park a car
    void park(Car car) {
        System.out.println("The " + car.name + " is parked in the garage");
    }
}
```

```java
// Car class with a constructor
public class Car {
    // Instance variable for the car name
    String name;

    // Constructor to initialize the name
    Car(String name) {
        this.name = name;
    }
}
```

---
Here's your section on **Static Keyword** in Java, formatted according to your specifications:

# 33. [STATIC KEYWORD]

The `static` keyword in Java is used to indicate that a particular variable or method belongs to the class itself rather than instances of the class. This means that a single copy of the static variable or method is shared among all instances of the class.

Key Points

- **Class Ownership**: Static members are owned by the class, not by any particular instance.
- **Shared Data**: Static variables maintain their values across all instances of the class.

```java
// Main class to demonstrate static keyword
public class Main {
    public static void main(String[] args) {
        // Creating Friend objects
        Friend friend1 = new Friend("SpongeBob");
        Friend friend2 = new Friend("Patrick");
        Friend friend3 = new Friend("Patrick"); // Same name as friend2

        // Accessing the static variable
        System.out.println(Friend.numberOfFriends); // Output: 3
    }
}
```

```java
// Friend class with a static variable
public class Friend {
    String name; // Instance variable
    static int numberOfFriends; // Static variable

    // Constructor to initialize name and increment the number of friends
    Friend(String name) {
        this.name = name;
        numberOfFriends++; // Increment static variable
    }
}
```

---
# 34. [INHERITANCE]

Inheritance is a fundamental concept in object-oriented programming that allows one class (the subclass) to inherit the attributes and methods of another class (the superclass). This promotes code reuse and establishes a natural hierarchy between classes.

Key Points

- **Class Hierarchy**: Inheritance establishes a parent-child relationship between classes.
- **Code Reusability**: Subclasses can use methods and fields from the superclass, reducing redundancy.


```java
// Main class to demonstrate inheritance
public class Main {
    public static void main(String[] args) {
        // Creating a Car object
        Car car = new Car();
        car.go(); // Calls the inherited method from Vehicle

        // Creating a Bicycle object
        Bicycle bike = new Bicycle();
        car.go(); // Calls the inherited method from Vehicle
        bike.stop(); // Calls the inherited method from Vehicle

        // Accessing attributes from Car and Bicycle
        System.out.println(car.doors); // Output: 4
        System.out.println(bike.pedals); // Output: 2
    }
}
```

```java
// Car class inheriting from Vehicle
public class Car extends Vehicle {
    int wheels = 4; // Car-specific attribute
    int doors = 4; // Car-specific attribute
}
```

```java
// Bicycle class inheriting from Vehicle
public class Bicycle extends Vehicle {
    int wheels = 2; // Bicycle-specific attribute
    int pedals = 2; // Bicycle-specific attribute
}
```

```java
// Vehicle class, the superclass
public class Vehicle {
    double speed; // Common attribute

    // Method to move the vehicle
    void go() {
        System.out.println("This vehicle is moving");
    }

    // Method to stop the vehicle
    void stop() {
        System.out.println("This vehicle is stopped");
    }
}
```
---
# 35. [METHOD OVERRIDING]

Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass. This enables polymorphic behavior, allowing the subclass to specify its own version of a method.

Key Points

- **Inheritance Requirement**: Overriding occurs in the context of inheritance, where a subclass has the same method signature as a method in its superclass.
- **Using `@Override` Annotation**: This annotation is used to indicate that a method is overriding a method in the superclass.

```java
// Main class to demonstrate method overriding
public class Main {
    public static void main(String[] args) {
        // Creating instances of Animal and Dog
        Animal animal = new Animal();
        Dog dog = new Dog();

        // Calling the speak method
        dog.speak(); // Output: The dog goes *bark*
    }
}
```

```java
// Dog class overriding the speak method from Animal
public class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("The dog goes *bark*");
    }
}
```

```java
// Animal class with a speak method
public class Animal {
    void speak() {
        System.out.println("The animal speaks");
    }
}
```
---
Here’s your section on **Super Keyword** in Java, formatted as per your preferences:

# 36. [SUPER KEYWORD]

The `super` keyword in Java is used to refer to the superclass (parent class) of the current object. It is often used to access superclass methods and constructors, enabling better code organization and reuse.

Key Points

- **Accessing Superclass Methods**: You can use `super.methodName()` to call a method defined in the superclass.
- **Accessing Superclass Constructor**: You can use `super(parameters)` to call a constructor of the superclass.

```java
// Main class to demonstrate the super keyword
public class Main {
    public static void main(String[] args) {
        // Creating instances of Hero
        Hero hero1 = new Hero("Batman", 42, "$$$");
        Hero hero2 = new Hero("Superman", 43, "everything");

        // Outputting hero2's details
        System.out.println(hero2.toString());
    }
}
```

```java
// Hero class extending Person
public class Hero extends Person {
    String power;

    Hero(String name, int age, String power) {
        super(name, age); // Calling the superclass constructor
        this.power = power;
    }

    public String toString() {
        return super.toString() + this.power; // Using super to call Person's toString
    }
}
```

```java
// Person class
public class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return this.name + "\n" + this.age + "\n";
    }
}
```

---
# 37. [ABSTRACTION]

Abstraction in Java is the concept of hiding the complex implementation details and showing only the essential features of the object. It allows you to create a clear separation between what an object does and how it does it.

Key Points

- **Abstract Classes**: Cannot be instantiated directly. They can contain abstract methods (methods without an implementation) as well as concrete methods.
- **Abstract Methods**: Must be implemented by subclasses, providing a way to enforce a contract for the subclasses.

```java
// Main class to demonstrate abstraction
public class Main {
    public static void main(String[] args) {
        // Vehicle vehicle = new Vehicle(); // This line would cause a compilation error
        Car car = new Car(); // Instantiating a subclass

        car.go(); // Calling the implemented method
    }
}
```

```java
// Car class extending the abstract Vehicle class
public class Car extends Vehicle {
    @Override
    void go() {
        System.out.println("The driver is driving the car");
    }
}
```

```java
// Abstract Vehicle class
public abstract class Vehicle {
    abstract void go(); // Abstract method without implementation
}
```

---
# 38. [ACCESS MODIFIERS]

Access modifiers in Java are keywords that determine the visibility of classes, methods, and variables. They control the accessibility of these elements in different contexts.

Types of Access Modifiers

- **public**: Visible to all classes in all packages.
- **protected**: Visible to all classes in the same package or to subclasses in other packages.
- **default** (no modifier): Visible only to classes within the same package.
- **private**: Visible only within the same class.

```java
public class Main {
    public static void main(String[] args) {
        // Access modifiers:
        // public: visible in all classes in all packages
        // protected: visible to all classes in the same package or classes in other packages that are a subclass
        // default: visible to all classes in the same package
        // private: visible only in the same class
    }
}
```
---
# 39. [ENCAPSULATION]

Encapsulation is an object-oriented programming principle that restricts direct access to some of an object's components, which can prevent the accidental modification of data. This is typically achieved by making class attributes private and providing public methods (getters and setters) to access and modify them.

```java
public class Main {

    public static void main(String[] args) {

        // Encapsulation = 	attributes of a class will be hidden or private,
        //					can be accessed only through methods (getters & setters).
        //					You should make attributes private if you don't have a reason to make them public/protected.

        Car car = new Car("Chevrolet", "Camaro", 2021);

        car.setYear(2022); // Setting the year using the setter method

        System.out.println(car.getMake());  // Accessing the make using the getter method
        System.out.println(car.getModel()); // Accessing the model using the getter method
        System.out.println(car.getYear());  // Accessing the year using the getter method
    }
}

public class Car {

    // Private attributes
    private String make;
    private String model;
    private int year;

    // Constructor to initialize the Car object
    Car(String make, String model, int year) {
        this.setMake(make);
        this.setModel(model);
        this.setYear(year);
    }

    // Getter for make
    public String getMake() {
        return this.make;
    }

    // Getter for model
    public String getModel() {
        return this.model;
    }

    // Getter for year
    public int getYear() {
        return this.year;
    }

    // Setter for make
    public void setMake(String make) {
        this.make = make;
    }

    // Setter for model
    public void setModel(String model) {
        this.model = model;
    }

    // Setter for year
    public void setYear(int year) {
        this.year = year;
    }
}
```

Explanation
- **Private Attributes:** The `make`, `model`, and `year` attributes are private, which means they cannot be accessed directly from outside the `Car` class.
- **Getters and Setters:** Public methods (`getMake()`, `getModel()`, `getYear()`, `setMake()`, `setModel()`, `setYear()`) provide controlled access to these private attributes, allowing safe modification and retrieval of the values.
---
# 40. [COPY OBJECTS]

In Java, you can create a copy of an object by defining a copy constructor or a method that duplicates the values of the original object's attributes. This approach ensures that the new object has the same state as the original.

```java
public class Main {

    public static void main(String[] args) {

        Car car1 = new Car("Chevrolet", "Camaro", 2021);
        Car car2 = new Car(car1); // Copying car1 to car2 using the copy constructor

        System.out.println(car1); // Display the original car
        System.out.println(car2); // Display the copied car
        System.out.println();
        
        // Accessing attributes of car1
        System.out.println(car1.getMake());
        System.out.println(car1.getModel());
        System.out.println(car1.getYear());
        System.out.println();
        
        // Accessing attributes of car2
        System.out.println(car2.getMake());
        System.out.println(car2.getModel());
        System.out.println(car2.getYear());
    }
}

public class Car {

    private String make;
    private String model;
    private int year;

    // Constructor to initialize the Car object
    Car(String make, String model, int year) {
        this.setMake(make);
        this.setModel(model);
        this.setYear(year);
    }

    // Copy constructor
    Car(Car x) {
        this.copy(x); // Using the copy method to duplicate the object's state
    }

    // Getters
    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    // Setters
    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setYear(int year) {
        this.year = year;
    }

    // Method to copy attributes from another Car object
    public void copy(Car x) {
        this.setMake(x.getMake());
        this.setModel(x.getModel());
        this.setYear(x.getYear());
    }

    // Overriding toString() method to display car details
    @Override
    public String toString() {
        return "Car{" +
                "make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                '}';
    }
}
```

Explanation
- **Copy Constructor:** The `Car(Car x)` constructor allows for creating a new `Car` object that is a copy of an existing one. It uses the `copy()` method to transfer the attributes.
- **Copy Method:** The `copy(Car x)` method takes another `Car` object as a parameter and copies its attributes to the current object.
- **Output:** The `toString()` method is overridden to provide a string representation of the `Car` object, making it easier to display the object's state.
---

# 41. [INTERFACES]

In Java, interfaces are used to define a contract for classes that implement them. An interface can contain method signatures without implementations. Classes can implement multiple interfaces, allowing for more flexible and modular code.

```java
public class Main {

    public static void main(String[] args) {

        Fish fish = new Fish();

        fish.hunt(); // The fish is hunting
        fish.flee(); // The fish is fleeing
    }
}

public class Fish implements Prey, Predator {
    @Override
    public void hunt() {
        System.out.println("*The fish is hunting*");
    }
    
    @Override
    public void flee() {
        System.out.println("*The fish is fleeing*");
    }
}

public class Hawk implements Predator {
    @Override
    public void hunt() {
        System.out.println("*The hawk is hunting*");
    }
}

public interface Predator {
    void hunt(); // Method to be implemented by predator classes
}

public interface Prey {
    void flee(); // Method to be implemented by prey classes
}

public class Rabbit implements Prey {
    @Override
    public void flee() {
        System.out.println("*The rabbit is fleeing*");
    }
}
```

Explanation
- **Interfaces:** `Predator` and `Prey` are interfaces that declare methods without implementations. Classes that implement these interfaces must provide their own implementations of the declared methods.
- **Multiple Inheritance:** The `Fish` class implements both `Prey` and `Predator`, demonstrating that a class can implement multiple interfaces.
- **Implementations:** The `Hawk` and `Rabbit` classes implement the `Predator` and `Prey` interfaces, respectively, providing their own specific implementations of the `hunt()` and `flee()` methods.
---