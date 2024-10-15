#  ----TYPESCRIPT---- 
---

# 0. [ TS-Config ]

This is a configuration file for TypeScript that defines how the TypeScript compiler works for your project:

`EXAMPLE: `
```json
{
	"compilerOptions": {
		/* Visit https://aka.ms/tsconfig to read more about this file */

		/* Projects */
		// "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
		// "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
		// "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
		// "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
		// "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
		// "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

		/* Language and Environment */
		"target": "es2023" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
		// "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
		// "jsx": "preserve",                                /* Specify what JSX code is generated. */
		// "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
		// "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
		// "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
		// "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
		// "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
		// "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
		// "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
		// "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
		// "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

		/* Modules */
		"module": "ESNext" /* Specify what module code is generated. */,
		// "rootDir": "./",                                  /* Specify the root folder within your source files. */
		// "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
		// "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
		// "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
		// "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
		// "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
		// "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
		// "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
		// "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
		// "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
		// "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
		// "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
		// "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
		// "resolveJsonModule": true,                        /* Enable importing .json files. */
		// "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
		// "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

		/* JavaScript Support */
		// "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
		// "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
		// "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

		/* Emit */
		// "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
		// "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
		// "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
		// "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
		// "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
		// "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
		// "outDir": "./",                                   /* Specify an output folder for all emitted files. */
		// "removeComments": true,                           /* Disable emitting comments. */
		// "noEmit": true,                                   /* Disable emitting files from a compilation. */
		// "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
		// "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
		// "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
		// "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
		// "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
		// "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
		// "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
		// "newLine": "crlf",                                /* Set the newline character for emitting files. */
		// "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
		// "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
		// "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
		// "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
		// "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
		// "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

		/* Interop Constraints */
		// "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
		// "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
		// "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
		"esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
		// "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
		"forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

		/* Type Checking */
		"strict": true /* Enable all strict type-checking options. */,
		// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
		// "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
		// "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
		// "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
		// "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
		// "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
		// "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
		// "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
		// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
		// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
		// "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
		// "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
		// "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
		// "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
		// "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
		// "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
		// "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
		// "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

		/* Completeness */
		// "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
		"skipLibCheck": true /* Skip type checking all .d.ts files. */
	},
	"files": ["tsconfig.json"]
}
```

---

# 1. [ Types ]

Types in TypeScript define what kind of data (like strings, numbers, objects) a variable can hold:

`EXAMPLE: `

```typescript

let entity: string
entity = 'Hello World'

let entity: boolean
entity = true

let entity: number
entity = 1

let entity: string[]
entity = ['Hello', 'World']

let entity: Array<string>
entity = ['Hello', 'World']

let entity: [string, number]
entity = ['Hello', 1]

let entity: any
entity = 'Hello World'

let entity: unknown
entity = 'Hello World'

let entity: void
entity = undefined

let entity: never
entity = undefined

let entity: null
entity = null

let entity: undefined
entity = undefined

let entity: object
entity = { key: 'value' }

let entity: {}
entity = { key: 'value' }

let entity: { key: string }
entity = { key: 'value' } 
```

---

# 2. [ Object structure ]

You can define the shape of an object with specific properties like name, age, and boolean flags.

`EXAMPLE: `

```typescript
const userProfile: {
	firstName: string;
	age: number;
	isOwner: boolean;
} = {
	firstName: 'John',
	age: 30,
	isOwner: true,
};
```

---

# 3. [ Arrays ]

Arrays store multiple values of the same type, like numbers or strings.

`EXAMPLE: `

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const numbers: Array<number> = [1, 2, 3, 4, 5];
const numbers: Array<string> = ['1', '2', '3', '4', '5']; 
```
---

# 4. [ Tuples ]

Tuples are like arrays but can hold a fixed number of elements of different types.

`EXAMPLE: `

```typescript
type TypeArray = [number, string, null]
const newArray: TypeArray = [1, 'Hello', null]
```
---

# 5. [ Functions ]

Functions in TypeScript can have types for their arguments and return values to ensure correctness.

`EXAMPLE: `

```typescript
type TypeChannelReturn = {
	name: string
}

function getChannel(name: string): TypeChannelReturn {
	return { name }
}

type TypeChannelFn = (name: string) => TypeChannelReturn

const getChannelName = (name: string): TypeChannelReturn => {
	return { name }
}

```
---

# 6. [ Class ]

A class is a blueprint for creating objects with properties and methods.

`EXAMPLE: `

```typescript
class Car {
	name: string
	price: number

	constructor(name: string, price: number) {
		this.name = name
		this.price = price
	}

	public getInfo(): string {
		return `The ${this.name} costs ${this.price}`
	}
}

class Bas extends Car {
	constructor(name: string, price: number) {
		super(name, price)
	}

	test() {
		console.log(this.getInfo())
	}
}

const myCar = new Car('Ferrari', 1000000)
console.log(myCar.getInfo()) // Accessing getInfo() from outside the class

```
---

# 7. [ Interfaces ]

Interfaces define the structure of an object, ensuring it has specific properties and types.

`EXAMPLE: `

```typescript 
interface IUserAge {
	age: number
}

interface IUser extends IUserAge {
	email: string
	name: string
}

type TypePerson = {
	age: number
}

type TypeUser1 = {
	email: string
	name: string
} & TypePerson

const user1: IUser = {
	email: 'basdasdfd@gmail.com',
	name: 'John Doe',
	age: 30,
}

const users: IUser[] = [
	{
		email: 'asdasd',
		name: 'John Doe',
		age: 30,
	},
]
```
---

# 8. [ Enum ]

Enums are special types that allow you to define a set of named constants, like roles or colors.

`EXAMPLE: `

```typescript
// same as constans but with more features

enum EnumRoles {
	ADMIN,
	GUEST,
	USER,
}

const enum EnumColors {
	RED,
	GREEN,
	BLUE,
}

interface IUser2 {
	role: EnumRoles
	color: EnumColors
}

const user2: IUser2 = {
	role: EnumRoles.ADMIN,
	color: EnumColors.RED,
}

```
---

# 9. [ Assertions ]

Type assertions tell TypeScript to treat a variable as a specific type when you know its type better than the compiler.

`EXAMPLE: `

```typescript
// assertions is when we dont know the type of a variable and we want to tell the compiler what type it is

const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value
```
---

# 10. [ Generic ]

Generics allow functions and classes to work with any data type while keeping the type safety.

`EXAMPLE: `

```typescript
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

```
---

# 11. [ Utility Types ]

Utility types modify existing types (e.g., making all properties optional or read-only).

`EXAMPLE: `

```typescript
interface IProduct {
	id: number;
	title: string;
	price: number;
	image: string;
}

// Define the IProductList interface which includes all properties of IProduct except 'id'
interface IProductList extends Omit<IProduct, 'id'> {}

// Define the IProductID interface which includes only the 'id' property from IProduct
interface IProductID extends Pick<IProduct, 'id'> {}

// Define the IOptionalProduct interface which makes all properties of IProduct optional
interface IOptionalProduct extends Partial<IProduct> {}

// Define the IRequiredProduct interface which makes all properties of IProduct required
interface IRequiredProduct extends Required<IProduct> {}

// Define the IProductReadOnly interface which makes all properties of IProduct read-only
interface IProductReadOnly extends Readonly<IProduct> {}

// Create an object of type IOptionalProduct where all properties are optional
const product: IOptionalProduct = {};

```
---

# 12. [ Extended Types ]

Extended types allow combining or transforming types using conditions and templates.

`EXAMPLE: `

```typescript
type TypeIsNumber<T> = T extends number ? 'yes' : 'no';

type Type1 = TypeIsNumber<number>; // 'yes'
type Type2 = TypeIsNumber<string>; // 'no'

type TypeBrand = 'apple' | 'microsoft' | 'google';
type TypePrice = '$100' | '$200' | '$300';

type TypePhone = `${TypeBrand} & ${TypePrice}`;

const phone: TypePhone = 'apple & $300';

```
---

# 13. [ Discriminated Union ]

A type that can be one of several types, and we can determine the type by checking a property (like kind).

`EXAMPLE: `

```typescript
// Define a union type for different shapes
type Shape = Square | Circle;

// Define interfaces for different shapes
interface Square {
    kind: 'square';
    size: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

// Function to calculate area based on shape
function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'square':
            return shape.size ** 2;
        case 'circle':
            return Math.PI * shape.radius ** 2;
        default:
            // Ensure exhaustiveness checking
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// Example usage
const square: Square = { kind: 'square', size: 5 };
const circle: Circle = { kind: 'circle', radius: 3 };

console.log(calculateArea(square)); // Output: 25
console.log(calculateArea(circle)); // Output: ~28.27

```
---

# 14. [ The In Operator Narrowing ]

The "in" operator is used to check if a property exists in an object and narrow its type based on that.

`EXAMPLE: `

```typescript
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

```
---

# 15. [ Abstract Class ]

Abstract classes provide a base structure for other classes, but cannot be directly instantiated.

`EXAMPLE: `

```typescript
abstract class Animal_2 {
	abstract makeSound_2(): void;
}

class Dog_2 extends Animal_2 {
	makeSound_2(): void {
			console.log("Woof!");
	}
}

const dog_2 = new Dog_2();
dog_2.makeSound_2(); // Output: Woof!

```
---

# 16. [ Protected ]

A protected property can only be accessed within its class and subclasses.


`EXAMPLE: `

```typescript 
class Animal {
	protected sound: string;

	constructor(sound: string) {
			this.sound = sound;
	}
}

class Dog_1 extends Animal {
	bark(): void {
			console.log("Barking: " + this.sound); // Accessing protected member from the base class
	}
}

const dog = new Dog_1("Woof!");
dog.bark(); // Output: Barking: Woof!
// console.log(dog.sound); // Error: Property 'sound' is protected and only accessible within class 'Animal' and its subclasses.

```
---

# 17. [ Public & Private ]

Public members can be accessed from outside a class, while private ones can only be accessed inside it.

`EXAMPLE: `

```typescript
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
```
---

# 18. [ Getters & Setters ]

Getters and setters allow you to control how properties are read and modified in a class.

`EXAMPLE: `

```typescript
class Person {
	private _name: string;
	private _age: number;

	constructor(name: string, age: number) {
			this._name = name;
			this._age = age;
	}

	get name(): string {
			return this._name;
	}

	set name(name: string) {
			this._name = name;
	}

	get age(): number {
			return this._age;
	}

	set age(age: number) {
			if (age >= 0 && age <= 120) {
					this._age = age;
			} else {
					console.log("Invalid age!");
			}
	}
}

const person = new Person("Alice", 30);

console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30

person.name = "Bob";
person.age = 25;

console.log(person.name); // Output: Bob
console.log(person.age); // Output: 25

person.age = 150; // Output: Invalid age!

```
---