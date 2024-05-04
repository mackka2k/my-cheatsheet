<?php
// __set() magic method

class User
{
    private $name;
    private $age;

    public function __set($propertyName, $propertyValue)
    {
        if ($propertyName == 'name') {
            $this->name = $propertyValue;
        } elseif ($propertyName == 'age') {
            $this->age = $propertyValue;
        } else {
            echo "The property ({$propertyName}) you called does not exist in the (" . __CLASS__ . ") class! <br>";
        }
    }

    public function showData()
    {
        echo 'Name: ' . $this->name . '<br>' . 'Age: ' . $this->age . '<br>';
    }
}

$ob = new User();
$ob->name = 'John Doe';
$ob->age = 25;
$ob->showData();
// Trying to set an undefined property
$ob->email = ''; // This line will generate a notice
