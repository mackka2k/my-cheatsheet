<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logical Operators Example</title>
</head>
<body>
    <?php
// Logical Operators Example

// Example 1: AND (&&) Operator
$isSunny = true;
$temperature = 28;

if ($isSunny && $temperature > 25) {
    echo "It's a hot and sunny day! <br>";
} else {
    echo "The weather is not too hot or not sunny. <br>";
}

// Example 2: OR (||) Operator
$isWeekend = false;

if ($isSunny || $isWeekend) {
    echo "It's either a sunny day or the weekend. <br>";
} else {
    echo "It's not sunny, and it's not the weekend. <br>";
}

// Example 3: NOT (!) Operator
$isRainy = false;

if (!$isRainy) {
    echo "It's not raining today. <br>";
} else {
    echo "It's raining. Grab an umbrella! <br>";
}
?>
</body>
</html>
