#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

char getUserChoice();
char getComputerChoice();
void showChoice(char choice);
void chooseWinner(char userChoice, char computerChoice);

int main() {
    char player;
    char computer;

    player = getUserChoice();
    cout << "Your choice: ";
    showChoice(player);

    computer = getComputerChoice();
    cout << "Computer choice: ";
    showChoice(computer);

    chooseWinner(player, computer);

    return 0;
}

char getUserChoice() {
    char choice;
		cout << "--------------------------" << endl;
		cout << "Rock, Paper, Scissors Game" << endl;
		cout << "--------------------------" << endl;
    cout << "Enter your choice (R for Rock, P for Paper, S for Scissors): ";
    cin >> choice;
    return toupper(choice);
}

char getComputerChoice() {
    int random = rand() % 3;
    if (random == 0)
        return 'R';
    else if (random == 1)
        return 'P';
    else
        return 'S';
}

void showChoice(char choice) {
    switch (choice) {
        case 'R':
            cout << "Rock";
            break;
        case 'P':
            cout << "Paper";
            break;
        case 'S':
            cout << "Scissors";
            break;
        default:
            cout << "Invalid choice";
    }
    cout << endl;
}

void chooseWinner(char userChoice, char computerChoice) {
    if (userChoice == computerChoice) {
        cout << "It's a tie!" << endl;
    } else if ((userChoice == 'R' && computerChoice == 'S') ||
               (userChoice == 'P' && computerChoice == 'R') ||
               (userChoice == 'S' && computerChoice == 'P')) {
        cout << "You win!" << endl;
    } else {
        cout << "Computer wins!" << endl;
    }
}
