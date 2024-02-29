#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

string name;

while (name.empty()) {
	cout << "Enter your name: ";
	getline(cin, name);
}

cout << "Hello " << name << '\n';

return 0;
}