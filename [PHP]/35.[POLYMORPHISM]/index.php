<?php
// POLIMOORPHISM
// FUNCTTIONS WITH SAME NAME BUT DIFFERENT PARAMETERS

interface Shape
{
    public function calculateArea();
}

class Circle implements Shape
{
    private $radius;

    public function __construct($r)
    {
        $this->radius = $r;
    }

    public function calculateArea()
    {
        echo 'Area of circle = ' . pi() * $this->radius * $this->radius . '<br>';
    }
}

class Rectangle implements Shape
{
    private $width;
    private $height;

    public function __construct($w, $h)
    {
        $this->width = $w;
        $this->height = $h;
    }

    public function calculateArea()
    {
        echo 'Area of rectangle = ' . $this->width * $this->height . '<br>';
    }
}

class Triangle implements Shape
{
    private $base;
    private $height;

    public function __construct($b, $h)
    {
        $this->base = $b;
        $this->height = $h;
    }

    public function calculateArea()
    {
        echo 'Area of triangle = ' . ($this->base * $this->height) / 2 . '<br>';
    }

}

$circle = new Circle(5);
$rect = new Rectangle(10, 20);
$tri = new Triangle(10, 30);

$circle->calculateArea();
$rect->calculateArea();
$tri->calculateArea();
