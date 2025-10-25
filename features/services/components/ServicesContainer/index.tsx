'use client'
import { useState, useEffect } from 'react'
import { ServicesItem } from '@/features/services/components/ServicesItem'
import { ServicesServicesGet } from '@/features/services/api/services'
import { Service } from '@/features/services/types/types'
import ServicesContainerLoading from './ServicesContainerLoading'
import { useCartStore } from '@/features/cart/store/cart'

export default function ServicesContainer() {
	const { setType, setProduct, setStep } = useCartStore()
	const [selectedService, setSelectedService] = useState<Service | null>(null)
	const [services, setServices] = useState<Service[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [_, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchServices = async () => {
			try {
				setIsLoading(true)
				const response = await ServicesServicesGet()
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

	const handleSelectedService = (service: Service) => {
		setSelectedService(service)
		setProduct(service)
		setType(service.type)
		if (service.type === 'SERVICE') setStep(1)
		else setStep(0)
	}

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
			{services?.map((s: Service) => (
				<ServicesItem
					key={s?.id}
					id={s?.id.toString()}
					name={s?.name}
					image={s?.image}
					selectedService={selectedService?.name}
					setSelectedService={() => handleSelectedService(s)}
				/>
			))}
		</div>
	)
}

export { ServicesContainer }
