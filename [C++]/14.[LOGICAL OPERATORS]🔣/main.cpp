// && (AND) = check if two conditions are true
// || (OR) = check if one of two conditions are true
// ! = rverse the result, true becomes false, false becomes true

#include <iostream>
#include <iomanip>

using namespace std;

int main() {
	int temp;
	bool sunny = false;

	cout << "Enter the temperature: ";
	cin >> temp;

	if(temp <= 0 || temp >= 30){
		cout << "The temperature is bad!\n";
	}
	else{
		cout << "The temperature is good!\n";
	}
	if(!sunny){
		cout << "It is sunny outside!.";
	}
	else{
		cout << "It is cloudy outside!.";
	}

}