// bubble sort algorithm

#include <iostream>
#include <iomanip>

using namespace std;

// Function prototype
void sort(int array[], int size);

int main() {
    int array[] = {10, 1, 9, 2, 8, 3, 7, 4, 6, 5};
    int size = sizeof(array) / sizeof(int);

    // Call the sort function to sort the array
    sort(array, size);

    // Display the sorted array
    for (int element : array) {
        cout << element << " ";
    }

    return 0;
}

void sort(int array[], int size) {
    int temp;
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
