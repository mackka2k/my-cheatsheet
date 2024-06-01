<?php
session_start();

// Check if the user is already logged in
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    header("Location: welcome.php");
    exit();
} else {
    // If not logged in, display the login form
    if (isset($_POST['login'])) {
        // Simulate user authentication (replace this with your actual authentication logic)
        $inputUsername = $_POST['username'];
        $inputPassword = $_POST['password'];

        // In a real-world scenario, you would perform database validation or other authentication methods.
        // For this example, let's check if the username and password are both 'admin'.
        if ($inputUsername == 'admin' && $inputPassword == 'admin') {
            // Set the session variables
            $_SESSION['username'] = $inputUsername;

            // Redirect to the welcome page
            header("Location: welcome.php");
            exit();
        } else {
            echo "Invalid username or password";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <h2>Login</h2>
    <form action="" method="post">
        <label for="username">Username:</label>
        <input type="text" name="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" required><br>

        <input type="submit" name="login" value="Login">
    </form>
</body>
</html>
