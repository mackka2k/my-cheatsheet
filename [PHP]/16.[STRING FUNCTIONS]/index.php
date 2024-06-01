<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Functions Example</title>
</head>
<body>
    <?php
// String Functions Example

// Example 1: strlen() - String Length
$text = "Hello, PHP!";
$length = strlen($text);

echo "<p>Example 1:</p>";
echo "The length of the string '$text' is: $length<br>";

// Example 2: strtoupper() - Convert to Uppercase
$lowercaseText = "convert me to uppercase";
$uppercaseText = strtoupper($lowercaseText);

echo "<p>Example 2:</p>";
echo "Original: $lowercaseText<br>";
echo "Uppercase: $uppercaseText<br>";

// Example 3: strtolower() - Convert to Lowercase
$uppercaseText = "CONVERT ME TO LOWERCASE";
$lowercaseText = strtolower($uppercaseText);

echo "<p>Example 3:</p>";
echo "Original: $uppercaseText<br>";
echo "Lowercase: $lowercaseText<br>";

// Example 4: substr() - Substring
$originalString = "This is a long sentence.";
$substring = substr($originalString, 5, 8);

echo "<p>Example 4:</p>";
echo "Original: $originalString<br>";
echo "Substring: $substring<br>";

// Example 5: strpos() - Find Position of Substring
$searchString = "PHP";
$position = strpos($text, $searchString);

echo "<p>Example 5:</p>";
echo "Original: $text<br>";
echo "Position of '$searchString': $position<br>";
?>
</body>
</html>
