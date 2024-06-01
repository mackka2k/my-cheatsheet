// Local variables = declared inside a function or block {}
// Global variables = declared outside all functions
#include <iostream>
#include <iomanip>

int myNum = 10; // Global variable
void printNum(); 

using namespace std;

int main() {

int  myNum = 5; // Local variable
printNum(); // 10
cout << myNum << endl; // 5

		return 0;
}

void printNum() {
		cout << myNum << endl;
}
