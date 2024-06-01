#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

class Animal {
public: 
    bool alive = true;
};

class Dog : public Animal {
public: 
    void bark() {
        cout << "This dog barks." << endl;
    }

    void eat() {
        cout << "This dog eats." << endl;
    }
};

class Cat : public Animal {
public: 
    void meow() {
        cout << "This cat meows." << endl;
    }

		void eat() {
				cout << "This cat eats." << endl;
		}
};

int main() {
    Dog dog;
    Cat cat;

    cout << "Is the dog alive? " << dog.alive << endl;
    dog.eat();
    dog.bark();

    cout << "Is the cat alive? " << cat.alive << endl;
    cat.eat();
    cat.meow();

    return 0;
}
