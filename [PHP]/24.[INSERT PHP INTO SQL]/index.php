<?php
include "database.php";

$username = "Patrick";
$password = "1234";
$hash = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (user, password) VALUES ('$username', '$hash')";

try {
    mysqli_query($conn, $sql);
    echo "New record created successfully";
} catch (mysqli_sql_exception) {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
