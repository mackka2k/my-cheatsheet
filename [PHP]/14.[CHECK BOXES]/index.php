<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkboxes Example</title>
</head>
<body>
    <form action="process_form.php" method="post">
        <label>Select your hobbies:</label><br>
        <input type="checkbox" name="hobbies[]" value="reading"> Reading<br>
        <input type="checkbox" name="hobbies[]" value="gaming"> Gaming<br>
        <input type="checkbox" name="hobbies[]" value="traveling"> Traveling<br>
        <input type="checkbox" name="hobbies[]" value="cooking"> Cooking<br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
