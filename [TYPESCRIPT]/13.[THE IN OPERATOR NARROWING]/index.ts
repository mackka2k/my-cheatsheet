// Define a type for a vehicle object
type Vehicle = {
	type: 'car' | 'bike';
	wheels: number;
};

// Function to describe vehicle based on its properties
function describeVehicle(vehicle: Vehicle): void {
	console.log(`This is a ${vehicle.type}.`);

	// Narrow down the type of vehicle based on the number of wheels
	if (vehicle.wheels === 4) {
			console.log('It is a four-wheeler.');
	} else if (vehicle.wheels === 2) {
			console.log('It is a two-wheeler.');
	} else {
			console.log('It has an unknown number of wheels.');
	}
}

// Example usage
const car: Vehicle = { type: 'car', wheels: 4 };
const bike: Vehicle = { type: 'bike', wheels: 2 };
const unknownVehicle: Vehicle = { type: 'car', wheels: 3 };

describeVehicle(car); // Output: This is a car. It is a four-wheeler.
describeVehicle(bike); // Output: This is a bike. It is a two-wheeler.
describeVehicle(unknownVehicle); // Output: This is a car. It has an unknown number of wheels.
