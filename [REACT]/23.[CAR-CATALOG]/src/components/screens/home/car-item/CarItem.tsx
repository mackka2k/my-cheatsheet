import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ICar } from '../../../../types/car.interface'
import styles from '../Home.module.css'

const CarItem: FC<{ car: ICar }> = ({ car }) => {
	return (
		<div className={styles.item}>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url(${car.image})`,
				}}
			/>
			<div className={styles.info}>
				<h2>{car.name}</h2>
				<p>
					{new Intl.NumberFormat('ru-RU', {
						style: 'currency',
						currency: 'USD',
					}).format(+car.price)}
				</p>
				<Link to={`/car/${car.id}`} className='btn'>
					Read more
				</Link>
			</div>
		</div>
	)
}

export default CarItem
