// struct = Same as arrays but can hold different data types
//         Ex. int, double, char, etc.
// 				 variables in a struct are known as "members"
// 				 members can be accessed using the dot operator (.)

#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

struct student{
	string name;
	double gpa;
	bool enrolled;
};

int main() {

student student1;
student1.name = "Patrick";
student1.gpa = 3.2;
student1.enrolled = true;

student student2;
student2.name = "Bob";
student2.gpa = 2.2;
student2.enrolled = true;

student student3;
student3.name = "Spongebob";
student3.gpa = 3.9;
student3.enrolled = false;

cout << student1.name << endl;
cout << student1.gpa << endl;
cout << student1.enrolled << endl;

cout << student2.name << endl;
cout << student2.gpa << endl;
cout << student2.enrolled << endl;

cout << student3.name << endl;
cout << student3.gpa << endl;
cout << student3.enrolled << endl;

return 0;
}