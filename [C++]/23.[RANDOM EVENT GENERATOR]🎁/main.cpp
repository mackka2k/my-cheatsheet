#include <iostream>
#include <iomanip>
#include <ctime>

using namespace std;

int main() {
    srand(time(0));
    int randNum = rand() % 5 + 1;

    switch (randNum) {
    case 1:
        cout << "You win a bumper sticker!" << endl;
        break;

    case 2:
        cout << "You win a t-shirt!" << endl;
        break;

    case 3:
        cout << "You win a free lunch!" << endl;
        break;

    case 4:
        cout << "You win a gift card!" << endl;
        break;

    case 5:
        cout << "You win concert tickets!" << endl;
        break;

    default:
        cout << "Invalid random number." << endl;
        break;
    }

    return 0;
}
