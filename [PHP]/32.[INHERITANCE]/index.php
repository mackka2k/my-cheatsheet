<?php
// parent class
class Person
{
    protected $name;
    protected $age;
    protected $gender;

    // Constructor to initialize common properties
    public function __construct($name, $age, $gender)
    {
        $this->name = $name;
        $this->age = $age;
        $this->gender = $gender;
    }

    // Method to display person's details
    public function showPerson()
    {
        echo 'Name: ' . $this->name . '<br>';
        echo 'Age: ' . $this->age . '<br>';
        echo 'Gender: ' . $this->gender . '<br>';
    }
}

// Child class
class Employee extends Person
{
    private $salary;
    private $post;

    // Constructor to initialize employee-specific properties
    public function __construct($name, $age, $gender, $salary, $post)
    {
        parent::__construct($name, $age, $gender); // Call parent constructor
        $this->salary = $salary;
        $this->post = $post;
    }

    // Method to display employee's details including person's details
    public function showEmployee()
    {
        parent::showPerson(); // Call parent method to display person's details
        echo 'Salary: ' . $this->salary . '<br>';
        echo 'Post: ' . $this->post . '<br>';
    }
}

// Create an Employee object and display its details
$ob = new Employee('John Doe', 35, 'Male', 50000, 'Manager');
$ob->showEmployee();
