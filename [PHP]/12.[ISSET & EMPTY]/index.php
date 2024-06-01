<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>isset() & empty() Example</title>
</head>
<body>
    <?php
// isset() & empty() Example

// Example 1: isset()
$name = "John";

echo "<p>isset() Example:</p>";
if (isset($name)) {
    echo "The variable \$name is set. Its value is: $name <br>";
} else {
    echo "The variable \$name is not set. <br>";
}

// Example 2: empty()
$age = 25;

echo "<p>empty() Example:</p>";
if (empty($age)) {
    echo "The variable \$age is empty or not set. <br>";
} else {
    echo "The variable \$age is not empty. Its value is: $age <br>";
}

// Example 3: Combining isset() and empty()
$city = "";

echo "<p>Combining isset() and empty() Example:</p>";
if (isset($city) && !empty($city)) {
    echo "The variable \$city is set and not empty. Its value is: $city <br>";
} else {
    echo "The variable \$city is either not set or empty. <br>";
}
?>
</body>
</html>
