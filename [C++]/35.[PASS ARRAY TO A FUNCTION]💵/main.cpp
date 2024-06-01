#include <iostream>
#include <iomanip>

using namespace std;

double getTotal(double prices[], int size);

int main() {

double prices[] = { 9.99, 10.99, 5.99, 7.99, 8.99 };
int size = sizeof(prices)/sizeof(double);
double total = getTotal(prices, size);

cout << '$' << total;

return 0;
}

double getTotal(double prices[], int size) {
	double total = 0;

	for(int i = 0; i < size; i++) {
		total += prices[i];
	}
	
	return total;
}