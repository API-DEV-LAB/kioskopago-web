export default function Footer() {
	const date = new Date()
	return (
		<footer className="border-t py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<span className="font-bold text-xl">Kioskopago</span>
						<p className="text-sm text-muted-foreground leading-relaxed">
							La forma más fácil de pagar todos tus servicios
						</p>
					</div>
					<div className="space-y-3">
						<h4 className="font-semibold">Legal</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Términos y condiciones
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Aviso de privacidad
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Preguntas frecuentes
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h4 className="font-semibold">Dirección</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Real de Carretas 104-502, Fracc. Milenio
									III, C.P. 76060, Querétaro, Qro.
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h4 className="font-semibold">Contacto</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>
								<a
									href="#"
									className="hover:text-foreground transition-colors"
								>
									44 22 22 22 22
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-foreground transition-colors"
								>
									kioskopago@info.com
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
					<p>
						© {date.getFullYear()} Kioskopago. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
