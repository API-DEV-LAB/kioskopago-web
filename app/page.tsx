'use client'

import { useState } from 'react'
import { Header } from '@/src/features/home/components/Header'
import { Input } from '@/components/ui/input'
import { RiSearchLine } from '@remixicon/react'
import Image from 'next/image'
import { RechargeStepper } from '@/components/recharge-stepper'

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

export default function HomePage() {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedService, setSelectedService] = useState<string | null>(null)

	const filteredServices = services.filter((service) =>
		service.name.toLowerCase().includes(searchQuery.toLowerCase()),
	)

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
			<Header />
			<div className="container mx-auto flex-1 flex">
				<div className="w-1/2 border-r p-6 overflow-y-auto">
					<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-8 mt-8">
						<div className="flex flex-col md:flex-row gap-4">
							<div className="flex-1 relative">
								<RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
								<Input
									type="text"
									placeholder="Telcel, AT&T, CFE, CEA"
									value={searchQuery}
									onChange={(e) =>
										setSearchQuery(e.target.value)
									}
									className="pl-10"
								/>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-4 gap-4">
						{filteredServices.map((service) => (
							<div
								key={service.id}
								onClick={() => setSelectedService(service.name)}
								className={`group cursor-pointer transition-all hover:shadow-md ${
									selectedService === service.name
										? 'ring-2 ring-primary'
										: ''
								}`}
							>
								<div className="aspect-square relative mb-3 overflow-hidden rounded-md">
									<Image
										src={
											service.image || '/placeholder.svg'
										}
										alt={service.name}
										fill
										className="object-cover transition-transform group-hover:scale-105"
									/>
								</div>
								<h3 className="text-center text-sm font-bold uppercase">
									{service.name}
								</h3>
							</div>
						))}
					</div>

					{filteredServices.length === 0 && (
						<div className="text-center py-12 text-muted-foreground">
							No se encontraron servicios
						</div>
					)}
				</div>

				<div className="w-1/2 p-6 overflow-y-auto">
					{selectedService ? (
						<RechargeStepper serviceName={selectedService} />
					) : (
						<div className="flex items-center justify-center h-full">
							<p className="text-muted-foreground text-sm">
								Selecciona un servicio
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
