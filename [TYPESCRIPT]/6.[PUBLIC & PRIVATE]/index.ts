class Car_1 {
	private _engine: string;
	public color: string;

	constructor(engine: string, color: string) {
			this._engine = engine;
			this.color = color;
	}

	start(): void {
			console.log(`Starting ${this._engine} engine...`);
	}
}

const myCar = new Car_1("V8", "red");

// Accessing public property
console.log(myCar.color); // Output: red

// Accessing private property - This will result in an error
// console.log(myCar._engine); // Error: Property '_engine' is private and only accessible within class 'Car'.

// Calling a public method
myCar.start(); // Output: Starting V8 engine...
