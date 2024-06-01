// STL- STANDART TEMPLATE LIBRARY. 
// IS A COLLECTION OF C++ TEMPLATE CLASESS, FUNCTIONS TO PROVIDE COMMON PROGRAMMING DATA STRUCTURES AND FUNCTIONS SUCH AS LISTS, STACKS, ARRAYS, ETC.

// STL includes 3 main components:
// 1. [Containers]: 
//    - A collection of classes that store data. [Vectors, lists, stacks, queues, etc.]
// 2. [Algorithms]:
//    - A collection of functions for performing various operations on containers. [Sorting, searching, counting, manipulating, etc.]
// 3. [Iterators]:
//    - A collection of iterators that can be used to traverse the elements of containers.
//    - Iterator functions are: [begin(), end(), rbegin(), rend(), cbegin(), cend(), crbegin(), crend()]

#include <iostream>
#include <array>

using namespace std;

int main() {
    array<int, 5> arr = {10, 20, 30, 40, 50}; // specify the size as 5
    int size = arr.size();
    cout << "Size of array: " << size << endl;
    for(int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    cout << "2nd element: " << arr.at(1) << endl;
    cout << "Array is empty: " << arr.empty() << endl;
    cout << "First element: " << arr.front() << endl;
    cout << "Last element: " << arr.back() << endl;
    return 0;
}


