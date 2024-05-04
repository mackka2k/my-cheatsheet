<?php
require 'index.php';

$user = new User();
$user->setId(5000);
$user->setName("John Doe");
$user->setEmail("abc@gmail.com");

echo 'ID: ' . $user->getId();
echo "<br>";
echo 'Name: ' . $user->getName();
echo "<br>";
echo 'Email: ' . $user->getEmail();

echo '<hr>';

$user2 = new User();
$user2->setId(6000);
$user2->setName("Jane Doe");
$user2->setEmail("bou@gmail.com");
echo 'ID: ' . $user2->getId();
echo "<br>";
echo 'Name: ' . $user2->getName();
echo "<br>";
echo 'Email: ' . $user2->getEmail();
