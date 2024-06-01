<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions Example</title>
</head>
<body>
    <?php
// Functions Example

// Example 1: Simple Function
function greet()
{
    echo "Hello, welcome to the world of functions!<br>";
}

echo "<p>Example 1:</p>";
greet();

// Example 2: Function with Parameters
function add($num1, $num2)
{
    $sum = $num1 + $num2;
    echo "The sum of $num1 and $num2 is: $sum<br>";
}

echo "<p>Example 2:</p>";
add(5, 7);

// Example 3: Function with Return Value
function multiply($num1, $num2)
{
    $result = $num1 * $num2;
    return $result;
}

echo "<p>Example 3:</p>";
$product = multiply(3, 4);
echo "The product is: $product<br>";

// Example 4: Function with Default Parameter
function greetUser($name = "Guest")
{
    echo "Hello, $name! How are you today?<br>";
}

echo "<p>Example 4:</p>";
greetUser("Alice");
greetUser(); // Uses the default parameter

// Example 5: Recursive Function
function factorial($n)
{
    if ($n <= 1) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}

echo "<p>Example 5:</p>";
$resultFactorial = factorial(5);
echo "Factorial of 5 is: $resultFactorial<br>";
?>
</body>
</html>
