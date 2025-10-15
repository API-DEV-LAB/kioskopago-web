import StepCategories from '../StepCategories'
import StepPhone from '../StepPhone'
import StepSummary from '../StepSummary'
import StepNoService from '../StepNoService'
import StepAmount from '../StepAmount'

export default function CartContainer() {
	return (
		<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mt-8">
			<h2 className="text-2xl font-bold mb-1">Completa tu recarga</h2>
			<p className="text-base text-muted-foreground mb-8">
				Sigue los pasos para realizar tu recarga
			</p>
			<div className="min-h-[400px]">
                <StepAmount />
				<StepCategories />
				<StepNoService />
				<StepPhone />
				<StepSummary />
			</div>
		</div>
	)
}

export { CartContainer }
