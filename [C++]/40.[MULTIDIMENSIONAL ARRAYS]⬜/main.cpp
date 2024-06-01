#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

	string cars[3][3] = {{"Chevy", "Camaro", "Corvette"},{"Ford", "Mustang", "GT"},{"Dodge", "Charger", "Challenger"}};

	// cout << cars[0][0] << " "; // Chevy
	// cout << cars[0][1] << " "; // Camaro
	// cout << cars[0][2] << " "; // Corvette
	// cout << endl;
	// cout << cars[1][0] << " "; // Ford
	// cout << cars[1][1] << " "; // Mustang
	// cout << cars[1][2] << " "; // GT
	// cout << endl;
	// cout << cars[2][0] << " "; // Dodge
	// cout << cars[2][1] << " "; // Charger
	// cout << cars[2][2] << " "; // Challenger

	int rows = sizeof(cars)/sizeof(cars[0]);
	int cols = sizeof(cars[0])/sizeof(cars[0][0]);

	for(int i = 0; i < rows; i++)
	{
		for(int j = 0; j < cols; j++) 
		{
			cout << cars[i][j] << " ";
		}
		cout << endl;
	}

return 0;
}