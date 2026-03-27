'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	PHONE_MAX,
	PHONE_PLACEHOLDER,
	PATH_CART,
} from '@/shared/utils/constants'
import { formatPrice } from '@/shared/utils/formats'
import { RiArrowRightLine } from '@remixicon/react'
import { useCartStore } from '@/features/cart/store/cart'

export default function StepPhone() {
	const { product, categorie, phone, setPhone, setStep } = useCartStore()

	const handleNextStep = () => {
		setStep(PATH_CART.SUMMARY)
	}

	const handlePreviousStep = () => {
		setStep(PATH_CART.CATEGORIES)
	}
	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-bold mb-1">Completa tu recarga</h2>
			<p className="text-base text-muted-foreground mb-8">
				Sigue los pasos para realizar tu recarga
			</p>
			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="phone">
						El monto se aplicará a este número celular
					</Label>
					<Input
						id="phone"
						type="tel"
						placeholder={PHONE_PLACEHOLDER}
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						maxLength={PHONE_MAX}
					/>
				</div>

				<Card className="rounded-lg">
					<CardContent className="space-y-2">
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Compañia:
							</span>
							<span className="text-sm font-medium">
								{product?.name}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Recarga de saldo:
							</span>
							<span className="text-sm font-bold text-primary">
								{formatPrice(categorie?.amount)}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Paquete:
							</span>
							<span className="text-sm font-medium">
								{categorie?.name}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Vigencia:
							</span>
							<span className="text-sm font-medium">
								{categorie?.expired} días
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Descripción:
							</span>
							<span className="text-sm font-medium">
								{categorie?.description}
							</span>
						</div>
						<div className="mt-4">
							<a href="https://www.telcel.com/" target="_blank">
								<span className="text-sm text-muted-foreground">
									Dudas o aclaraciones *264. Saldo de regalo
									$2, Vigencia de saldo 7 días, Whatsapp
									llimitado, 500 MB redes sociales (5 días),
									Mas información https://www.telcel.com/
								</span>
							</a>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="flex justify-between pt-4">
				<Button variant="outline" onClick={handlePreviousStep}>
					Atrás
				</Button>
				<Button
					onClick={handleNextStep}
					disabled={phone.length !== PHONE_MAX}
				>
					Continuar
					<RiArrowRightLine />
				</Button>
			</div>
		</div>
	)
}

export { StepPhone }
