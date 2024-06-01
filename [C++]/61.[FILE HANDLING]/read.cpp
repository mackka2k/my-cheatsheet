#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {

	ifstream inFile("example.txt");
	if (inFile.is_open()) {
		cout << "File Opened" << endl;
		string line;
		while (getline(inFile, line)) {
			cout << line << endl;
		}
		inFile.close();
	}
	else {
		cout << "Could not open the file." << endl;
	}  
    return 0;
}
