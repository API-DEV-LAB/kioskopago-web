import { RiCheckboxCircleLine } from '@remixicon/react'

const benefits = [
	{
		title: 'Sin comisiones ocultas',
		description: 'Precios transparentes y justos para tu negocio',
	},
	{
		title: 'Transacciones instantáneas',
		description: 'Procesa pagos y recargas en segundos',
	},
	{
		title: 'Historial completo',
		description: 'Consulta todas tus transacciones en cualquier momento',
	},
]

export default function BenefitsSection() {
	return (
		<section id="beneficios" className="bg-muted/30 py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-balance">
							¿Por qué elegir Kioskopago?
						</h2>
						<p className="text-lg text-muted-foreground text-pretty">
							La solución completa
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						{benefits.map((benefit) => (
							<div key={benefit.title} className="flex gap-4">
								<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
									<RiCheckboxCircleLine className="w-5 h-5 text-primary" />
								</div>
								<div className="space-y-1">
									<h3 className="font-semibold">{benefit.title}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{benefit.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export { BenefitsSection }
