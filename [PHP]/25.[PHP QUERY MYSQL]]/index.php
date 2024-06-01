<?php
include "database.php";

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo $row["id"] . "<br>";
        echo $row["user"] . "<br>"; // Assuming 'user' is the correct column name
        echo $row["reg_date"] . "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
