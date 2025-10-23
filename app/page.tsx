import { Header } from '@/features/home/components/Header'
import { ServicesContainer } from '@/features/services/components/ServicesContainer'
import { SearchBar } from '@/features/home/components/SearchBar'
import { CartContainer } from '@/features/cart/components/CartContainer'
import { SheetServices } from '@/features/services/components/SheetServices'

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
			<Header />
			<div className="container mx-auto flex-1 flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 md:border-r p-6 overflow-y-auto">
					<SearchBar />
					<ServicesContainer />
				</div>

				<div className="hidden md:block md:w-1/2 p-6 overflow-y-auto">
					<CartContainer />
				</div>
			</div>
			<SheetServices />
		</div>
	)
}
