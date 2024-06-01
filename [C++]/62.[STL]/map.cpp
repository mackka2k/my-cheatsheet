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
#include <map>

using namespace std;

int main() {

		map<int, string> m;
		m.insert(pair<int, string>(1, "C"));
		m.insert(pair<int, string>(2, "C++"));
		m.insert(pair<int, string>(3, "Java"));
		m.insert(pair<int, string>(4, "SQL"));

		cout<<"Size of the map is:" << m.size() << endl;
		cout<<"Key 3 is in the map: " << m.count(3) << endl;

		map<int, string>::iterator it;
		for(it = m.begin(); it != m.end(); it++) {
				cout << it->first << " " << it->second << endl;
		}

		cout << "Find 3 Value: " << endl;
		it = m.find(3);
		cout << it->first << " " << it->second << endl;

    return 0;
}


