'use client'
import { useState, useEffect } from 'react'
import { ServicesItem } from '@/features/services/components/ServicesItem'
import { ServicesServicesGet } from '@/features/services/api/services'
import { ServiceCategory, Company } from '@/features/services/types/types'
import ServicesContainerLoading from './ServicesContainerLoading'
import { useCartStore } from '@/features/cart/store/cart'
import { TYPE_SERVICE, PATH_CART } from '@/shared/utils/constants'

export default function ServicesContainer() {
	const { setType, setProduct, setStep } = useCartStore()
	const [selectedService, setSelectedService] = useState<ServiceCategory>()
	const [services, setServices] = useState<ServiceCategory[]>([])
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

	const handleSelectedService = (service: ServiceCategory) => {
		setSelectedService(service)
		setProduct(service)
		setStep(PATH_CART.CATEGORIES)
	}

	if (isLoading) {
		return (
			<div className="space-y-6 mt-4">
				{Array.from({ length: 5 }).map((_, index) => (
					<ServicesContainerLoading key={index} />
				))}
			</div>
		)
	}

	return (
		<div className="space-y-6 mt-4 mb-[60px]">
			<div className="grid grid-cols-3 gap-4">
				{services?.map((service: ServiceCategory) => (
					<ServicesItem
						key={service.id}
						id={service.id}
						name={service.name}
						image={service.icon}
						selectedService={selectedService?.name}
						setSelectedService={() =>
							handleSelectedService(service)
						}
					/>
				))}
			</div>
		</div>
	)
}

export { ServicesContainer }
