
<?php
// [self] keyword same as [this] keyword but used for static properties and methods
class Test
{
    public static $id = 1;
    public static $name = 'John';

    public static function showData()
    {
        echo 'ID : ' . self::$id++ . '<br>';
        echo 'Name : ' . self::$name . '<br>';
        echo '<br>';
    }
}

echo Test::showData();
echo Test::showData();
echo Test::showData();