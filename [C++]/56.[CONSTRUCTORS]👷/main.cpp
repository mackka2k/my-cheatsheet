// constructor = special method that is automatically called when an object of a class is created
//               useful for assigning values to attributes as arguments

#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Student{
	public:
	string name;
	int age;
	double gpa;

	Student(string name, int age, double gpa){
		this->name = name;
		this->age = age;
		this->gpa = gpa;
	}
};

int main() {

Student student1("Patrick", 22, 3.2);
Student student2("Bob", 19, 2.2);

cout << student1.name << endl;
cout << student1.age << endl;
cout << student1.gpa << endl;

cout << student2.name << endl;
cout << student2.age << endl;
cout << student2.gpa << endl;

return 0;
}