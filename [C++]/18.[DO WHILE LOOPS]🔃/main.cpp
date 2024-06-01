// do while loop = do some block of code  first,
//								THEN repeat again if condition is true

#include <iostream>
#include <iomanip>

using namespace std;

int main() {

int number;

do { // if true 
	cout << "Enter a number between 1 and 10: ";
	cin >> number;
} while (number < 1 || number > 10); // while this condition is true, repeat the loop
cout << "You entered " << number << endl; // if false then exit the loop


return 0;
}