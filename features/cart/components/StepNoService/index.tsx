'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RiArrowRightLine } from '@remixicon/react'

export default function StepNoService() {
	const [serviceNumber, setServiceNumber] = useState<string>('')

	const handleNextStep = () => {}

	const handlePreviousStep = () => {}
	return (
		<div className="space-y-4">
			<div className="space-y-8">
				<div className="space-y-2">
					<Label htmlFor="phone">
						El monto a aplicará a este número de recibo
					</Label>
					<Input
						id="phone"
						type="text"
						placeholder="000000000000001"
						value={serviceNumber}
						onChange={(e) => setServiceNumber(e.target.value)}
					/>
				</div>

				<Card className="rounded-lg">
					<CardContent className="space-y-2">
						<p className="text-sm font-semibold text-muted-foreground">
							Encuentra aqui el número de recibo o referencia
						</p>
						<div className='flex justify-center mt-4'>
							<Image
								src="https://res.cloudinary.com/dtstx7rhx/image/upload/v1752637388/cea_reference.png"
								width={250}
								height={350}
								alt="foto del recibo"
							/>
						</div>
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

export { StepNoService }
