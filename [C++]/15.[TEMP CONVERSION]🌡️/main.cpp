#include <iostream>
#include <iomanip>

using namespace std;

int main() {

double temp;
char unit;

cout << "******* TEMPERATURE CONVERSION PROGRAM *******\n";

cout << "F = Fahrenheit\n";
cout << "C = Celsius\n";
cout << "What unit would you like to convert to?	";
cin >> unit;

if (unit == 'F' || unit == 'f') {
	cout << "Enter the temperature in Celsius: ";
	cin >> temp;

	temp = (1.8 * temp) + 32.0;
	cout << "The temperature in Fahrenheit is: " << temp << endl;
}
else if (unit == 'C' || unit == 'c') {
	cout << "Enter the temperature in Fahrenheit: ";
	cin >> temp;

	temp = (temp - 32.0) / 1.8;
	cout << "The temperature in Celsius is: " << temp << endl;
}
else {
	cout << "Invalid unit." << endl;
}

cout << "**********************************************\n";


return 0;
}