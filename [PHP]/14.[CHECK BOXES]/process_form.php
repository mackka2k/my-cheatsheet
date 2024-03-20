<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the selected hobbies array
    $selectedHobbies = $_POST['hobbies'];

    // Display the selected hobbies
    echo "You selected the following hobbies: <br>";
    if (!empty($selectedHobbies)) {
        foreach ($selectedHobbies as $hobby) {
            echo "- $hobby <br>";
        }
    } else {
        echo "No hobbies selected.";
    }
}
