// fill() == fills a range of elements with a specified value
//           fill(begin, end, value)

#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main() {
	  const int SIZE = 99;
    string foods[SIZE]; 

    fill(foods, foods + (SIZE/3), "pizza"); // fill first third of array with "pizza"
		fill(foods + (SIZE/3), foods + (SIZE/3)*2, "hamburger"); // fill second third of array with "hamburger"
		fill(foods + (SIZE/3)*2, foods + SIZE, "hotdog"); // fill last third of array with "hotdog"
    
		for (string food : foods) {
        cout << food << endl;
    }

    return 0;
}
