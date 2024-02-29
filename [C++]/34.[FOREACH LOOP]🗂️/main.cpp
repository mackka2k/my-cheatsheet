// foreach loop = loop that eases the traversal over an iterable data set

#include <iostream>
#include <iomanip>

using namespace std;

int main() {

int grades[] = { 1, 2, 3, 4, 5 };

for(int grade : grades) {
	cout << grade << endl;
}

return 0;
}