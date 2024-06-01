<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Example</title>
</head>
<body>
    <form action="index.php" method="get">
        <label>Username:</label><br>
        <input type="text" name="username"><br>
        <label>Password:</label><br>
        <input type="password" name="password"><br>
        <input type="submit" value="Submit">
    </form>

    <form action="index.php" method="post">
        <label>Username (POST):</label><br>
        <input type="text" name="post_username"><br>
        <label>Password (POST):</label><br>
        <input type="password" name="post_password"><br>
        <input type="submit" value="Submit (POST)">
    </form>

<?php
// $_GET and $_POST = special variables used to collect data from an html form
//                    data is sent to the file in the action attribute of <form>
//                    <form action="index.php" method="get">

// $_GET = Data is appended to the URL
//         NOT SECURE
//         char limit
//         Bookmark is possible w/ values
//         GET requests can be cached
//         Better for a search page

// $_POST = Data is packaged inside the body of the HTTP request
//          MORE SECURE
//          No data limit
//          Cannot bookmark
//          GET requests are not cached
//          Better for submitting credentials

// Using $_GET to access form values submitted with the "get" method
if (isset($_GET['username']) && isset($_GET['password'])) {
    $getUsername = $_GET['username'];
    $getPassword = $_GET['password'];

    echo "<p>Values submitted using GET:</p>";
    echo "Username: $getUsername <br>";
    echo "Password: $getPassword <br>";
}

// Using $_POST to access form values submitted with the "post" method
if (isset($_POST['post_username']) && isset($_POST['post_password'])) {
    $postUsername = $_POST['post_username'];
    $postPassword = $_POST['post_password'];

    echo "<p>Values submitted using POST:</p>";
    echo "Username (POST): $postUsername <br>";
    echo "Password (POST): $postPassword <br>";
}
?>
