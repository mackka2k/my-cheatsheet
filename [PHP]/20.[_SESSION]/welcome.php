<?php
session_start();

// Check if the user is not logged in
if (!isset($_SESSION['username'])) {
    // Redirect to the login page
    header("Location: index.php");
    exit();
}

// Display the welcome message
$username = $_SESSION['username'];
echo "Welcome, $username! <br>";

// Add a link to logout
echo "<a href='logout.php'>Logout</a>";
