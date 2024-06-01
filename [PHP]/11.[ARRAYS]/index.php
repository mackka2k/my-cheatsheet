<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays Example</title>
</head>
<body>
    <?php
// Arrays Example

// Example 1: Indexed Array
$fruits = array("Apple", "Banana", "Orange", "Grapes", "Mango");

echo "<p>Indexed Array:</p>";
echo "Fruits: ";
foreach ($fruits as $fruit) {
    echo "$fruit, ";
}
echo "<br>";

// Example 2: Associative Array
$student = array(
    "name" => "John",
    "age" => 20,
    "grade" => "A",
);

echo "<p>Associative Array:</p>";
echo "Student Information: ";
foreach ($student as $key => $value) {
    echo "$key: $value, ";
}
echo "<br>";

// Example 3: Multidimensional Array
$matrix = array(
    array(1, 2, 3),
    array(4, 5, 6),
    array(7, 8, 9),
);

echo "<p>Multidimensional Array:</p>";
echo "Matrix: " . "<br>";
foreach ($matrix as $row) {
    foreach ($row as $element) {
        echo "$element, ";
    }
    echo "<br>";
}
?>
</body>
</html>
