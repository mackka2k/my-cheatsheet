import { useForm } from 'react-hook-form'
import { ICarData } from '../../../../types/car.interface'
import styles from './CreateCarForm.module.css'
import { useCreateCar } from './useCreateCar'

const CreateCarForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ICarData>({
        mode: 'onChange',
    })

    const { createCar } = useCreateCar(reset)

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                {...register('name', { required: 'Name is required' })}
                placeholder='Name'
            />
            {errors?.name?.message && (
                <p style={{ color: 'red' }}>Name is required</p>
            )}
            <br />
            <input {...register('price', { required: true })} placeholder='Price' />
            <br />
            <input placeholder='Image' {...register('image', { required: true })} />
            <br />

            <button className='btn'>Create</button>
        </form>
    )
}

export default CreateCarForm
