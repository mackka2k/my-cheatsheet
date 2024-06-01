#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ofstream outFile("example.txt", ios::app); // ios::app saves previaus data saved in the file.
    if(outFile.is_open()) {
        cout << "The file is open." << endl;
        outFile << "This is a line of text." << endl;
        outFile << "This is another line of text." << endl;
        outFile.close();
        cout << "The file is closed." << endl;
    }
    else {
        cout << "Could not open the file." << endl;
    }
    
    return 0;
}
