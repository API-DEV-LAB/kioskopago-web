export default function FeaturesSection() {
	return (
		<section id="caracteristicas" className="bg-muted/30 py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="text-center space-y-4 mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-balance">
						Todo lo que necesitas
					</h2>
					<p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
						Una plataforma diseñada para simplificar el pago de servicios.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-card rounded-lg p-6 space-y-4 border shadow-sm">
						<h3 className="text-xl font-bold">Registro Rápido</h3>
						<p className="text-muted-foreground leading-relaxed">
							Solo necesitas tu número de teléfono. Sin formularios largos ni
							complicaciones. En menos de 1 minuto ya estarás usando la
							plataforma.
						</p>
					</div>
					<div className="bg-card rounded-lg p-6 space-y-4 border shadow-sm">
						<h3 className="text-xl font-bold">Pagos Seguros</h3>
						<p className="text-muted-foreground leading-relaxed">
							Tus datos están protegidos con encriptación de nivel bancario.
							Guarda tus tarjetas de forma segura para pagos más rápidos.
						</p>
					</div>
					<div className="bg-card rounded-lg p-6 space-y-4 border shadow-sm">
						<h3 className="text-xl font-bold">Soporte 24/7</h3>
						<p className="text-muted-foreground leading-relaxed">
							¿Necesitas ayuda? Nuestro equipo está disponible por WhatsApp para
							resolver todas tus dudas al instante.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export { FeaturesSection }
