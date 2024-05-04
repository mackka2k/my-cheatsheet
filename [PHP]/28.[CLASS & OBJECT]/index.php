<?php

class User
{
    public $id;
    public $name;
    public $email;
    public $phone;

    public function setData($i, $n, $e, $p)
    {
        $this->id = $i;
        $this->name = $n;
        $this->email = $e;
        $this->phone = $p;
    }

    public function getData()
    {
        echo "ID: " . $this->id . "<br>";
        echo "Name: " . $this->name . "<br>";
        echo "Email: " . $this->email . "<br>";
        echo "Phone: " . $this->phone . "<br>";
    }
}

$u1 = new User();
$u1->setData(1, "John Doe", "joh.@gmail.com", "1234567890");
$u1->getData();

$u2 = new User();
$u2->setData(2, "Jane Doe", "jane.@gmail.com", "0987654321");
$u2->getData();
