#include <iostream>
#include <iomanip>

using namespace std;

// cout << (insertation operator) 
// cin >> (extraction operator) 

int main() {

    string name;
		int age;

		cout << "Enter your name: ";
		cin >> name;
		cout << "Enter your age: ";
		cin >> age;
		cout << "Hello " << name << '\n';
		cout << "You are " << age << " years old\n";

		return 0;
}
