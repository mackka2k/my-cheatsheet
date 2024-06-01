#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

// cout << (insertation operator) 
// cin >> (extraction operator) 

int main() {

	double a = 3;
	double b = 4;
	double c;

		c = max(a, b); // maximum
		cout << c << '\n';

		c = min(a, b); // minimum
		cout << c << '\n';

		c = pow(2, 3); // 2^3 (2 laipsnis 3)
		cout << c << '\n';

		c = sqrt(144); // šaknys iš 144
		cout << c << '\n';

		c = round(2.7); // apvalinimas 
		cout << c << '\n';

		c = ceil(2.1); // apvalinimas į didesnę pusę
		cout << c << '\n';

		c = floor(2.9); // apvalinimas į mažesnę pusę 
		cout << c << '\n';

		c = abs(-10); // absoliutus skaičius (modulis) 
		cout << c << '\n';

		cos(a); // cosinusas
		cout << c << '\n';

		sin(a); // sinusas
	    cout << c << '\n';
		
		tan(a); // tangensas
	    cout << c << '\n';

		return 0;
}
