#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

struct Car {
    string model;
    int year;
    string color;
};

void paintCar(Car &car, string newColor);
void printCar(Car &car);

int main() {
    Car car1;
    Car car2;

    car1.model = "Mustang";
    car1.year = 1967;
    car1.color = "blue";

    car2.model = "Camaro";
    car2.year = 1969;
    car2.color = "green";

    paintCar(car1, "red");
    paintCar(car2, "black");

    printCar(car1);
    printCar(car2);

    return 0;
}

void printCar(Car &car) {
    cout << car.model << " " << car.year << " " << car.color << endl;
}

void paintCar(Car &car, string color) {
    car.color = color;
}
