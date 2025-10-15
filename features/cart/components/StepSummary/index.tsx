'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { formatPhoneNumber, getDateNow } from '@/shared/utils/formats'

export default function StepSummary() {
    const handleNewRecharge = () => {}
    const handlePreviousStep = () => {}

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
								Id de compra:
							</span>
							<span className="text-sm font-medium">
								011
							</span>
						</div>
						<div className="flex justify-between py-2 border-b">
							<span className="text-sm text-muted-foreground">
								Número de celular:
							</span>
							<span className="text-sm font-medium">
								{formatPhoneNumber('4422331155')}
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
								Telcel
							</span>
						</div>
						<div className="flex justify-between py-2 border-b">
							<span className="text-sm text-muted-foreground">
								Paquete:
							</span>
							<span className="text-sm font-medium">
                                Paquete Premium
							</span>
						</div>
						<div className="pt-3 space-y-2">
							<div className="flex justify-between">
								<span className="text-sm text-muted-foreground">
									Subtotal:
								</span>
								<span className="text-sm font-medium">
                                    $ 200.00
								</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm text-muted-foreground">
									Comisión (10%):
								</span>
								<span className="text-sm font-medium">
									$ 200.00
								</span>
							</div>
							<div className="flex justify-between pt-2 border-t-2">
								<span className="text-base font-semibold">
									Total:
								</span>
								<span className="text-lg font-bold text-primary">
									$ 200.00
								</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="flex justify-between pt-4">
				<Button variant="outline" onClick={handlePreviousStep}>
					Atrás
				</Button>
				<div className="space-x-2">
					<Button variant="outline" onClick={handleNewRecharge}>
						Nueva recarga
					</Button>
					<Button>Confirmar recarga</Button>
				</div>
			</div>
		</div>
	)
}

export { StepSummary }
