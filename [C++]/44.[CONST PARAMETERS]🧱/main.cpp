// const parameter = a parameter that is effectively read-only
//                   code is more secure & easier to debug
//                   useful for refences and pointers

#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

void printInfo(const string &name, const int &age);

int main() {
    string name = "John";
    int age = 30;
    printInfo(name, age);

    return 0;
}

void printInfo(const string &name, const int &age) {
    // Uncommenting the lines below will result in a compilation error
    // because you cannot modify const parameters.
    // name = "Jane"; // error
    // age = 20;      // error

    cout << name << endl;
    cout << age << endl;
}