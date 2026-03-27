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
import { PayPost } from '@/features/cart/api/categories'

export default function StepSummary() {
	const { product, categorie, phone, setStep } = useCartStore()

	const handleConfirm = async () => {
		try {
			const response = await PayPost({
				id: categorie?.id || '',
				phone: phone,
			})
			alert('TRANSACCION EXITOSA')
			if (response.status === 201) {
				setStep(0)
			}
		} catch (error) {
			console.error('Error fetching categories:', error)
			alert('TRANSACCION NO EXITOSA, INTENTE DE NUEVO')
		} finally {
		}
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
								{formatPrice(categorie?.amount)}
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
