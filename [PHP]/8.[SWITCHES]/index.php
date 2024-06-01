<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Switch Statement Example</title>
</head>
<body>
    <?php
// Switch Statement Example

// Example 1
$dayOfWeek = "Wednesday";

switch ($dayOfWeek) {
    case "Monday":
        echo "It's the start of the week. Stay motivated! <br>";
        break;
    case "Wednesday":
        echo "It's hump day! You're halfway there. <br>";
        break;
    case "Friday":
        echo "TGIF! Enjoy your weekend. <br>";
        break;
    default:
        echo "It's a regular day. <br>";
}

// Example 2
$grade = "B";

switch ($grade) {
    case "A":
        echo "Excellent! Keep up the good work. <br>";
        break;
    case "B":
        echo "Good job! You're doing well. <br>";
        break;
    case "C":
        echo "Satisfactory. Focus on improvement. <br>";
        break;
    default:
        echo "You can do better. <br>";
}
?>
</body>
</html>
