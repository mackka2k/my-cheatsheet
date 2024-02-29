// Abstraction = hidding unnecessary data from outside a class
//               getter = function that makes a private attribute READABLE.
//							 setter = function that makes a private attribute WRITEABLE.

#include <iostream>
#include <iomanip>

using namespace std;

class Stove {
	private:
		int temperature = 0;
	public:
	Stove (int temperature) {
		setTemperature(temperature);
	}

	int getTemperature() { // getter
		return temperature;
	}

	void setTemperature(int temperature) { // setter
	  if (temperature < 0) {
	    this->temperature = 0;
	  }
		else if (temperature >= 10) {
			this->temperature = 10;
		}
		else
		this->temperature = temperature;
	}
};

int main() {

Stove stove(0);

cout << "Stove temperature: " << stove.getTemperature() << endl;

return 0;
}