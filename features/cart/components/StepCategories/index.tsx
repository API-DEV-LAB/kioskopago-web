'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { RiArrowRightLine } from '@remixicon/react'
import { CategoriesResponse } from '@/features/cart/types/types'
import { formatPrice } from '@/shared/utils/formats'
import { CartCategoriesGet } from '@/features/cart/api/categories'
import StepCategoriesLoading from './StepCategoriesLoading'
import { useCartStore } from '@/features/cart/store/cart'
import { PATH_CART } from '@/shared/utils/constants'

export default function StepCategories() {
	const { categorie, setStep, setCategorie } = useCartStore()
	const [categories, setCategories] = useState<CategoriesResponse[] | null>(
		null,
	)
	const [selectedPackage, setSelectedPackage] =
		useState<CategoriesResponse | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [_, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				setIsLoading(true)
				const response = await CartCategoriesGet()
				// @ts-ignore
				setCategories(response)
			} catch (error) {
				console.error('Error fetching categories:', error)
				setError('Error al cargar los servicios')
			} finally {
				setIsLoading(false)
			}
		}

		fetchCategories()
	}, [])

	const handlePackageSelect = (packageId: string) => {
		const pkg = categories?.find((p) => p.id === packageId)
		if (pkg) {
			setSelectedPackage(pkg)
			setCategorie(pkg)
		}
	}

	const handleNextStep = () => {
		setStep(PATH_CART.PHONE)
	}

	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-bold mb-1">Completa tu recarga</h2>
			<p className="text-base text-muted-foreground mb-8">
				Sigue los pasos para realizar tu recarga
			</p>
			<div>
				<h3 className="text-sm font-semibold mb-4">
					Selecciona un paquete
				</h3>
				<RadioGroup
					value={selectedPackage?.id}
					onValueChange={handlePackageSelect}
					className="max-h-[350px] overflow-x-auto"
				>
					<div className="space-y-3">
						{isLoading &&
							Array.from({ length: 3 }).map((_, index) => (
								<StepCategoriesLoading key={index} />
							))}
						{categories?.map((pkg) => (
							<label
								key={pkg.id}
								className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
									selectedPackage?.id === pkg.id ||
									categorie?.id === pkg.id
										? 'border-primary bg-primary/5'
										: 'border-border'
								}`}
							>
								<RadioGroupItem
									value={pkg.id}
									id={pkg.id}
									className="mt-1"
								/>
								<div className="flex-1 space-y-1">
									<div className="flex items-center justify-between">
										<p className="text-base font-semibold">
											{pkg.name}
										</p>
										<p className="text-xl font-bold text-primary">
											{formatPrice(pkg.total)}
										</p>
									</div>
									<p className="text-sm text-muted-foreground">
										{pkg.description}
									</p>
									<p className="text-xs text-muted-foreground">
										{`Vigencia de ${pkg.expired} días`}
									</p>
								</div>
							</label>
						))}
					</div>
				</RadioGroup>
			</div>
			<div className="flex justify-end pt-4">
				<Button onClick={handleNextStep} disabled={!selectedPackage}>
					Continuar
					<RiArrowRightLine />
				</Button>
			</div>
		</div>
	)
}

export { StepCategories }
