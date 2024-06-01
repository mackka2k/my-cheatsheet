<?php
interface Login
{
    const EMAIL = 'sahil@gmail.com';
    const PASSWORD = '123456';
    public function getEmail();
    public function getPassword();
}

interface Register extends Login
{
    const PHONE = '1234567890';
    public function getPhone();
}

class User implements Register
{
    public function getEmail()
    {
        echo self::EMAIL; // Corrected
    }

    public function getPassword()
    {
        echo self::PASSWORD; // Corrected
    }

    public function getPhone()
    {
        echo self::PHONE; // Corrected
    }
}

$user = new User();
$user->getEmail();
