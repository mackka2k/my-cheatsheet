#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {
    string name;
    cout << "Enter your name: ";
    getline(cin, name);

    if (name.length() > 12) {
        cout << "Your name is long." << endl;
    }
    else if (name.length() < 3) {
        cout << "Your name is short." << endl;
    }
    else if (name.empty()) {
        cout << "You didn't enter a name." << endl;
    }
    else {
        name.append("@gmail.com");
        cout << "Your username is now: " << name << "!" << endl;
    }

    return 0;
}

/* 
// [gets the first character of the string]

cout << "Enter your name: "; 
getline(cin, name);
cout << name.at(0) << endl; 

// [inserts a character at a specific index]
cout << "Enter your name: "; 
getline(cin, name);
cout << name.isert(0,"@") << endl; 

// [removes a character at a specific index]
cout << "Enter your name: ";
getline(cin, name);
cout << name.erase(0,1) << endl;

// [replaces a character at a specific index]
cout << "Enter your name: ";
getline(cin, name);
cout << name.replace(0,1,"@") << endl;

// [finds a character or substring]
cout << "Enter your name: ";
getline(cin, name);
cout << name.find("a") << endl;

*/
