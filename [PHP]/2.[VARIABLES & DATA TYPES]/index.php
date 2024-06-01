<?php
$name = "Bro Code";
$food = "Pizza";
$email = "fake123@gmail.com";

$age = 21;
$users = 2;
$quantity = 3;

$gpa = 3.5;
$price = 10.99;
$tax_rate = 5.1;

$employed = true;
$online = false;
$for_sale = true;

echo "You have ordered $quantity $food from $name. <br>";
echo "Your total is $" . $quantity * $price . " <br>";
echo "Your tax will be $" . $quantity * $price * ($tax_rate / 100) . " <br>";
