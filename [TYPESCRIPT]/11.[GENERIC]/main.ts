// Generics in TypeScript provide the same flexibility and reusability as templates in C++.
// They allow you to define functions, classes, and interfaces that can work with any type,
// while still maintaining strong type checking.

function entity1<T>(args: T): T {
	return args;
}

entity1<number>(1);
entity1<string>('Hello World');

const entity2 = <T>(args: T): T => {
	return args;
};

entity2<number>(2);
entity2<string>('Hello TypeScript');

class Channel<T> {
	private name: T;
	constructor(name: T) {
		this.name = name;
	}

	getName(): T {
		return this.name;
	}
}

const channel1 = new Channel<string>('Hello World');
const channel2 = new Channel<number>(1);

new Channel<string>('Hello World').getName();
new Channel<number>(1).getName();

interface IPair<K, V> {
	// Correctly define the generic type parameters K and V
	key: K;
	value: V;
}

const pair1: IPair<string, number> = {
	key: 'age',
	value: 30,
};

const pair2: IPair<number, string> = {
	key: 30,
	value: 'age',
};
