// function template = describes what a function looks like.
//                     Can be used to generate as many functions as we need.
// 									   each, using different data types.

//                     Ex. "It's like a cookie cutter..."
//                     "Cookies are the same shape, but the dough used can be different."

#include <iostream>

using namespace std;

template <typename T, typename Z>
Z findMax (T a , Z b) {
    return (a > b ? a : b);
}

int main() {

    double result = findMax<int, double>(5, 6.7);
    double doubleMax = findMax(10, 20.5);
    cout << "The max of integers is: " << result << endl;
    cout << "The max of double is: " << doubleMax << endl;
    return 0;
}
