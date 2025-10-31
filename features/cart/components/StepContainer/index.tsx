'use client'
import StepCategories from '../StepCategories'
import StepPhone from '../StepPhone'
import StepSummary from '../StepSummary'
import StepNoService from '../StepNoService'
import StepAmount from '../StepAmount'
import { useCartStore } from '@/features/cart/store/cart'

export default function StepContainer() {
	const { step } = useCartStore()

	const STEPS_COMPONENTS = [
		<StepCategories key="CATEGORIES" />,
		<StepNoService key="NOSERVICE" />,
		<StepPhone key="PHONE" />,
		<StepAmount key="AMOUNT" />,
		<StepSummary key="SUMMARY" />,
	]
	return (
		<div className="min-h-[400px]">
			{step !== null && STEPS_COMPONENTS[step]}
		</div>
	)
}

export { StepContainer }
