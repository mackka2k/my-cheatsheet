// memory addresses = a location in memory where data is stored
// a memory address can be accessed using the & operator

#include <iostream>
#include <iomanip>

using namespace std;

int main() {

string name = "John";
int age = 30;
bool student = true;

cout << &name << endl; // 0x7ffeeb0b4a68
cout << &age << endl; // 0x7ffeeb0b4a64
cout << &student << endl; // 0x7ffeeb0b4a63

return 0;
}