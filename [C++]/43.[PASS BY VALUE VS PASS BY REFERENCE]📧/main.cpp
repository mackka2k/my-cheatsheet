#include <iostream>
#include <string>
using namespace std;

// Function prototype for pass by value
void swapByValue(string a, string b);

// Function prototype for pass by reference
void swapByReference(string &x, string &y);

int main() {
    string x = "Kool-Aid";
    string y = "Water";

    // Pass by value example
    cout << "Before pass by value:" << endl;
    cout << "X: " << x << endl;
    cout << "Y: " << y << endl;
    swapByValue(x, y); // Copies of x and y are passed
    cout << "After pass by value (no change):" << endl;
    cout << "X: " << x << endl;
    cout << "Y: " << y << endl;

    // Pass by reference example
    cout << "\nBefore pass by reference:" << endl;
    cout << "X: " << x << endl;
    cout << "Y: " << y << endl;
    swapByReference(x, y); // References to x and y are passed
    cout << "After pass by reference (values swapped):" << endl;
    cout << "X: " << x << endl;
    cout << "Y: " << y << endl;

    return 0;
}

// Function definition for pass by value
void swapByValue(string a, string b) {
    string temp = a;
    a = b;
    b = temp;
}

// Function definition for pass by reference
void swapByReference(string &x, string &y) {
    string temp = x;
    x = y;
    y = temp;
}
