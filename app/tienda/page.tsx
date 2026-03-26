import { ServicesContainer } from '@/features/services/components/ServicesContainer'
import { SearchBar } from '@/features/home/components/SearchBar'
import { StepContainer } from '@/features/cart/components/StepContainer'
import { SheetServices } from '@/features/services/components/SheetServices'

export default function DashboardPage() {
	return (
		<>
			<main className="container mx-auto px-4 py-8 flex-1 flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 md:border-r px-4 overflow-y-auto">
					<div className="space-y-2 mb-8">
						<h1 className="text-2xl font-bold">
							Hola, mi tienda.com
						</h1>
						<p className="text-muted-foreground">
							Bienvenido a Kioskopago
						</p>
					</div>
					<SearchBar />
					<ServicesContainer />
				</div>

				<div className="hidden md:block md:w-1/2 overflow-y-auto px-4">
					<StepContainer />
				</div>
			</main>
			<SheetServices />
		</>
	)
}
