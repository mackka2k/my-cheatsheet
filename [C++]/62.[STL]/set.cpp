// STL- STANDART TEMPLATE LIBRARY. 
// IS A COLLECTION OF C++ TEMPLATE CLASESS, FUNCTIONS TO PROVIDE COMMON PROGRAMMING DATA STRUCTURES AND FUNCTIONS SUCH AS LISTS, STACKS, ARRAYS, ETC.

// STL includes 3 main components:
// 1. [Containers]: 
//    - A collection of classes that store data. [Vectors, lists, stacks, queues, etc.]
// 2. [Algorithms]:
//    - A collection of functions for performing various operations on containers. [Sorting, searching, counting, manipulating, etc.]
// 3. [Iterators]:
//    - A collection of iterators that can be used to traverse the elements of containers.
//    - Iterator functions are: [begin(), end(), rbegin(), rend(), cbegin(), cend(), crbegin(), crend()]

#include <iostream>
#include <set>

using namespace std;

int main() {

		set <int, greater<int>> s1;
		s1.insert(10);
		s1.insert(20);
		s1.insert(5);
		s1.insert(2);
		s1.insert(50);
		s1.insert(10);

		for (int i : s1) {
				cout << i << " ";
		}
		set<int, greater<int>> s2(s1.begin(), s1.end());
		cout << "S2 elements: ";
		set<int, greater<int>>::iterator i;
		for (i = s2.begin(); i != s2.end(); i++) {
				cout << *i << " ";
		}
		s2.erase(s2.begin(), s2.find(5));
		cout << "S2 elements after erase up to 20: ";
				for (i = s2.begin(); i != s2.end(); i++) {
				cout << *i << " ";
		}
    return 0;
}


