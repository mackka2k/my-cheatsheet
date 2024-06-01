

#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

string students[] = { "John", "Jane", "Jack", "Jill" };

for(int i = 0; i < sizeof(students)/sizeof(string); i++) {
	cout << students[i] << endl;
}

return 0;
}