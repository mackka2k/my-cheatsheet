<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Functions Example</title>
</head>
<body>
    <?php
// Math Functions Example

// Absolute value
$number = -10;
$absValue = abs($number);
echo "Absolute Value of $number: $absValue <br>";

// Square root
$positiveNumber = 25;
$sqrtValue = sqrt($positiveNumber);
echo "Square Root of $positiveNumber: $sqrtValue <br>";

// Power (Exponentiation)
$base = 2;
$exponent = 3;
$powerValue = pow($base, $exponent);
echo "$base raised to the power of $exponent: $powerValue <br>";

// Random number (between 1 and 100)
$randomNumber = rand(1, 100);
echo "Random Number: $randomNumber <br>";

// Round a floating-point number
$floatingNumber = 5.678;
$roundedNumber = round($floatingNumber, 2); // Round to 2 decimal places
echo "Rounded Number: $roundedNumber <br>";
?>
</body>
</html>
