// enums = like a list of a few possible values for a variable.

#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

enum Day {Monday = 0, Tuesday = 1, Wednesday = 2, Thursday = 3, Friday = 4, Saturday = 5, Sunday = 6};

int main() {

    Day today = Sunday;

    switch(today){
        case Monday:
            cout << "Today is Monday" << endl;
            break;
        case Tuesday:
            cout << "Today is Tuesday" << endl;
            break;
        case Wednesday:
            cout << "Today is Wednesday" << endl;
            break;
        case Thursday:
            cout << "Today is Thursday" << endl;
            break;
        case Friday:
            cout << "Today is Friday" << endl;
            break;
        case Saturday:
            cout << "Today is Saturday" << endl;
            break;
        case Sunday:
            cout << "Today is Sunday" << endl;
            break;
        default:
            cout << "Invalid day" << endl;
            break;
    }

    return 0;
}
