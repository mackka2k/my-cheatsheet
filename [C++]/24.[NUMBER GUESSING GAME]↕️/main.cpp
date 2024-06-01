#include <iostream>
#include <iomanip>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    int num;
    int guess;
    int tries = 0;

    srand(time(NULL));
    num = rand() % 100 + 1;
    cout << "********** NUMBER GUESSING GAME **********" << endl;

    do {
        cout << "Enter a guess between 1 and 100: ";
        cin >> guess;
        tries++;

        if (guess > num) {
            cout << "Too high!" << endl;
        }
        else if (guess < num) {
            cout << "Too low!" << endl;
        }
        else {
            cout << "CORRECT! # of tries: " << tries << endl;
        }
    } while (guess != num);

    cout << "**********************************************" << endl;

    return 0;
}
