import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ROUTES_APP } from '@/shared/utils/constants'
import { RiSmartphoneLine, RiCheckboxCircleLine } from '@remixicon/react'

export default function IndexPage() {
	return (
		<div className="min-h-screen bg-background">
			<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
				<div className="container mx-auto px-4 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="font-bold text-xl">Kioskopago</span>
					</div>
					<nav className="hidden md:flex items-center gap-6">
						<a
							href="#caracteristicas"
							className="text-sm font-medium hover:text-primary transition-colors"
						>
							Características
						</a>
						<a
							href="#servicios"
							className="text-sm font-medium hover:text-primary transition-colors"
						>
							Servicios
						</a>
						<a
							href="#beneficios"
							className="text-sm font-medium hover:text-primary transition-colors"
						>
							Beneficios
						</a>
					</nav>
					<Button asChild size="sm" className="rounded-full">
						<Link href={ROUTES_APP.REGISTER.path}>
							Registrar mi tienda
						</Link>
					</Button>
				</div>
			</header>
			<section className="container mx-auto px-4 py-16 md:py-24">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
							Gestiona todo en un solo lugar
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
							Recargas y servicios básicos. Todo desde tu móvil,
							sin filas ni complicaciones.
						</p>
						<div className="flex flex-col sm:flex-row gap-3 pt-4">
							<Button asChild size="lg" className="rounded-full">
								<Link href={ROUTES_APP.REGISTER.path}>
									Registrar mi tienda
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="rounded-full bg-transparent"
							>
								<Link href={ROUTES_APP.LOGIN.path}>
									Ya tengo cuenta
								</Link>
							</Button>
						</div>
					</div>
					<div className="relative">
						<div className="aspect-square bg-primary/10 rounded-3xl flex items-center justify-center p-8">
							<div className="w-full h-full bg-primary/20 rounded-2xl flex items-center justify-center">
								<RiSmartphoneLine className="w-32 h-32 text-primary" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id="caracteristicas"
				className="bg-muted/30 py-16 md:py-24"
			>
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-balance">
							Todo lo que necesitas
						</h2>
						<p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
							Una plataforma diseñada para simplificar el pago de
							servicios.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card rounded-lg p-6 space-y-4 border shadow-sm">
							<h3 className="text-xl font-bold">
								Registro Rápido
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Solo necesitas tu número de teléfono. Sin
								formularios largos ni complicaciones. En menos
								de 1 minuto ya estarás usando la plataforma.
							</p>
						</div>
						<div className="bg-card rounded-lg p-6 space-y-4 border shadow-sm">
							<h3 className="text-xl font-bold">Pagos Seguros</h3>
							<p className="text-muted-foreground leading-relaxed">
								Tus datos están protegidos con encriptación de
								nivel bancario. Guarda tus tarjetas de forma
								segura para pagos más rápidos.
							</p>
						</div>
						<div className="bg-card rounded-lg p-6 space-y-4 border shadow-sm">
							<h3 className="text-xl font-bold">Soporte 24/7</h3>
							<p className="text-muted-foreground leading-relaxed">
								¿Necesitas ayuda? Nuestro equipo está disponible
								por WhatsApp para resolver todas tus dudas al
								instante.
							</p>
						</div>
					</div>
				</div>
			</section>
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
									Tiempo aire para todos los operadores del
									país
								</p>
							</div>
							<ul className="space-y-2">
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>Telcel</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>AT&T</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>Movistar</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>Y más de 6 operadores</span>
								</li>
							</ul>
						</div>
						<div className="bg-card rounded-lg p-8 space-y-6 border">
							<div className="space-y-3">
								<h3 className="text-xl font-bold">Servicios</h3>
								<p className="text-muted-foreground text-sm">
									Paga todos tus servicios básicos sin salir
									de casa
								</p>
							</div>
							<ul className="space-y-2">
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>CFE</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>CEA</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>Internet</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>Y más servicios</span>
								</li>
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
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>Netflix</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>Xbox</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>Spotify</span>
								</li>
								<li className="flex items-center gap-2 text-sm">
									<RiCheckboxCircleLine className="w-4 h-4 text-primary flex-shrink-0" />
									<span>Y más plataformas</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
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
							<div className="flex gap-4">
								<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
									<RiCheckboxCircleLine className="w-5 h-5 text-primary" />
								</div>
								<div className="space-y-1">
									<h3 className="font-semibold">
										Sin comisiones ocultas
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Precios transparentes y justos para tu
										negocio
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
									<RiCheckboxCircleLine className="w-5 h-5 text-primary" />
								</div>
								<div className="space-y-1">
									<h3 className="font-semibold">
										Transacciones instantáneas
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Procesa pagos y recargas en segundos
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
									<RiCheckboxCircleLine className="w-5 h-5 text-primary" />
								</div>
								<div className="space-y-1">
									<h3 className="font-semibold">
										Historial completo
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Consulta todas tus transacciones en
										cualquier momento
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="bg-primary p-8 md:p-12 text-center space-y-6 rounded-xl">
						<h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
							¿Listo para simplificar tus pagos?&nbsp;
						</h2>
						<p className="text-lg text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
							Únete a cientos de tiendas que ya confían en
							Kioskopago para sus operaciones diarias
						</p>
						<div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
							<Button
								asChild
								size="lg"
								variant="secondary"
								className="rounded-full"
							>
								<Link href={ROUTES_APP.REGISTER.path}>
									Registrar mi tienda
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="rounded-full bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
							>
								<Link href={ROUTES_APP.LOGIN.path}>
									Ya tengo cuenta
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
			<footer className="border-t py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<span className="font-bold text-xl">
									Kioskopago
								</span>
							</div>
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
								<li></li>
							</ul>
						</div>
					</div>
					<div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
						<p>© 2025 Kioskopago</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
