import { Header } from '@/features/home/components/Header'
import { RechargeStepper } from '@/components/recharge-stepper'
import { ServicesContainer } from '@/features/home/components/ServicesContainer'
import { SearchBar } from '@/features/home/components/SearchBar'

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
			<Header />
			<div className="container mx-auto flex-1 flex">
				<div className="w-1/2 border-r p-6 overflow-y-auto">
					<SearchBar />
					<ServicesContainer />
				</div>

				<div className="w-1/2 p-6 overflow-y-auto">
					<RechargeStepper serviceName={'selectedService'} />
				</div>
			</div>
		</div>
	)
}
