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
