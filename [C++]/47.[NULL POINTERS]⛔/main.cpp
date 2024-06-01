// NULL value = a special value that means "no value".
// 							When a pointer is holding a null value,
// 							it is not pointing to anything (null pointer).

// nullptr = keyword represents a null pointer.

// nullptrs are helpful when determining if an adress
// was successfully assigned to a pointer.

// When using pointer, be careful that your code isn't
// dereferencing a nullptr or pointing to free memory
// this will couse undefined behavior.

#include <iostream>
#include <iomanip>

using namespace std;

int main() {

    int *pointer = nullptr;

    int x = 123;
		pointer = &x;

    // Check if the pointer is pointing to anything (not assigned)
    if (pointer == nullptr) {
        cout << "Address was not assigned!" << endl;
    } else {
        cout << "Address was assigned!" << endl;
        cout << "Pointer Address: " << pointer << endl;
    }
    return 0;
}