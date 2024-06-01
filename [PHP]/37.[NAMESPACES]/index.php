<?php

namespace Wolfmania;

class User
{
    public function getData()
    {
        echo __METHOD__ . '<br>';
    }

    public function hello()
    {
        echo 'Namespace: ' . __NAMESPACE__ . '<br>';
    }
}

$ob = new User();
$ob->getData();
$ob->hello();
echo '<hr>';

namespace MyNS\People\Person; // Namespace declaration cannot be here, it should be at the beginning of the file

class User
{
    public function showData()
    {
        echo __METHOD__ . '<br>';
    }

    public function hello()
    {
        echo 'Namespace: ' . __NAMESPACE__ . '<br>';
    }

}

$ob2 = new User();
$ob2->showData();
$ob2->hello();
