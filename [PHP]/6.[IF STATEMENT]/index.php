<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>If Statement Example</title>
</head>
<body>
    <?php
// If Statement Example

// Example 1
$num1 = 10;
$num2 = 5;

if ($num1 > $num2) {
    echo "$num1 is greater than $num2 <br>";
} elseif ($num1 == $num2) {
    echo "$num1 is equal to $num2 <br>";
} else {
    echo "$num1 is less than $num2 <br>";
}

// Example 2
$isSunny = true;

if ($isSunny) {
    echo "It's a sunny day! Don't forget your sunglasses. <br>";
} else {
    echo "It's not sunny today. <br>";
}

// Example 3
$userAge = 25;

if ($userAge >= 18) {
    echo "You are eligible to vote. <br>";
} else {
    echo "Sorry, you are not eligible to vote yet. <br>";
}
?>
</body>
</html>
