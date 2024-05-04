<?php

// Define the Test interface
interface Test
{
    const A = 100;

    public function showValue();
}

// Define the Test2 interface
interface Test2
{
    const B = 200;
    public function showValue();
}

// Create a base class User
class User
{
    protected $name;

    // Method to set the user's name
    public function setName($name)
    {
        $this->name = $name;
    }

    // Method to display the user's name
    public function showName()
    {
        echo 'Name: ' . $this->name . '<br>';
    }
}

// Create the Main class which extends User and implements Test2
class Main extends User implements Test2
{
    // Implement the showValue method from Test2 interface
    public function showValue()
    {
        echo 'Test A value: ' . Test::A . '<br>';
        echo 'Test2 B value: ' . Test2::B . '<br>';
    }
}

// Create an instance of Main class
$ob = new Main();

// Call showValue method to display constant values
$ob->showValue();

// Set and display the user's name
$ob->setName('John Doe');
$ob->showName();
