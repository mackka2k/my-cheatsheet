// recusion = a programming technique where a function
//            calls itself from within
//						break a problem into a repeatable single step

// (iterative vs recursive)

// advantages = less code and is cleaner
//              useful for sorting and searching algorithms

// disadvantages = uses more memory
// 							 	 slower

// PAPRASTAI KALBANT REKUSIJA EINA NUO [10 IKI 0], O ITERACIJA NUO [0 IKI 10]

#include <iostream>
#include <iomanip>

using namespace std;

void iterativeWalk(int steps) {
    for (int i = 0; i < steps; ++i) {
        cout << "You take a step!" << endl;
    }
}

void recursiveWalk(int steps) {
    if (steps > 0) {
        cout << "You take a step!" << endl;
        recursiveWalk(steps - 1); // Recursive call
    }
}

int main() {
    // Iterative approach
    cout << "Iterative Walk:" << endl;
    iterativeWalk(5);

    // Recursive approach
    cout << "\nRecursive Walk:" << endl;
    recursiveWalk(5);

    return 0;
}
