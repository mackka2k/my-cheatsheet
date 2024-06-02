import axios from 'axios';
import { IProduct, IProductData } from '../types/product.interface';

class ProductService {
	private URL = 'http://localhost:4200/cars'

		async getAll() {
			return axios.get<IProduct[]>(this.URL)
		}

		async getById(id: string) {
			return axios.get<IProduct>(`${this.URL}/${id}`)
		}

		async create(data: IProductData) {
			return axios.post(this.URL, data)
		}
}

export default new ProductService();