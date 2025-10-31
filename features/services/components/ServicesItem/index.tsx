import Image from 'next/image'
import { useSheetOpenStore } from '@/features/services/store/sheetOpen'
import { WIDTH_BREAKPOINT_MD } from '@/shared/utils/constants'

interface ServicesItemProps {
	id: number | null
	name: string | null
	image: string | null
	setSelectedService: (e: string | null) => void
	selectedService: string | null | undefined
}

export default function ServicesItem({
	name,
	image,
	setSelectedService,
	selectedService,
}: ServicesItemProps) {
	const { setIsSheetOpen } = useSheetOpenStore()
	return (
		<div
			onClick={() => {
				setSelectedService(name)
				if (window.innerWidth < WIDTH_BREAKPOINT_MD) {
					setIsSheetOpen(true)
				}
			}}
			className={`group cursor-pointer transition-all hover:shadow-md ${
				selectedService === name ? 'ring-2 ring-primary' : ''
			}`}
		>
			<div className="aspect-square relative mb-3 overflow-hidden rounded-lg">
				{image && name && (
					<Image
						src={image}
						alt={name}
						fill
						className="object-cover transition-transform group-hover:scale-105"
					/>
				)}
			</div>
			<h3 className="text-center text-sm font-bold uppercase">{name}</h3>
		</div>
	)
}

export { ServicesItem }
