'use client'
import { useState, useEffect } from 'react'
import { ServicesItem } from '@/features/home/components/ServicesItem'
import { HomeServicesGet } from '@/features/home/api/services'
import { Service } from '@/features/home/types/types'
import ServicesContainerLoading from './ServicesContainerLoading'

export default function ServicesContainer() {
	const [selectedService, setSelectedService] = useState<string | null>(null)
	const [services, setServices] = useState<Service[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [_, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchServices = async () => {
			try {
				setIsLoading(true)
				const response = await HomeServicesGet()
				// @ts-ignore
				setServices(response)
			} catch (error) {
				console.error('Error fetching services:', error)
				setError('Error al cargar los servicios')
			} finally {
				setIsLoading(false)
			}
		}

		fetchServices()
	}, [])

	if (isLoading) {
		return (
			<div className="grid grid-cols-4 gap-4">
				{Array.from({ length: 8 }).map((_, index) => (
					<ServicesContainerLoading key={index} />
				))}
			</div>
		)
	}

	return (
		<div className="grid grid-cols-4 gap-4">
			{services?.map(({ id, name, image }) => (
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
