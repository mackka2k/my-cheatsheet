<?php
include 'index.php';

use MyNS\People\Person\User as PersonUser;
use Wolfmania\User as WolfUser;

$ob = new WolfUser();
$ob->getData();
$ob->hello();
echo '<hr>';

$ob2 = new PersonUser();
$ob2->showData();
$ob2->hello();
