#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int getDigit(const int number);
int sumOddDigits(const string& cardNumber);
int sumEvenDigits(const string& cardNumber);
bool isValidCreditCard(const string& cardNumber);

int main() {
    string cardNumber;
    int result = 0;

    cout << "Enter a credit card number: ";
    cin >> cardNumber;
    
    if (isValidCreditCard(cardNumber)) {
        result = sumOddDigits(cardNumber) + sumEvenDigits(cardNumber);
        cout << "Result: " << result << endl;
    } else {
        cout << "Invalid credit card number." << endl;
    }

    return 0;
}

int getDigit(const int number) {
    return number % 10;
}

int sumOddDigits(const string& cardNumber) {
    int sum = 0;
    for (size_t i = 0; i < cardNumber.length(); i += 2) {
        int digit = cardNumber[i] - '0';
        sum += digit;
    }
    return sum;
}

int sumEvenDigits(const string& cardNumber) {
    int sum = 0;
    for (size_t i = 1; i < cardNumber.length(); i += 2) {
        int digit = cardNumber[i] - '0';
        sum += getDigit(digit * 2);
    }
    return sum;
}

bool isValidCreditCard(const string& cardNumber) {
    int totalSum = sumOddDigits(cardNumber) + sumEvenDigits(cardNumber);

    return (totalSum % 10 == 0);
}
