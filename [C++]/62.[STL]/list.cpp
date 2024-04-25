#include <iostream>
#include <list>

using namespace std;

int main() {
    // Define a list of integers
    list<int> num = {10, 20, 30, 40, 50};
    
    // Print the elements of the list using range-based for loop
    cout << "Elements of the list: ";
    for(int i : num) {
        cout << i << " ";
    }
    cout << endl;
    
    // Add elements to the front and back of the list
    num.push_front(5);
    num.push_back(70);
    cout << "After push_front(5) and push_back(70): ";
    
    // Print the elements of the list using iterators
    for(auto it = num.begin(); it != num.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Create a new list and initialize it with elements of the first list
    list<int> num2(num);
    cout << "Elements of list 2:" << endl;
    for(int i : num2) {
        cout << i << endl;
    }
    
    return 0;
}
