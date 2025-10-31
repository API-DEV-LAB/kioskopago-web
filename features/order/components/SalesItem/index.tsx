import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sale } from '@/features/order/types/types'
import { formatPrice, formatPhone } from '@/shared/utils/formats'
import { RiDownloadCloudLine } from '@remixicon/react'

const statusColors = {
	completado: 'bg-green-500/10 text-green-700 border-green-500/20',
	pendiente: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
	cancelado: 'bg-red-500/10 text-red-700 border-red-500/20',
}

const statusLabels = {
	completado: 'Completado',
	pendiente: 'Pendiente',
	cancelado: 'Cancelado',
}
export default function SalesItem({
	image,
	company,
	phone,
	total,
	date,
	status,
}: Sale) {
	return (
		<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md hover:bg-muted/50 transition-colors">
			<div className="flex items-center gap-4">
				<div className="flex-shrink-0">
					<div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
						<Image
							src={image}
							alt={company}
							width={56}
							height={56}
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
				<div className="flex-1 min-w-0">
					<div className="flex items-start justify-between gap-4 mb-1">
						<div>
							<h3 className="font-semibold text-slate-900 text-base">
								{company}
							</h3>
							<p className="text-sm text-slate-600">{formatPhone(phone)}</p>
						</div>
						<div className="text-right flex-shrink-0">
							<p className="font-bold text-lg text-slate-900">
								{formatPrice(total)}
							</p>
						</div>
					</div>
					<div className="flex items-center justify-between gap-4">
						<p className="text-xs text-slate-500">{date}</p>
						<div className="flex items-center gap-2">
							<Badge
								variant="outline"
								className={`${statusColors[status as keyof typeof statusColors]} text-xs`}
							>
								{
									statusLabels[
										status as keyof typeof statusLabels
									]
								}
							</Badge>
							<Button
								variant="outline"
								size="sm"
								onClick={() => {}}
								className="h-7 px-2"
							>
								<RiDownloadCloudLine className="h-3.5 w-3.5" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { SalesItem }
