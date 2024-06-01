<?php
// __clone() magic method

class User
{
    public $name;
    public function __construct($n)
    {
        $this->name = $n;
    }
    public function say()
    {
        echo "Hello {$this->name}! <br>";
    }
    public function __clone()
    {
        echo "You are cloning the object in a (" . __CLASS__ . ") class! <br>";
    }
}

$ob = new User('John Doe');
echo $ob->name . '<br>';
$ob2 = clone $ob;
echo $ob2->name . '<br>';
