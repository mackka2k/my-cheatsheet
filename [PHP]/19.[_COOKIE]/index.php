<?php

// cookie = Information about a user stored in a user's web-browser
//          targeted advertisiments, browsing preferences, and
//          other non-sensitive data

?>

<?php

setcookie("fav_food", "pizza", time() + (86400 * 30), "/");
setcookie("fav_drink", "coffee", time() + (86400 * 30), "/");
setcookie("fav_desert", "ice cream", time() + (86400 * 30), "/");

if (isset($_COOKIE["fav_food"])) {
    echo "We recommend you try a " . $_COOKIE["fav_food"] . "!";
} else {
    echo "Sadly, we don't know your favorite food.";
}
?>
