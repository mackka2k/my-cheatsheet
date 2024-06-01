// pointers = variables that stores a memory address of another variable
// 						sometimes it's easier to work with an adress

// &  address of operator
// *  dereference operator

#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

string name = "John";
int age = 30;
string freePizzas[5] = {"pizza1", "pizza2", "pizza3", "pizza4", "pizza5"}; 

string *pName = &name;
int *pAge = &age;
string *pFreePizzas = freePizzas;

cout << *pName << endl; // John
cout << *pAge << endl; // 30
cout << pFreePizzas << endl; // 0x7ffeeb0b4a68


return 0;
}