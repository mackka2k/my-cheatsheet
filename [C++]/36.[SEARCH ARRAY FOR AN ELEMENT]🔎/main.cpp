#include <iostream>
#include <iomanip>

using namespace std;

int searchArray(int array[], int size, int element); // Function prototype

int main() {
    int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(numbers) / sizeof(int);
    int index;
    int myNum;

    cout << "Enter an element to search for: " << endl;
    cin >> myNum;

    index = searchArray(numbers, size, myNum);

    if (index != -1) {
        cout << "Element found at index " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }

    return 0;
}

int searchArray(int array[], int size, int element) { 
    for (int i = 0; i < size; i++) {
        if (array[i] == element) {
            return i;
        }
    }
    return -1; // Element not found
}
