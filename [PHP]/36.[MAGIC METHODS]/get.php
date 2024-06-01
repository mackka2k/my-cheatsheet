<?php
// __get() magic method

class User
{
    private $name;
    private $age;

    public function __construct($n, $a)
    {
        $this->name = $n;
        $this->age = $a;
    }

    public function __get($propertyName)
    {
        if ($propertyName == 'name') {
            return $this->name . '<br>';
        } elseif ($propertyName == 'age') {
            return $this->age . '<br>';
        } else {
            return "The property ({$propertyName}) you called does not exist in the (" . __CLASS__ . ") class! <br>";
        }
    }
}

$ob = new User('John Doe', 25);
echo $ob->name;
echo $ob->age;
echo $ob->email;
