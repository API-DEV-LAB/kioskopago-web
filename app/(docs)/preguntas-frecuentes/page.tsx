import { WrapperHeaderFooter } from '@/features/home/components/WrapperHeaderFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Preguntas frecuentes',
}

export default function PreguntasFrecuentesPage() {
	return (
		<WrapperHeaderFooter>
			<main className="container mx-auto px-4 py-16 max-w-3xl">
				<h1 className="text-3xl font-bold mb-8">
					Preguntas frecuentes
				</h1>

				<section className="space-y-8 text-muted-foreground leading-relaxed">
					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							¿Qué es Kioskopago?
						</h2>
						<p>
							Kioskopago es una plataforma que permite a tiendas
							de conveniencia ofrecer servicios de recargas de
							tiempo aire y pago de servicios a sus clientes. El
							dueño de la tienda adquiere saldo con el
							administrador y lo utiliza para procesar las
							transacciones de sus clientes.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							¿Cómo registro mi tienda?
						</h2>
						<p>
							Puedes registrar tu tienda haciendo clic en
							&ldquo;Registrar tienda&rdquo; en la página
							principal. Necesitarás proporcionar tus datos de
							contacto y los datos de tu tienda. Una vez
							registrado, el administrador activará tu cuenta.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							¿Qué servicios puedo ofrecer con Kioskopago?
						</h2>
						<p>
							Con Kioskopago puedes ofrecer recargas de tiempo
							aire (TAE) para todas las operadoras disponibles, y
							pago de servicios como luz, agua y otros servicios
							básicos a través de nuestra integración con
							proveedores certificados.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							¿Cómo recargo saldo en mi cuenta?
						</h2>
						<p>
							Para recargar saldo en tu cuenta, debes contactar al
							administrador de Kioskopago. El saldo se abona
							directamente a tu cuenta y puedes utilizarlo
							inmediatamente para procesar transacciones.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							¿Qué hago si una transacción falla?
						</h2>
						<p>
							Si una transacción falla, el saldo no será
							descontado de tu cuenta. Puedes intentar de nuevo la
							transacción. Si el problema persiste, contacta a
							soporte en kioskopago@info.com o al teléfono 44 22
							22 22 22.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							¿Cómo puedo ver mi historial de transacciones?
						</h2>
						<p>
							Desde tu panel de tienda, en la sección
							&ldquo;Historial&rdquo;, puedes ver todas las
							transacciones realizadas con su fecha, monto y
							estado.
						</p>
					</div>

					<div className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							¿Cómo contacto a soporte?
						</h2>
						<p>
							Puedes contactarnos por correo electrónico en
							kioskopago@info.com o por teléfono al 44 22 22 22
							22, de lunes a viernes en horario de oficina.
						</p>
					</div>
				</section>
			</main>
		</WrapperHeaderFooter>
	)
}
