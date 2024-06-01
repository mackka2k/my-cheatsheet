<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the selected gender value
    $selectedGender = $_POST['gender'];

    // Display the selected gender
    echo "You selected: $selectedGender";
}
