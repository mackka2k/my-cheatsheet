// switch = alternative to using many "else if" statements 
// compare one value against matching cases.

#include <iostream>
#include <iomanip>

using namespace std;

int main() {

int month;

cout << "Enter a month (1-12): ";
cin >> month;

switch(month) {
	case 1:
		cout << "January" << endl;
		break;
	case 2: 
		cout << "February" << endl;
		break;
	case 3: 
		cout << "March" << endl;
		break;
	case 4: 
		cout << "April" << endl;
		break;
	case 5:
		cout << "May" << endl;
		break;
	case 6:
		cout << "June" << endl;
		break;
	case 7:
		cout << "July" << endl;
		break;
	case 8:
		cout << "August" << endl;
		break;
	case 9:
		cout << "September" << endl;
		break;
	case 10:
		cout << "October" << endl;
		break;
	case 11:
		cout << "November" << endl;
		break;
	case 12: 
		cout << "December" << endl;
		break;
	default: // default = else
		cout << "Not a valid month." << endl;
		break;
}

    return 0;
}

