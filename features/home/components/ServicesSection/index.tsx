import { RiCheckboxCircleLine } from '@remixicon/react'

export default function ServicesSection() {
	return (
		<section id="servicios" className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="text-center space-y-4 mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-balance">
						Más de 20 servicios disponibles
					</h2>
					<p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
						Todo lo que necesitas pagar, en un solo lugar
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-card rounded-lg p-8 space-y-6 border">
						<div className="space-y-3">
							<h3 className="text-xl font-bold">Recargas</h3>
							<p className="text-muted-foreground text-sm">
								Tiempo aire para todos los operadores del país
							</p>
						</div>
						<ul className="space-y-2">
							{[
								'Telcel',
								'AT&T',
								'Movistar',
								'Y más de 6 operadores',
							].map((item) => (
								<li
									key={item}
									className="flex items-center gap-2 text-sm"
								>
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="bg-card rounded-lg p-8 space-y-6 border">
						<div className="space-y-3">
							<h3 className="text-xl font-bold">Servicios</h3>
							<p className="text-muted-foreground text-sm">
								Paga todos tus servicios básicos sin salir de
								casa
							</p>
						</div>
						<ul className="space-y-2">
							{['CFE', 'CEA', 'Internet', 'Y más servicios'].map(
								(item) => (
									<li
										key={item}
										className="flex items-center gap-2 text-sm"
									>
										<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
										<span>{item}</span>
									</li>
								),
							)}
						</ul>
					</div>
					<div className="bg-card rounded-lg p-8 space-y-6 border">
						<div className="space-y-3">
							<h3 className="text-xl font-bold">
								Entretenimiento (Próximamente)
							</h3>
							<p className="text-muted-foreground text-sm">
								El regalo perfecto para cualquier ocasión
							</p>
						</div>
						<ul className="space-y-2">
							{[
								'Netflix',
								'Xbox',
								'Spotify',
								'Y más plataformas',
							].map((item) => (
								<li
									key={item}
									className="flex items-center gap-2 text-sm"
								>
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export { ServicesSection }
