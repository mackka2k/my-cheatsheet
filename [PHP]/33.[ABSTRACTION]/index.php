<?php

abstract class Person
{
    public $name;
    public $age;

    public function __construct($n, $a)
    {
        $this->name = $n;
        $this->age = $a;
    }

    public function hello()
    {
        echo "This is an abstract class. <br>";
    }

    abstract public function showData();
    abstract public function add($x, $y);
}
class User extends Person
{
    public function showData()
    {
        echo 'My name is ' . $this->name . ' and I am ' . $this->age . ' years old. <br>';
    }

    public function add($x, $y)
    {
        return $x + $y;
    }
}

$u1 = new User('John Doe', 35);
$u1->showData();
$u1->hello();
echo 'The sum is: ' . $u1->add(5, 10) . '<br>';
