import StepContainer from '../StepContainer'

export default function CartContainer() {
	return (
		<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mt-8">
			<h2 className="text-2xl font-bold mb-1">Completa tu recarga</h2>
			<p className="text-base text-muted-foreground mb-8">
				Sigue los pasos para realizar tu recarga
			</p>
			<StepContainer />
		</div>
	)
}

export { CartContainer }
