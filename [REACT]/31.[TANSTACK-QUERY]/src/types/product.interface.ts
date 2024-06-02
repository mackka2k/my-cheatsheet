export interface IProduct {
	id: number
	name: string
	price: string
	image: string
}

export interface IProductData extends Omit<IProduct, 'id'> {}