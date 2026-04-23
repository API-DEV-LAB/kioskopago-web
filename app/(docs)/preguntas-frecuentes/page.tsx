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
					Preguntas frecuentes – KIOSKO PAGO
				</h1>

				<div className="space-y-12">

					{/* SOBRE KIOSKO PAGO */}
					<section className="space-y-6">
						<h2 className="text-2xl font-bold text-foreground border-b pb-2">
							Sobre KIOSKO PAGO
						</h2>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Qué es KIOSKO PAGO?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								KIOSKO PAGO es una plataforma tecnológica que permite a negocios y
								personas cobrar, vender recargas y ofrecer pagos de servicios,
								generando ingresos por cada operación realizada.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿KIOSKO PAGO es un banco o institución financiera?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								No. KIOSKO PAGO es un intermediario tecnológico y comisionista, lo
								que significa que facilita operaciones entre usuarios y proveedores
								de servicios, sin captar dinero como una institución financiera.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Quién puede usar KIOSKO PAGO?
							</h3>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Tiendas de abarrotes</li>
								<li>Negocios locales</li>
								<li>Emprendedores</li>
								<li>Personas que quieran generar ingresos adicionales</li>
							</ul>
						</div>
					</section>

					{/* DINERO, SALDO Y OPERACIÓN */}
					<section className="space-y-6">
						<h2 className="text-2xl font-bold text-foreground border-b pb-2">
							Dinero, saldo y operación
						</h2>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Cómo empiezo a usar la plataforma?
							</h3>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Te registras</li>
								<li>Validas tu cuenta</li>
								<li>Depositas saldo</li>
								<li>Empiezas a operar</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Qué es el saldo dentro de KIOSKO PAGO?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Es un saldo operativo, utilizado exclusivamente para ejecutar pagos
								y transacciones dentro de la plataforma. No es una cuenta bancaria
								ni genera rendimientos.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Puedo retirar mi saldo?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								El saldo está destinado a la operación dentro de la plataforma. En
								ciertos casos, podrá solicitarse revisión para retiro conforme a
								políticas internas.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿KIOSKO PAGO se queda con mi dinero?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								No. Los recursos se utilizan para procesar servicios con terceros.
								KIOSKO PAGO únicamente obtiene una comisión por operación.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Cuánto gano por usar KIOSKO PAGO?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Ganas una comisión por cada transacción realizada. El monto depende
								del tipo de servicio (recargas, pagos, etc.).
							</p>
						</div>
					</section>

					{/* SEGURIDAD Y CONFIANZA */}
					<section className="space-y-6">
						<h2 className="text-2xl font-bold text-foreground border-b pb-2">
							Seguridad y confianza
						</h2>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Es seguro usar KIOSKO PAGO?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Sí. La plataforma cuenta con:
							</p>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Monitoreo de operaciones</li>
								<li>Sistemas antifraude</li>
								<li>Validación de usuarios (KYC)</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Por qué me piden documentos (INE, RFC, etc.)?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Para proteger la plataforma y a todos los usuarios. Esto forma parte
								de procesos de:
							</p>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Validación de identidad</li>
								<li>Prevención de fraude</li>
								<li>Cumplimiento legal</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Pueden bloquear mi cuenta?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Sí, en caso de:
							</p>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Actividad sospechosa</li>
								<li>Uso indebido</li>
								<li>Incumplimiento de términos</li>
							</ul>
							<p className="text-muted-foreground leading-relaxed">
								Esto es para proteger a todos los usuarios.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Pueden retener mi saldo?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Sí, de manera temporal, si existe:
							</p>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Investigación por fraude</li>
								<li>Revisión de operaciones</li>
							</ul>
						</div>
					</section>

					{/* TRANSACCIONES */}
					<section className="space-y-6">
						<h2 className="text-2xl font-bold text-foreground border-b pb-2">
							Transacciones
						</h2>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Qué pasa si una transacción falla?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								La operación será revisada automáticamente.
							</p>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Si no se completó → puede aplicarse reverso</li>
								<li>Si se completó → no aplica devolución</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Cuánto tarda un reverso?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Depende del proveedor del servicio, pero generalmente de 24 a 72
								horas hábiles.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Las operaciones son en tiempo real?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Sí, la mayoría de los servicios operan en tiempo real, aunque pueden
								existir retrasos por terceros.
							</p>
						</div>
					</section>

					{/* FACTURACIÓN */}
					<section className="space-y-6">
						<h2 className="text-2xl font-bold text-foreground border-b pb-2">
							Facturación
						</h2>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Puedo solicitar factura?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Sí. KIOSKO PAGO podrá emitir factura por las comisiones generadas.
								Contacta a soporte para más información sobre el proceso.
							</p>
						</div>
					</section>

					{/* USO Y RESTRICCIONES */}
					<section className="space-y-6">
						<h2 className="text-2xl font-bold text-foreground border-b pb-2">
							Uso y restricciones
						</h2>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Qué está prohibido en la plataforma?
							</h3>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Uso fraudulento</li>
								<li>Simulación de operaciones</li>
								<li>Uso de datos falsos</li>
								<li>Actividades ilícitas</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Qué pasa si incumplo?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								KIOSKO PAGO podrá:
							</p>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Suspender tu cuenta</li>
								<li>Retener saldo</li>
								<li>Cancelar acceso</li>
							</ul>
						</div>
					</section>

					{/* SOPORTE */}
					<section className="space-y-6">
						<h2 className="text-2xl font-bold text-foreground border-b pb-2">
							Soporte
						</h2>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Cómo contacto soporte?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Puedes contactarnos por correo electrónico o por teléfono.
								Nuestro equipo está disponible de lunes a viernes en horario de
								oficina.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿En cuánto tiempo responden?
							</h3>
							<ul className="list-disc list-inside text-muted-foreground space-y-1">
								<li>Soporte general: 24 – 72 horas</li>
								<li>Incidencias: hasta 5 días hábiles</li>
							</ul>
						</div>
					</section>

					{/* NEGOCIO Y CRECIMIENTO */}
					<section className="space-y-6">
						<h2 className="text-2xl font-bold text-foreground border-b pb-2">
							Negocio y crecimiento
						</h2>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Puedo usar KIOSKO PAGO para ganar dinero?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Sí. Puedes generar ingresos ofreciendo servicios a tus clientes.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Puedo tener varios puntos de venta?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Sí. La plataforma permite operar con múltiples puntos de venta.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-foreground">
								¿Puedo escalar mi operación?
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								Sí. KIOSKO PAGO está diseñado para crecer contigo.
							</p>
						</div>
					</section>

				</div>
			</main>
		</WrapperHeaderFooter>
	)
}
