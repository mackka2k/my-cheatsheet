#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int add(int a, int b);

void greet() {
    cout <<	endl	<< "Hello, World!" << endl;
}

string concatStrings(string string1, string string2) {
    return string1 + " " + string2;
}

int add(int a, int b) {
    return a + b;
}

int main() { 
    string firstName = "Bro";
    string lastName = "Code";
    string fullName = concatStrings(firstName, lastName);
    cout << "Hello " << fullName;

    int result = add(1, 2);
    cout << endl << "The sum is: " << result;
    greet();
    return 0;
}
