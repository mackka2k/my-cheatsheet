#include <iostream>
#include <string>  // Include the string header

using namespace std;

void bakePizza();
void bakePizza(string topping1);
void bakePizza(string topping1, string topping2);

int main() {
    bakePizza();
    bakePizza("Pepperoni");
    bakePizza("Pepperoni", "Mushroom");

    return 0;
}

void bakePizza() {
    cout << "Here is your pizza!\n";
}

void bakePizza(string topping1) {
    cout << "Here is your " << topping1 << " pizza!\n";
}

void bakePizza(string topping1, string topping2) {
    cout << "Here is your " << topping1 << " and " << topping2 << " pizza!\n";
}
