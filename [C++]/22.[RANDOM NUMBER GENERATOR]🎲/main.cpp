// PSEUDO-RANDOM = NOT TRULY RANDOM (BUT CLOSE)
// int num1 = rand() % 6; // RANDOM NUMBER BETWEEN 0 AND 5
#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

int main() {
    srand(time(NULL)); // SEEDS THE RANDOM NUMBER GENERATOR

    int num1 = (rand() % 6) + 1; // RANDOM NUMBER BETWEEN 1 AND 6
    int num2 = (rand() % 6) + 1;
    int num3 = (rand() % 6) + 1;

    cout << num1 << endl;
    cout << num2 << endl;
    cout << num3 << endl;

    return 0;
}
