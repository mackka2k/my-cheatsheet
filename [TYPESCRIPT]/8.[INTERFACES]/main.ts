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
