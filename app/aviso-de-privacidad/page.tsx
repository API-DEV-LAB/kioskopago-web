import { LandingHeader } from '@/features/home/components/LandingHeader'
import { Footer } from '@/features/home/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Aviso de privacidad',
}

export default function AvisoDePrivacidadPage() {
	return (
		<div className="min-h-screen bg-background">
			<LandingHeader />
			<main className="container mx-auto px-4 py-16 max-w-3xl">
				<h1 className="text-3xl font-bold mb-8">
					Aviso de privacidad
				</h1>

				<section className="space-y-6 text-muted-foreground leading-relaxed">
					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							1. Responsable del tratamiento
						</h2>
						<p>
							Kioskopago, con domicilio en Real de Carretas
							104-502, Fracc. Milenio III, C.P. 76060, Querétaro,
							Qro., es responsable del tratamiento de sus datos
							personales.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							2. Datos personales que recabamos
						</h2>
						<p>
							Recabamos los siguientes datos personales: nombre
							completo, número de teléfono, correo electrónico,
							datos de la tienda e historial de transacciones.
							Estos datos son necesarios para la prestación de
							nuestros servicios.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							3. Finalidades del tratamiento
						</h2>
						<p>
							Sus datos personales serán utilizados para: dar de
							alta su cuenta y tienda en la plataforma, procesar
							transacciones de recargas y pagos de servicios,
							enviar notificaciones relacionadas con su cuenta, y
							cumplir con obligaciones legales aplicables.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							4. Transferencia de datos
						</h2>
						<p>
							Sus datos podrán ser compartidos con proveedores de
							servicios de telecomunicaciones y pago de servicios
							exclusivamente para procesar las transacciones
							solicitadas. No transferimos sus datos a terceros
							para fines de mercadotecnia.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							5. Derechos ARCO
						</h2>
						<p>
							Usted tiene derecho a Acceder, Rectificar, Cancelar
							u Oponerse al tratamiento de sus datos personales.
							Para ejercer estos derechos, envíe su solicitud a
							kioskopago@info.com con identificación oficial.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							6. Cambios al aviso de privacidad
						</h2>
						<p>
							Cualquier cambio a este aviso de privacidad será
							notificado a través de la plataforma. Le
							recomendamos revisar periódicamente este documento.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
