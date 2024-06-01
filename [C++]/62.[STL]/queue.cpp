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
#include <queue>

using namespace std;

int main() {

		queue<int> s;
    s.push(10);
		s.push(20);
		s.push(30);
		s.push(40);
		s.push(50);

		cout << "Top element: " << s.front() << endl;
		s.pop();
		cout << "Top element after pop: " << s.front() << endl;
		cout << "Size of queue: " << s.size() << endl;
		cout << "Is queue empty: " << s.empty() << endl;
		while(!s.empty()) {
				cout << s.front() << " ";
				s.pop();
		}
		cout << "Is queue empty: " << s.empty() << endl;
    return 0;
}


