<?php

class Base
{
    public function hello()
    {
        echo 'Hello from Base';
    }
}
class Child extends Base
{
    public function hello()
    {
        echo 'Hello from Child';
    }
}

$b = new Base();
$c = new Child();

$b->hello();
$c->hello();
