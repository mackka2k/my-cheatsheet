// sizeof() = determines the size in bytes of a:
//						variable, data type , class , object , etc

#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

string name = "John";
double gpa = 3.5;
char grade = 'A';
bool isMale = true;
char grades [] = { 'A', 'B', 'C', 'D', 'F' };
string students[] = { "John", "Jane", "Jack", "Jill" };

cout << sizeof(students)/sizeof(string)<<" elements in the array"<<endl; 

return 0;
}