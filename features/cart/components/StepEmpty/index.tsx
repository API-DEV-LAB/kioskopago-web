import { RiShoppingBagLine } from '@remixicon/react'

export default function StepEmpty() {
	return (
		<div className="min-h-[450px] flex items-center justify-center h-full p-8">
			<div className="text-center space-y-4 max-w-sm">
				<div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
					<RiShoppingBagLine className="w-8 h-8 text-primary" />
				</div>
				<div className="space-y-2">
					<h3 className="text-lg font-semibold text-foreground">
						Selecciona un servicio
					</h3>
					<p className="text-sm text-muted-foreground leading-relaxed">
						Elige un servicio de la lista para comenzar con el
						proceso de compra
					</p>
				</div>
			</div>
		</div>
	)
}

export { StepEmpty }
