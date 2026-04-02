import { LandingHeader } from '@/features/home/components/LandingHeader'
import { Footer } from '@/features/home/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Términos y condiciones',
}

export default function TerminosYCondicionesPage() {
	return (
		<div className="min-h-screen bg-background">
			<LandingHeader />
			<main className="container mx-auto px-4 py-16 max-w-3xl">
				<h1 className="text-3xl font-bold mb-8">
					Términos y condiciones
				</h1>

				<section className="space-y-6 text-muted-foreground leading-relaxed">
					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							1. Aceptación de los términos
						</h2>
						<p>
							Al acceder y utilizar los servicios de Kioskopago,
							usted acepta estar sujeto a estos Términos y
							condiciones. Si no está de acuerdo con alguno de
							estos términos, le pedimos que no utilice nuestros
							servicios.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							2. Descripción del servicio
						</h2>
						<p>
							Kioskopago es una plataforma B2B que permite a
							tiendas de conveniencia ofrecer servicios de recargas
							de tiempo aire y pago de servicios a sus clientes
							finales. El administrador carga saldo a las tiendas,
							quienes a su vez prestan los servicios.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							3. Responsabilidades del usuario
						</h2>
						<p>
							El usuario es responsable de mantener la
							confidencialidad de sus credenciales de acceso y de
							todas las actividades que ocurran bajo su cuenta.
							Debe notificarnos inmediatamente sobre cualquier uso
							no autorizado.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							4. Transacciones y pagos
						</h2>
						<p>
							Todas las transacciones realizadas a través de
							Kioskopago están sujetas a disponibilidad del
							servicio. No nos hacemos responsables por fallas en
							los servicios de terceros proveedores ni por
							transacciones fallidas por causas ajenas a nuestra
							plataforma.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							5. Modificaciones
						</h2>
						<p>
							Nos reservamos el derecho de modificar estos términos
							en cualquier momento. Las modificaciones entrarán en
							vigor inmediatamente después de su publicación en la
							plataforma.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							6. Contacto
						</h2>
						<p>
							Para cualquier duda sobre estos términos, puede
							contactarnos en kioskopago@info.com o al teléfono 44
							22 22 22 22.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
