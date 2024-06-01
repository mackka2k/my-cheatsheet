#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

void happyBirthday(string name, int age) {
    cout << "Happy Birthday to " << name << "!" << endl;
    cout << "Happy Birthday to you!" << endl;
    cout << "Happy Birthday dear " << name << "!" << endl;
		cout << "You are " << age << " years old!" << endl;
}

int main() {
    string name = "Bro";
		int age = 21;

    happyBirthday(name, age);

    return 0;
}
