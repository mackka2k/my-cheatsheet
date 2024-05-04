<?php
// __invoke() magic method

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
    public function __invoke()
    {
        return "You have called the object as a function of the (" . __CLASS__ . ") class! <br>";
    }
}

$ob = new User('John Doe');
$ob->say();
echo $ob(); // Corrected
