type TypeUser = {
	name: string
	age: number
}

type TypeAdress = {
	city: string
	country: string
}

const adress: TypeAdress = {
	city: 'New York',
	country: 'USA',
}

const user: TypeUser = {
	name: 'John Doe',
	age: 30,
}

let common: TypeUser & TypeAdress

common = {
	...user,
	...adress,
}
