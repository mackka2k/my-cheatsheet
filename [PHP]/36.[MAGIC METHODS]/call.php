<?php
// __construct() - The constructor of a class
// __destruct() - The destructor of a class
// __call() - this method will be called when an udefined or inaccessible method is called.
// callStatic() - this method will be called when an undefined or inaccessible static method is called.
// __get() - this method will be called when an undefined or inaccessible property is accessed.
// __set() - this method will be called when an undefined or inaccessible property is set.
// __isset() - this method will be called when isset() is called on an undefined or inaccessible property.
// __unset() - this method will be called when unset() is called on an undefined or inaccessible property.
// __sleep() - this method will be called when serialize() is called on an object.
// __wakeup() - this method will be called when unserialize() is called on an object.
// __toString() - this method will be called when an object is converted to a string.
// __invoke() - this method will be called when an object is used as a function.
// __set_state() - this method will be called when var_export() is called on an object.
// __clone() - this method will be called when an object is cloned.
// __autoload() - this method will be called when a class is not found.
// __debugInfo() - this method will be called when var_dump() is called on an object.
?>

<?php
//__call() magic method
class User
{
    public function __construct()
    {
        echo 'Constructor called<br>';
    }
    public function say()
    {
        echo 'Hello<br>';
    }
    public function __call($functionName, $arguments)
    {
        echo "Function ({$functionName}) with parameters : ";
        print_r($arguments);
        echo "you called does not exist in the (" . __CLASS__ . ") class! <br>";
    }
}

$ob = new User();
$ob->say();
$ob->talk("Hi", "Hello", "How are you?");
?>
