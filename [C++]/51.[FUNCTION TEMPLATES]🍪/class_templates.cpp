#include <iostream>

template <typename T>
class Container {
private:
    T item;
public:

    Container(T i) : item(i) {}

    // Method to get the item
    T getItem() const {
        return item;
    }

    void setItem(T i) {
        item = i;
    }
};

int main() {
    using namespace std;

    // Create a Container of integers
    Container<int> intContainer(42);
    cout << "Item in intContainer: " << intContainer.getItem() << endl;

    // Create a Container of characters
    Container<char> charContainer('A');
    cout << "Item in charContainer: " << charContainer.getItem() << endl;

    return 0;
}
