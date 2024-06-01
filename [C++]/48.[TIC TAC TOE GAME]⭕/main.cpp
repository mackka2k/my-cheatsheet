#include <iostream>
#include <iomanip>
#include <ctime>

using namespace std;

void drawBoard(char *spaces);
void playerMove(char *spaces, char player);
void computerMove(char *spaces, char computer);
bool checkWinner(char *spaces, char player, char computer);
bool checkTie(char *spaces);

int main() {
    char spaces[9] = {' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '};
    char player = 'X';
    char computer = 'O';
    bool running = true;

    while (running) {
        drawBoard(spaces);
        playerMove(spaces, player);
        if (checkWinner(spaces, player, computer)) {
            cout << "You win! Congratulations!" << endl;
            break;
        }
        if (checkTie(spaces)) {
            cout << "It's a tie!" << endl;
            break;
        }

        drawBoard(spaces);
        computerMove(spaces, computer);
        if (checkWinner(spaces, player, computer)) {
            cout << "Computer wins! Better luck next time." << endl;
            break;
        }
        if (checkTie(spaces)) {
            cout << "It's a tie!" << endl;
            break;
        }
    }

    return 0;
}

void drawBoard(char *spaces) {
    cout << " " << spaces[0] << " | " << spaces[1] << " | " << spaces[2] << endl;
    cout << "-----------" << endl;
    cout << " " << spaces[3] << " | " << spaces[4] << " | " << spaces[5] << endl;
    cout << "-----------" << endl;
    cout << " " << spaces[6] << " | " << spaces[7] << " | " << spaces[8] << endl;
}

void playerMove(char *spaces, char player) {
    int position;
    cout << "Enter your move (1-9): ";
    cin >> position;

    // Check if the chosen position is valid and not already taken
    if (position >= 1 && position <= 9 && spaces[position - 1] == ' ') {
        spaces[position - 1] = player;
    } else {
        cout << "Invalid move. Try again." << endl;
        playerMove(spaces, player);  // Recursive call for a valid move
    }
}

void computerMove(char *spaces, char computer) {
    int position;
    
    // Generate a random move for the computer
    do {
        position = rand() % 9;
    } while (spaces[position] != ' ');

    spaces[position] = computer;
}

bool checkWinner(char *spaces, char player, char computer) {
    // Check rows, columns, and diagonals for a winner
    for (int i = 0; i < 3; ++i) {
        if ((spaces[i] == player && spaces[i + 3] == player && spaces[i + 6] == player) ||
            (spaces[i * 3] == player && spaces[i * 3 + 1] == player && spaces[i * 3 + 2] == player)) {
            return true;
        }
    }

    if ((spaces[0] == player && spaces[4] == player && spaces[8] == player) ||
        (spaces[2] == player && spaces[4] == player && spaces[6] == player)) {
        return true;
    }

    return false;
}

bool checkTie(char *spaces) {
    // Check if the board is full (no empty spaces)
    for (int i = 0; i < 9; ++i) {
        if (spaces[i] == ' ') {
            return false; // There is an empty space, the game can continue
        }
    }
    return true; // The board is full, it's a tie
}
