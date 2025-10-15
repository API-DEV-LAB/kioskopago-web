'use client'
import { useState } from 'react'
import PriceInput from '@/components/ui/input-price'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RiArrowRightLine } from '@remixicon/react'

export default function StepAmount() {
	const [amount, setAmount] = useState<string>('')

	const handleNextStep = () => {}

	const handlePreviousStep = () => {}
	return (
		<div className="space-y-4">
			<div className="space-y-8">
				<PriceInput
					label="Ingresa el monto a pagar"
					value={amount}
					onChange={setAmount}
					required
					helperText="Debes ingresar la cantidad exacta a pagar, incluyendo centavos."
				/>

				<Card className="rounded-lg">
					<CardContent className="space-y-2">
						<p className="text-sm font-semibold text-muted-foreground">Observaciones</p>
						<span className="text-sm text-muted-foreground">
							Los recibos vencidos no son aceptados. El pago se vera aplicado en 72 horas.
						</span>
					</CardContent>
				</Card>
			</div>
			<div className="flex justify-between pt-4">
				<Button variant="outline" onClick={handlePreviousStep}>
					Atrás
				</Button>
				<Button onClick={handleNextStep}>
					Continuar
					<RiArrowRightLine />
				</Button>
			</div>
		</div>
	)
}

export { StepAmount }
