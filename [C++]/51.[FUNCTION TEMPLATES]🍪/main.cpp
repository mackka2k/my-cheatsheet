// function template = describes what a function looks like.
//                     Can be used to generate as many functions as we need.
// 									   each, using different data types.

//                     Ex. "It's like a cookie cutter..."
//                     "Cookies are the same shape, but the dough used can be different."

#include <iostream>
#include <iomanip>

template <typename T, typename U>
auto max(T x, U y) {
    return (x > y) ? x : y;
}

int main() {
    std::cout << max(3, 5.2) << '\n';

    return 0;
}