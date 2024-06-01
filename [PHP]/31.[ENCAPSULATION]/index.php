<?php

class User
{
    private $id;
    private $name;
    private $email;

    //setter method
    public function setId($id)
    {
        $this->id = $id;
    }
    //getter method
    public function getId()
    {
        return $this->id;
    }

    //setter method
    public function setName($name)
    {
        $this->name = $name;
    }
    //getter method
    public function getName()
    {
        return $this->name;
    }

    //setter method
    public function setEmail($email)
    {
        $this->email = $email;
    }
    //getter method
    public function getEmail()
    {
        return $this->email;
    }
}

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
