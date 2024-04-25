#include <iostream>
#include <chrono>
#include <thread>

using namespace std;
using namespace std::chrono;

// Function to perform some time-consuming task
void timeConsumingTask() {
    // Simulate a time-consuming task by sleeping for 2 seconds
    this_thread::sleep_for(2s);
}

int main() {
    // Measure the execution time of a time-consuming task
    auto start = high_resolution_clock::now(); // Get the current time
    timeConsumingTask(); // Call the time-consuming task
    auto end = high_resolution_clock::now(); // Get the current time again

    // Calculate the elapsed time
    auto duration = duration_cast<milliseconds>(end - start);

    // Output the elapsed time in various formats
    cout << "Elapsed time: " << duration.count() << " milliseconds" << endl;
    cout << "Elapsed time: " << duration.count() / 1000.0 << " seconds" << endl;

    // Format the elapsed time using the chrono formatting library
    auto formattedTime = duration_cast<seconds>(duration); // Changed from chrono::seconds to seconds
    cout << "Formatted elapsed time: " << formattedTime.count() << " seconds" << endl; // Use count() to get the duration as seconds

    // Perform time conversions
    auto now = system_clock::now();
    time_t nowTime = system_clock::to_time_t(now);
    cout << "Current time: " << ctime(&nowTime);

    // Add a duration to the current time
    auto futureTime = now + hours(24);
    time_t futureTimeT = system_clock::to_time_t(futureTime);
    cout << "Future time after 24 hours: " << ctime(&futureTimeT);

    return 0;
}
