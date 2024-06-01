<?php
// Hashing = transforming sensitive data (password)
//           into letters, numbers, and/or symbols.
//           via a mathematical process. (simmilar to encryption)
//           Hides the original data from 3rd parties.

$password = "pizza123";

$hash = password_hash($password, PASSWORD_DEFAULT);

echo $hash . "<br>";

if (password_verify("pizza123", $hash)) {
    echo "You are logged in!";
} else {
    echo "Incorrect password!";
}
