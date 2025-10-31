'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { formatPhone, formatPrice, getDateNow } from '@/shared/utils/formats'
import { useCartStore } from '@/features/cart/store/cart'

export default function StepSummary() {
	const { product, categorie, phone, setStep } = useCartStore()
	const handleConfirm = () => {
		setStep(0)
	}

	const handlePreviousStep = () => {
		setStep(2)
	}

	return (
		<div className="space-y-4">
			<div>
				<Card className="rounded-lg">
					<CardHeader>
						<CardTitle>Detalles de la recarga</CardTitle>
						<CardDescription>
							Verifica los datos antes de confirmar
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-3">
						<div className="flex justify-between py-2 border-b">
							<span className="text-sm text-muted-foreground">
								Número de celular:
							</span>
							<span className="text-sm font-medium">
								{formatPhone(phone)}
							</span>
						</div>
						<div className="flex justify-between py-2 border-b">
							<span className="text-sm text-muted-foreground">
								Fecha:
							</span>
							<span className="text-sm font-medium">
								{getDateNow()}
							</span>
						</div>
						<div className="flex justify-between py-2 border-b">
							<span className="text-sm text-muted-foreground">
								Servicio:
							</span>
							<span className="text-sm font-medium">
								{product?.name}
							</span>
						</div>
						<div className="flex justify-between py-2 border-b">
							<span className="text-sm text-muted-foreground">
								Paquete:
							</span>
							<span className="text-sm font-medium">
								{categorie?.name}
							</span>
						</div>
						<div className="flex justify-between py-2">
							<span className="text-sm text-muted-foreground">
								Total:
							</span>
							<span className="text-sm font-bold text-primary">
								{formatPrice(categorie?.total)}
							</span>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="flex justify-between pt-4">
				<Button variant="outline" onClick={handlePreviousStep}>
					Atrás
				</Button>
				<Button onClick={handleConfirm}>Confirmar recarga</Button>
			</div>
		</div>
	)
}

export { StepSummary }
