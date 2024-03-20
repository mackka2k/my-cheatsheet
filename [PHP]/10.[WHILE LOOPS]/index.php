<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While Loop Example</title>
</head>
<body>
    <?php
// While Loop Example

// Example 1: Counting from 1 to 5
echo "<p>Counting from 1 to 5 using while loop:</p>";
$counter = 1;

while ($counter <= 5) {
    echo "$counter ";
    $counter++;
}
echo "<br>";

// Example 2: Sum of numbers from 1 to 10
echo "<p>Sum of numbers from 1 to 10 using while loop:</p>";
$sum = 0;
$number = 1;

while ($number <= 10) {
    $sum += $number;
    $number++;
}
echo "Sum: $sum <br>";

// Example 3: Looping through an array
echo "<p>Looping through an array using while loop:</p>";
$colors = array("Red", "Green", "Blue", "Yellow");
$index = 0;

while ($index < count($colors)) {
    echo "Color at index $index: $colors[$index] <br>";
    $index++;
}
?>
</body>
</html>
