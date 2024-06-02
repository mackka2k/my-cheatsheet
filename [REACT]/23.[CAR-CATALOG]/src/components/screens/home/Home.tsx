import { useQuery } from '@tanstack/react-query'
import { CarService } from '../../../services/car.service'
import Catalog from '../../ui/Catalog'
import Header from '../../ui/Header'
import CreateCarForm from './create-car-form/CreateCarForm'

function Home() {
    const { data, isLoading } = useQuery({
        queryKey: ['get cars'],
        queryFn: () => CarService.getAll(),
    })

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <h1>Cars catalog</h1>
            <Header />
            <CreateCarForm />
            <Catalog data={data} />
        </div>
    )
}

export default Home
