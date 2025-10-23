import Image from 'next/image'

interface ServicesItemProps {
	id: string
	name: string
	image: string
	setSelectedService: (e: string) => void
	selectedService: string | null | undefined
}

export default function ServicesItem({
	name,
	image,
	setSelectedService,
	selectedService,
}: ServicesItemProps) {
	return (
		<div
			onClick={() => {
				setSelectedService(name)
			}}
			className={`group cursor-pointer transition-all hover:shadow-md ${
				selectedService === name ? 'ring-2 ring-primary' : ''
			}`}
		>
			<div className="aspect-square relative mb-3 overflow-hidden rounded-md">
				<Image
					src={image}
					alt={name}
					fill
					className="object-cover transition-transform group-hover:scale-105"
				/>
			</div>
			<h3 className="text-center text-sm font-bold uppercase">{name}</h3>
		</div>
	)
}

export { ServicesItem }
