// dynamic memory = Memory that is allocated after the program
// 									is already compiled & running.
//									Use the 'new' keyword to allocate
//									memory in the heap rather than the stack.

//									Useful when we don't know how much memory
//									we will need. Makes our programs more flexible,
//									especially when accepting user input.

#include <iostream>
#include <iomanip>

using namespace std;

int main() {

	// int *pNum = NULL;

	// pNum = new int;

	// *pNum = 42;

	// cout <<"pNum adress: " << pNum << endl;
	// cout <<"pNum value: " << *pNum << endl;

	// delete pNum;

	char *pGrades = NULL;
	int size;

	cout << "How many grades would you like to enter? ";
	cin >> size;

	pGrades = new char[size];

	for (int i = 0; i < size; i++)
	{
		cout << "Enter grade #" << i + 1 << ": ";
		cin >> pGrades[i];
	}

	for (int i = 0; i < size; i++)
	{
		cout << "Grade #" << i + 1 << ": " << pGrades[i] << endl;
	}

	delete[] pGrades;

return 0;
}