// Oveloaded constructors = multiple constructors w/ same name but different parameters
//                          allows for varying arguments when instantiating an objects

#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Pizza {
public: 
	string topping1;
	string topping2;

	Pizza(){
	}

	Pizza(string topping1){
		this->topping1 = topping1;
	}

		Pizza(string topping1, string topping2){
		this->topping1 = topping1;
		this->topping2 = topping2;
	}

};

int main() {

Pizza pizza1("pepperoni");
Pizza pizza2("cheese, sausage");
Pizza pizza3;

cout << pizza2.topping1 << endl;
cout << pizza2.topping2 << endl;

return 0;
}