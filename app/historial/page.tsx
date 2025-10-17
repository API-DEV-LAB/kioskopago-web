import { Header } from '@/features/home/components/Header'
import OrderContainer from '@/features/order/components/OrderContainer'

export default function HistorialPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
			<Header />

			<main className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-slate-900 mb-2">
						Historial de Compras
					</h1>
					<p className="text-slate-600">
						Gestiona y revisa todas las compras realizadas
					</p>
				</div>
				<OrderContainer />
			</main>
		</div>
	)
}
