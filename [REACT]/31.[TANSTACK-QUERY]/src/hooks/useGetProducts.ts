import { useQuery } from '@tanstack/react-query'
import productService from '../services/product.service'

export const useGetProducts = () => {
	return useQuery({
    queryKey: ['cars', 1],
    queryFn: () => productService.getAll(),
    select: ({ data }) => data,
  })
}