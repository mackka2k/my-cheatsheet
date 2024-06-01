// break = break out of loop
// continue = skip current iteration

#include <iostream>
#include <iomanip>

using namespace std;

int main() {

for(int i = 1; i <= 20; i++) {
	
	if(i == 13) {
		continue;
	}
	cout << i << endl;
}

return 0;
}