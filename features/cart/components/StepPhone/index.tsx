'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PHONE_MAX, PHONE_PLACEHOLDER} from '@/shared/utils/constants'
import { RiArrowRightLine } from '@remixicon/react'

export default function StepPhone() {
	const [phoneNumber, setPhoneNumber] = useState<string>('')

	const handleNextStep = () => {}

	const handlePreviousStep = () => {}
	return (
		<div className="space-y-4">
			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="phone">
						El monto se aplicará a este número celular
					</Label>
					<Input
						id="phone"
						type="tel"
						placeholder={PHONE_PLACEHOLDER}
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
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
								Telcel
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Recarga de saldo:
							</span>
							<span className="text-sm font-bold text-primary">
								$200
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Paquete:
							</span>
							<span className="text-sm font-medium">
								Paquete Premium
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Vigencia:
							</span>
							<span className="text-sm font-medium">7 días</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Descripción:
							</span>
							<span className="text-sm font-medium">
								2 GB + 200 minutos
							</span>
						</div>
                        <div className='mt-4'>
							<a href='https://www.telcel.com/' target='_blank'>
							<span className="text-sm text-muted-foreground">
                                Dudas o aclaraciones *264. Saldo de regalo $2,
                                Vigencia de saldo 7 días, Whatsapp llimitado, 500 MB
                                redes sociales (5 días), Mas información
                                https://www.telcel.com/
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
					disabled={phoneNumber.length !== PHONE_MAX}
				>
					Continuar
					<RiArrowRightLine />
				</Button>
			</div>
		</div>
	)
}

export { StepPhone }
