<?php
// $_SERVER = SGB that contains headers, path, and script locations.
//            The entries in this array are created by the web server.
//            Shows nearly everything you need to know about the current web page env.
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$_SERVER Example</title>
</head>
<body>
    <h2>$_SERVER Example</h2>

    <?php
// Displaying some information from $_SERVER

// Server Name
echo "<strong>Server Name:</strong> " . $_SERVER['SERVER_NAME'] . "<br>";

// Server IP Address
echo "<strong>Server IP Address:</strong> " . $_SERVER['SERVER_ADDR'] . "<br>";

// Server Port
echo "<strong>Server Port:</strong> " . $_SERVER['SERVER_PORT'] . "<br>";

// Document Root
echo "<strong>Document Root:</strong> " . $_SERVER['DOCUMENT_ROOT'] . "<br>";

// Requested URL
echo "<strong>Requested URL:</strong> " . $_SERVER['REQUEST_URI'] . "<br>";

// User Agent
echo "<strong>User Agent:</strong> " . $_SERVER['HTTP_USER_AGENT'] . "<br>";

// Referrer
echo "<strong>Referrer (if available):</strong> " . (isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : "Not available") . "<br>";
?>
</body>
</html>
