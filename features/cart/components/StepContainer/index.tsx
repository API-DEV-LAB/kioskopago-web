'use client'
import StepEmpty from '@/features/cart/components/StepEmpty'
import StepCategories from '@/features/cart/components/StepCategories'
import StepPhone from '@/features/cart/components/StepPhone'
import StepSummary from '@/features/cart/components/StepSummary'
import StepNoService from '@/features/cart/components/StepNoService'
import StepAmount from '@/features/cart/components/StepAmount'
import { useCartStore } from '@/features/cart/store/cart'

export default function StepContainer() {
	const { step } = useCartStore()

	const STEPS_COMPONENTS = [
		<StepEmpty key="EMPTY" />,
		<StepCategories key="CATEGORIES" />,
		<StepNoService key="NOSERVICE" />,
		<StepPhone key="PHONE" />,
		<StepAmount key="AMOUNT" />,
		<StepSummary key="SUMMARY" />,
	]
	return (
		<div className="min-h-[450px]">
			{step !== null && STEPS_COMPONENTS[step]}
		</div>
	)
}

export { StepContainer }
