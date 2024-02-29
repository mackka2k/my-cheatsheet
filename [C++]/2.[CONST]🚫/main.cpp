#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    // The const keyword is used to make a variable constant, meaning that it cannot be changed.

    const double PI = 3.14159;
    double radius = 10;
    double circumference = 2 * PI * radius;
    
    cout << "Circumference: " << circumference << '\n';
}
