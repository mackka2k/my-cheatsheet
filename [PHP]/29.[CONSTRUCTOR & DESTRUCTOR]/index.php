<?php

class Person
{
    //member variables
    private $fname;
    private $lname;

    //constructor method
    public function __construct($fname = null, $lname = null)
    {
        echo 'The Class "' . __CLASS__ . '" is created.<br>';
        $this->fname = $fname;
        $this->lname = $lname;
    }

    public function showName()
    {
        echo 'My name is : ' . $this->fname . ' ' . $this->lname . '<br>';
    }

    //destructor method
    public function __destruct()
    {
        echo 'The Class "' . __CLASS__ . '" is destroyed.<br>';

    }
    public function add($a, $b)
    {
        return $a + $b;
    }
}

$obj = new Person("John", "Doe");
$obj->showName();
echo 'The sum is: ' . $obj->add(5, 10) . '<br>';
