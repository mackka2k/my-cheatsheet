#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main() {

 string questions[] = {"1. What year was C++ created?: ", "2. Who invented C++?: ", "3. What is the predecessor of C++: ", "4. Is the Earth flat?"};

 string options[4][4] = {{"a. 1980", "b. 1979", "c. 1970", "d. 1985"},
 												{"a. Bjarne Stroustrup", "b. Dennis Ritchie", "c. James Gosling", "d. Steve Jobs"}, 
 												{"a. C", "b. C#", "c. B", "d. A"}, 
												{"a. Yes", "b. No", "c. Maybe", "d. I don't know"}};

	char answerKey[] = {'a', 'a', 'a', 'b'};

	int size = sizeof(questions)/sizeof(questions[0]);
	char guess;
	int score;

for (int i = 0; i < size; i++) {
	cout << "***************************\n";
	cout << questions[i] << endl;
	cout << "***************************\n";
	for (int j = 0; j < 4; j++) {
		cout << options[i][j] << endl;
	}
	cout << "Enter your answer: ";
	cin >> guess;
	if (guess == answerKey[i]) {
		cout << "Correct!\n";
		score++;
	}
	else {
		cout << "Incorrect!\n";
		cout << "The correct answer is: " << answerKey[i] << endl;
	}
}

cout << "***************************\n";
cout << "      *	RESULTS	 *        \n";
cout << "***************************\n";
cout << "CORRECT GUESSES: " << score << endl;
cout << "# OF QUESTIONS: " << size << endl;
cout << "SCORE: " << (score/(double)size)*100 << "%" << endl;
 
return 0;
}