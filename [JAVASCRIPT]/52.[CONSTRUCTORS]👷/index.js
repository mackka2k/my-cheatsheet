// constructor = a special method of a class,
//               accepts arguments and assigns properties

class Student {
	constructor(name, age, gpa) {
		this.name = name
		this.age = age
		this.gpa = gpa
	}
	study() {
		console.log(`${this.name} is studying`)
	}
}

const student1 = new Student('John', 19, 3.8)
const student2 = new Student('Jane', 20, 3.9)
const student3 = new Student('Jack', 21, 3.7)

console.log(student1.name)
console.log(student1.age)
console.log(student1.gpa)

student1.study()

console.log(student2.name)
console.log(student2.age)
console.log(student2.gpa)

student2.study()

console.log(student3.name)
console.log(student3.age)
console.log(student3.gpa)

student3.study()
