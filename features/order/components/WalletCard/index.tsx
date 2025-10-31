import { Card, CardContent } from '@/components/ui/card'
import { formatPrice } from '@/shared/utils/formats'

interface WalletCardProps {
	saldo: string
	noCompras: string
	totalCompras: string
}

export default function WalletCard({
	saldo,
	noCompras,
	totalCompras,
}: WalletCardProps) {
	return (
		<Card className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white border-0 rounded-lg">
			<CardContent className="p-6 space-y-6">
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="text-sm opacity-80">
							Saldo disponible
						</span>
					</div>
					<p className="md:text-5xl font-bold text-3xl">
						{formatPrice(saldo)}
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
					<div className="space-y-1">
						<div className="flex items-center gap-2">
							<span className="text-xs opacity-70">
								Número de compras
							</span>
						</div>
						<p className="font-semibold text-xl">{noCompras}</p>
					</div>
					<div className="space-y-1">
						<div className="flex items-center gap-2">
							<span className="text-xs opacity-70">
								Total de compras
							</span>
						</div>
						<p className="font-semibold text-xl">
							{formatPrice(totalCompras)}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export { WalletCard }
