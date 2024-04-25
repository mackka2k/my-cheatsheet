#include <iostream>
using namespace std;

int dividetwonumbers(int x, int y) {
	if (y == 0) {
		throw 'c';
	}
	return x / y;
}

int main() {
	 int num, den;
	 cout << "Please enter the numerator and denominator: ";
	 cin >> num >> den;
	 int result;
	 try {
		 result = dividetwonumbers(num, den);
		 cout << "Result: " << result << endl;
	 }
	 catch (int msg) {
		 cout << "Error is zero: " << msg << endl;
	 }
	 catch (double msg) {
		 cout << "Error is double zero: " << endl;
	 }
   catch (...) {
		 cout << "Error is unknown" << endl;
	 }
	return 0;
}