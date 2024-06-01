<?php

class Test
{
    public $fname;
    public $lname;

    public function __construct($firstname, $lastname)
    {
        $this->fname = self::filterName($firstname);
        $this->lname = self::filterName($lastname);
    }
    public static function filterName($name)
    {
        $name = trim($name);
        $name = preg_replace('/[^a-zA-Z0-9]/', '', $name);
        return $name;
    }
}
$user = new Test("John", "Doe");
echo $user->fname . ' ' . $user->lname;
