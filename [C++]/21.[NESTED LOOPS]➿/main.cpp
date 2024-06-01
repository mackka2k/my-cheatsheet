// NESTED LOOPS = LOOPS INSIDE LOOPS
// NESTED LOOPS ARE USED TO PRINT PATTERNS, TABLES, ETC.


#include <iostream>
#include <iomanip>

using namespace std;

int main() {

	int rows;
	int columns;
	char symbol;

	cout << "HOW MANY ROWS?: ";
	cin >> rows;

	cout << "HOW MANY COLUMNS?: ";
	cin >> columns;

	cout << "WHAT SYMBOL?: ";
	cin >> symbol;

    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= columns; j++) { 
            cout << symbol;
				}
        cout << endl;
    }
    return 0;
}
