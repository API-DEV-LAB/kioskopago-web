import { WalletCard } from '@/features/order/components/WalletCard'
import { SalesList } from '@/features/order/components/SalesList'

export default function HistorialPage() {
	return (
		<main className="w-full max-w-3xl mx-auto px-4 py-8">
			<div className="space-y-2 mb-8">
				<h1 className="text-2xl font-bold">Historial de compras</h1>
				<p className="text-muted-foreground">
					Gestiona y revisa todas las compras realizadas
				</p>
			</div>
			<WalletCard
				saldo="12500.50"
				noCompras="41"
				totalCompras="5549.90"
			/>
			<SalesList />
		</main>
	)
}
