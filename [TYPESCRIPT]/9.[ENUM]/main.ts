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
