'use client'
import { useState } from 'react'
import { ServicesItem } from '@/features/home/components/ServicesItem'

const services = [
	{
		id: 1,
		name: 'CFE',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599941/cfe.jpg',
	},
	{
		id: 2,
		name: 'CEA',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599871/cea.png',
	},
	{
		id: 3,
		name: 'Telcel',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599088/telcel.jpg',
	},
	{
		id: 4,
		name: 'Movistar',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599307/movistar.jpg',
	},
	{
		id: 5,
		name: 'AT&T',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599381/att.png',
	},
	{
		id: 6,
		name: 'Bait',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599474/bait.webp',
	},
	{
		id: 7,
		name: 'Virgin',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599540/virgin.png',
	},
	{
		id: 8,
		name: 'Unefon',
		image: 'https://res.cloudinary.com/dtzcyvuqi/image/upload/v1758599808/unefon.png',
	},
]

export default function ServicesContainer() {
	const [selectedService, setSelectedService] = useState<string | null>(null)
	return (
		<div className="grid grid-cols-4 gap-4">
			{services.map(({ id, name, image }) => (
				<ServicesItem
					key={id}
					id={id.toString()}
					name={name}
					image={image}
					selectedService={selectedService}
					setSelectedService={setSelectedService}
				/>
			))}
		</div>
	)
}

export { ServicesContainer }
