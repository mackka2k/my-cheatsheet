// A generic class Pair to hold a pair of values of any type
class Pair<T, U> {
	private first: T;
	private second: U;

	constructor(first: T, second: U) {
			this.first = first;
			this.second = second;
	}

	getFirst(): T {
			return this.first;
	}

	getSecond(): U {
			return this.second;
	}
}

// Example usage
const pair1 = new Pair<number, string>(1, "one");
console.log(pair1.getFirst()); // Output: 1
console.log(pair1.getSecond()); // Output: one

const pair2 = new Pair<string, boolean>("true", true);
console.log(pair2.getFirst()); // Output: true
console.log(pair2.getSecond()); // Output: true
