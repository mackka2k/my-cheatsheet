#include <iostream>
#include <iomanip>

using namespace std;

int main() {

char op;
double num1, num2, result;

cout << "****************** CALCULATOR ******************\n";

cout << "Enter either (+, -, *, /): ";
cin >> op;

cout << "Enter #1: ";
cin >> num1;

cout << "Enter #2: ";
cin >> num2;

switch(op){
	case '+':
		result = num1 + num2;
		cout << "Result: " << result << endl;
		break;
	case '-':
		result = num1 - num2;
		cout << "Result: " << result << endl;
		break;
	case '*':
		result = num1 * num2;
		cout << "Result: " << result << endl;
		break;
	case '/':
		result = num1 / num2;
		cout << "Result: " << result << endl;
		break;
	default:
		cout << "Invalid operator." << endl;
		break;
}

cout << "************************************************\n";

return 0;	
}