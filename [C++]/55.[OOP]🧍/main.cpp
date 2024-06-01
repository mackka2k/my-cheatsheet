// object = A collection of attributes an methods
//          They can have characteristics and could peform actions
//          Can be used to mimic real world items (ex. Phone, Car, Person, etc.)
//          Created from a class which acts as a "blue-print".

#include <iostream>
#include <iomanip>

using namespace std;

class Car {
		public:
			string make;
			string model;
			int year;
			string color;

			void accelerate() {
				cout << "You step on the gas!" << endl;
			}

			void brake() {
				cout << "You step on the brake!" << endl;
			}
};

int main() {

Car car1;

car1.make = "Ford";
car1.model = "Mustang";
car1.year = 1967;
car1.color = "blue";

cout << car1.make << endl;
cout << car1.model << endl;
cout << car1.year << endl;
cout << car1.color << endl;

car1.accelerate();
car1.brake();

return 0;
}