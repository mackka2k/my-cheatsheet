#include <iostream>
#include <iomanip>
#include <vector>
// typedef = reserved keyword that creates an additional name (alias) for an another data type.

// typedef std::vector<std::pair<std::string, int>> pairList_t; 
// typedef std::string text_t;
// typedef int number_t;
using text_t = std::string;
using number_t = int;
int main() {

text_t name = "John";
number_t age = 20;

std::cout << name << '\n';
std::cout << age << '\n';

return 0;
}