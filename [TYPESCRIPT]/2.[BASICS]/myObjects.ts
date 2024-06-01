type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  readonly year: CarYear; // Adding readonly
  type?: CarType; // Adding optional
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

const car: Car = {
  year: carYear,
  // type: carType, // You can comment this line out to make it optional
  model: carModel,
};
