// if statements = do something if a condition is true.
// if not, then don't do it or do something else.

#include <iostream>
#include <iomanip>

using namespace std;

int main() {

    int age;

    cout << "Enter your age: ";
    cin >> age;

    if (age >= 18) {
        cout << "You are an adult." << endl;
    } 
    else if (age >= 13) {
        cout << "You are a teenager." << endl;
    }
    else if (age >= 1) {
        cout << "You are a child." << endl;
    }
    else if (age == 0) {
        cout << "You are a baby." << endl;
    }
    else {
        cout << "You are not born yet." << endl;
    }

    return 0;
}

