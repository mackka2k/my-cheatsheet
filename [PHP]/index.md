
---[PHP]---
---
# 1. [BASICS]  
**PHP Output and Comments**

```php
<?php
echo "Hello, World!<br>";
echo "Welcome to PHP programming!<br>";

// This is a single-line comment
/* This is a multi-line comment */
?>
```

---

# 2. [VARIABLES & DATA TYPES]  
**Defining Variables and Data Types in PHP**

```php
<?php
$name = "John Doe";  // String
$age = 30;           // Integer
$gpa = 3.9;          // Float
$isStudent = true;   // Boolean

echo "Name: $name, Age: $age, GPA: $gpa<br>";
echo "Is student? " . ($isStudent ? 'Yes' : 'No') . "<br>";
?>
```

---

# 3. [ARITHMETIC]  
**PHP Arithmetic Operations**

```php
<?php
$num1 = 10;
$num2 = 5;

$sum = $num1 + $num2;
$diff = $num1 - $num2;
$prod = $num1 * $num2;
$quot = $num1 / $num2;
$mod = $num1 % $num2;

echo "Sum: $sum<br>";
echo "Difference: $diff<br>";
echo "Product: $prod<br>";
echo "Quotient: $quot<br>";
echo "Modulus: $mod<br>";
?>
```

---

# 4. [$_GET & $_POST]  
**Handling Form Data with PHP**

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Handling</title>
</head>
<body>
    <form action="index.php" method="POST">
        <input type="text" name="username" placeholder="Enter Username">
        <input type="password" name="password" placeholder="Enter Password">
        <button type="submit">Submit</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        $password = $_POST['password'];

        echo "Username: $username<br>";
        echo "Password: $password<br>";
    }
    ?>
</body>
</html>
```

---

# 5. [MATH FUNCTIONS]  
**Using Math Functions in PHP**

```php
<?php
$num = -5;
$sqrtNum = sqrt(25);
$randNum = rand(1, 100);
$rounded = round(5.678, 2);

echo "Absolute: " . abs($num) . "<br>";
echo "Square Root: $sqrtNum<br>";
echo "Random Number: $randNum<br>";
echo "Rounded: $rounded<br>";
?>
```

---

# 6. [IF STATEMENTS]  
**Conditional Statements in PHP**

```php
<?php
$age = 18;

if ($age >= 18) {
    echo "You are eligible to vote.<br>";
} else {
    echo "You are not eligible to vote.<br>";
}
?>
```

---

# 7. [LOGICAL OPERATORS]  
**Using Logical Operators in PHP**

```php
<?php
$temperature = 25;
$isSunny = true;

if ($temperature > 20 && $isSunny) {
    echo "It's a nice day!<br>";
} elseif ($temperature > 20 || $isSunny) {
    echo "At least it's warm or sunny.<br>";
} else {
    echo "Not a good day.<br>";
}
?>
```

---

# 8. [SWITCHES]  
**Switch Case in PHP**

```php
<?php
$day = "Monday";

switch ($day) {
    case "Monday":
        echo "Start of the work week!<br>";
        break;
    case "Friday":
        echo "Weekend is near!<br>";
        break;
    default:
        echo "It's just another day.<br>";
        break;
}
?>
```

---

# 9. [FOR LOOPS]  
**For Loop in PHP**

```php
<?php
for ($i = 0; $i < 5; $i++) {
    echo "Iteration: $i<br>";
}
?>
```

---

# 10. [WHILE LOOPS]  
**While Loop in PHP**

```php
<?php
$i = 0;

while ($i < 5) {
    echo "Counter: $i<br>";
    $i++;
}
?>
```

---

# 11. [ARRAYS]  
**Arrays in PHP**

```php
<?php
$colors = array("Red", "Green", "Blue");

foreach ($colors as $color) {
    echo "Color: $color<br>";
}
?>
```

---

# 12. [ISSET & EMPTY]  
**Checking Variables with isset() and empty()**

```php
<?php
$var = "";

if (isset($var)) {
    echo "Variable is set.<br>";
}

if (empty($var)) {
    echo "Variable is empty.<br>";
}
?>
```

---

# 13. [RADIO BUTTONS]  
**Handling Radio Buttons in PHP**

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Radio Buttons</title>
</head>
<body>
    <form action="index.php" method="POST">
        <input type="radio" name="gender" value="Male"> Male
        <input type="radio" name="gender" value="Female"> Female
        <button type="submit">Submit</button>
    </form>

    <?php
    if (isset($_POST['gender'])) {
        $gender = $_POST['gender'];
        echo "Selected Gender: $gender<br>";
    }
    ?>
</body>
</html>
```

---

# 14. [CHECKBOXES]  
**Handling Checkboxes in PHP**

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Checkbox Example</title>
</head>
<body>
    <form action="index.php" method="POST">
        <input type="checkbox" name="subscribe" value="Yes"> Subscribe to newsletter
        <button type="submit">Submit</button>
    </form>

    <?php
    if (isset($_POST['subscribe'])) {
        echo "You are subscribed!<br>";
    }
    ?>
</body>
</html>
```

---

# 15. [FUNCTIONS]  
**Creating Functions in PHP**

```php
<?php
function greet($name) {
    echo "Hello, $name!<br>";
}

greet("Alice");
greet("Bob");
?>
```

---

# 16. [STRING FUNCTIONS]  
**String Manipulation in PHP**

```php
<?php
$string = "Hello World!";
echo "Length: " . strlen($string) . "<br>";
echo "Uppercase: " . strtoupper($string) . "<br>";
echo "Lowercase: " . strtolower($string) . "<br>";
?>
```

---

# 17. [SANITIZE-VALIDATE INPUT]  
**Sanitizing and Validating Form Inputs in PHP**

```php
<?php
$email = "test@example.com";

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Valid email.<br>";
} else {
    echo "Invalid email.<br>";
}
?>
```

---

# 18. [INCLUDE]  
**Including Files in PHP**

```php
<?php
include 'header.php';
echo "This is the main content.<br>";
include 'footer.php';
?>
```

---

# 19. [_COOKIE]  
**Working with Cookies in PHP**

```php
<?php
setcookie("user", "John Doe", time() + (86400 * 30), "/");

if (isset($_COOKIE['user'])) {
    echo "User: " . $_COOKIE['user'] . "<br>";
} else {
    echo "Cookie not set.<br>";
}
?>
```

---

# 20. [_SESSION]  
**Sessions in PHP**

```php
<?php
session_start();
$_SESSION['username'] = "JohnDoe";

if (isset($_SESSION['username'])) {
    echo "Username: " . $_SESSION['username'] . "<br>";
} else {
    echo "No session set.<br>";
}
?>
```

---

# 21. [_SERVER]  
**Superglobal $_SERVER in PHP**

```php
<?php
echo "Server Name: " . $_SERVER['SERVER_NAME'] . "<br>";
echo "Script Filename: " . $_SERVER['SCRIPT_FILENAME'] . "<br>";
?>
```

---

# 22. [PASSWORD HASHING]  
**Password Hashing in PHP**

```php
<?php
$password = "mypassword";
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

echo "Hashed Password: $hashedPassword<br>";

if (password_verify($password, $hashedPassword)) {
    echo "Password is valid.<br>";
} else {
    echo "Invalid password.<br>";
}
?>
```

---

# 23. [PHP CONNECT TO MYSQL]  
**Connecting to MySQL Database in PHP**

```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->

connect_error);
}

echo "Connected successfully!";
$conn->close();
?>
```

---

# 24. [CREATE DATABASE AND TABLE]  
**Creating Database and Table in PHP**

```php
<?php
$conn = new mysqli("localhost", "root", "", "");

$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
```

---

# 25. [INSERT DATA INTO DATABASE]  
**Inserting Data into MySQL in PHP**

```php
<?php
$conn = new mysqli("localhost", "root", "", "myDB");

$sql = "INSERT INTO Users (username, email) VALUES ('john', 'john@example.com')";
if ($conn->query($sql) === TRUE) {
    echo "Record inserted successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
```

---

# 26. [RETRIEVE DATA FROM DATABASE]  
**Retrieving Data from MySQL in PHP**

```php
<?php
$conn = new mysqli("localhost", "root", "", "myDB");

$sql = "SELECT id, username, email FROM Users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["username"] . " - Email: " . $row["email"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
```

---

# 27. [UPDATE DATA IN DATABASE]  
**Updating Data in MySQL in PHP**

```php
<?php
$conn = new mysqli("localhost", "root", "", "myDB");

$sql = "UPDATE Users SET email='newemail@example.com' WHERE username='john'";
if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
```

---

# 28. [DELETE DATA FROM DATABASE]  
**Deleting Data from MySQL in PHP**

```php
<?php
$conn = new mysqli("localhost", "root", "", "myDB");

$sql = "DELETE FROM Users WHERE username='john'";
if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
```

---
# 29. [OOP BASICS]  
**OOP in PHP allows for creating classes, objects, and methods, enhancing code modularity and reusability.**

```php
<?php
class Person {
    // Properties
    public $name;
    public $age;

    // Constructor
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    // Methods
    public function introduce() {
        echo "Hi, I am $this->name and I am $this->age years old.<br>";
    }
}

$person1 = new Person("John", 30);
$person1->introduce();
?>

```
---
# 30. [CLASSES & OBJECTS] 
**Classes are blueprints, and objects are instances of those classes.**

```php
<?php
class Car {
    public $brand;
    public $color;

    public function __construct($brand, $color) {
        $this->brand = $brand;
        $this->color = $color;
    }

    public function details() {
        echo "This car is a $this->color $this->brand.<br>";
    }
}

$car1 = new Car("Toyota", "Red");
$car1->details();
?>
```

---
# 31. [INHERITANCE]
**Inheritance allows one class to inherit the properties and methods of another class.**

```php
<?php
class Animal {
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function makeSound() {
        echo "$this->name makes a sound.<br>";
    }
}

class Dog extends Animal {
    public function makeSound() {
        echo "$this->name barks.<br>";
    }
}

$dog = new Dog("Buddy");
$dog->makeSound();
?>
```

---
# 32. [ACCESS MODIFIERS]
**Access modifiers control the visibility of properties and methods.**

* **Public**: Can be accessed from anywhere.
* **Private**: Can only be accessed from within the class.
* **Protected**: Can be accessed within the class and its subclasses.

```php
<?php
class BankAccount {
    private $balance = 1000;

    public function getBalance() {
        return $this->balance;
    }

    private function deductFees() {
        $this->balance -= 50;
    }

    public function processFees() {
        $this->deductFees();
    }
}

$account = new BankAccount();
$account->processFees();
echo "Balance: " . $account->getBalance();
?>
```

---
# 33. [STATIC PROPERTIES & METHODS]
**Static properties and methods belong to the class rather than any object. They are accessed using the class name.**

* **Public**: Can be accessed from anywhere.
* **Private**: Can only be accessed from within the class.
* **Protected**: Can be accessed within the class and its subclasses.

```php
<?php
class MathHelper {
    public static $pi = 3.14159;

    public static function areaOfCircle($radius) {
        return self::$pi * $radius * $radius;
    }
}

echo "PI: " . MathHelper::$pi . "<br>";
echo "Area of Circle: " . MathHelper::areaOfCircle(5) . "<br>";
?>
```

---
# 34. [ABSTRACT CLASSES]
**Abstract classes cannot be instantiated and can contain abstract methods that must be defined by child classes.**

```php
<?php
abstract class Vehicle {
    abstract public function fuelType();
}

class Car extends Vehicle {
    public function fuelType() {
        echo "I run on gasoline.<br>";
    }
}

$car = new Car();
$car->fuelType();
?>
```

---
# 35. [INTERFACES]
**Interfaces define a contract for classes to implement. They contain method signatures without implementations.**

```php
<?php
interface Flyable {
    public function fly();
}

class Bird implements Flyable {
    public function fly() {
        echo "I can fly!<br>";
    }
}

$bird = new Bird();
$bird->fly();
?>
```

---
# 36. [POLYMORPHISM]
**Polymorphism allows methods in different classes to have the same name but behave differently based on the object calling them.**

```php
<?php
class Cat {
    public function sound() {
        echo "Meow!<br>";
    }
}

class Dog {
    public function sound() {
        echo "Woof!<br>";
    }
}

function makeSound($animal) {
    $animal->sound();
}

$cat = new Cat();
$dog = new Dog();

makeSound($cat);
makeSound($dog);
?>
```

---
# 37. [NAMESPACES]
**Namespaces allow you to organize and avoid name collisions in larger projects.**

```php
<?php
namespace App\Models;

class User {
    public function __construct() {
        echo "User model instantiated.<br>";
    }
}

// In another file, you'd use:
// use App\Models\User;
// $user = new User();
?>
```

---
# 38. [TRAITS]
**Traits allow you to reuse code across multiple classes, avoiding limitations of single inheritance.**

```php
<?php
trait Logger {
    public function log($message) {
        echo "Logging: $message<br>";
    }
}

class User {
    use Logger;
}

$user = new User();
$user->log("User created");
?>
```

---