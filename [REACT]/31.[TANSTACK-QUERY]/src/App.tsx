import { useMutation } from '@tanstack/react-query'
import { SyntheticEvent, useState } from 'react'
import { useGetProducts } from './hooks/useGetProducts'
import productService from './services/product.service'
import { IProductData } from './types/product.interface'

const clearData: IProductData = {
  name: '',
  price: '',
  image: ''
}

function App() {
  const { isLoading, data } = useGetProducts()

  const [product, setProduct] = useState<IProductData>(clearData)

  const { mutate } = useMutation({
    mutationKey: ['create product'],
    mutationFn: (data: IProductData) => productService.create(data),
    onSuccess: () => {
      setProduct(clearData)
      alert('Product created!')
    }
  })

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    mutate(product)
  }

  return (
    <div>
      <h1>Tanstack Query</h1>

      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={product.name}
          onChange={e => setProduct(prev => ({
            ...prev,
            name: e.target.value
          }))}
          placeholder='Enter name'
        />
        <br />
        <input
          type='text'
          value={product.price}
          onChange={e => setProduct(prev => ({
            ...prev,
            price: e.target.value
          }))}
          placeholder='Enter price'
        />
        <br />
        <input
          type='text'
          value={product.image}
          onChange={e => setProduct(prev => ({
            ...prev,
            image: e.target.value
          }))}
          placeholder='Enter image URL'
        />
        <br />
        <button type='submit'>Create</button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div style={{
          marginTop: 20,
          display: 'flex',
          gap: 50,
        }}>
          {data?.length ? (
            data.map((product) => (
              <div key={product.id}>
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    width='220px'
                    style={{ borderRadius: 15 }}
                  />
                </div>
                <h2>{product.name}</h2>
                <p>{product.price}$</p>
              </div>
            ))
          ) : (
            <div>Products not found!</div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
