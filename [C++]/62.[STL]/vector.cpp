#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    // Create a vector
    vector<int> vect;

    // Initial capacity of the vector
    cout << "Initial capacity of vector: " << vect.capacity() << endl;

    // Add elements to the vector
    vect.push_back(10);
    vect.push_back(50);
    vect.push_back(30);
    vect.push_back(20);
    vect.push_back(40);

    // Display elements of the vector
    cout << "Elements of the vector:";
    for(int x : vect) {
        cout << " " << x;
    }
    cout << endl;

    // Remove an element from the end of the vector and add a new one
    vect.pop_back(); 
    vect.push_back(40);

    // Iterator for traversing the vector
    vector<int>::iterator i;

    // Before sorting
    cout << "Before sorting:";
    for(i = vect.begin(); i != vect.end(); i++) {
        cout << " " << *i;
    }
    cout << endl;

    // Sort the vector
    sort(vect.begin(), vect.end());

    // After sorting
    cout << "After sorting:";
    for(i = vect.begin(); i != vect.end(); i++) {
        cout << " " << *i;
    }
    cout << endl;

    // Perform binary search on the vector
    bool result = binary_search(vect.begin(), vect.end(), 30);
    cout << "Binary search result for element 30: " << result << endl;

    // Reverse the vector
    reverse(vect.begin(), vect.end());
    cout << "After reversing:";
    for(i = vect.begin(); i != vect.end(); i++) {
        cout << " " << *i;
    }
    cout << endl;

    // Find minimum and maximum elements in the vector
    cout << "Minimum element: " << *min_element(vect.begin(), vect.end()) << endl;
    cout << "Maximum element: " << *max_element(vect.begin(), vect.end()) << endl;

    return 0;
}
