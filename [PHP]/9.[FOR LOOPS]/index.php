<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For Loop Example</title>
</head>
<body>
    <?php
// For Loop Example

// Example 1: Counting from 1 to 5
echo "<p>Counting from 1 to 5:</p>";
for ($i = 1; $i <= 5; $i++) {
    echo "$i ";
}
echo "<br>";

// Example 2: Multiplication table for 3
echo "<p>Multiplication table for 3:</p>";
for ($j = 1; $j <= 10; $j++) {
    $result = 3 * $j;
    echo "3 x $j = $result <br>";
}

// Example 3: Looping through an array
echo "<p>Looping through an array:</p>";
$colors = array("Red", "Green", "Blue", "Yellow");

for ($k = 0; $k < count($colors); $k++) {
    echo "Color at index $k: $colors[$k] <br>";
}
?>
</body>
</html>
