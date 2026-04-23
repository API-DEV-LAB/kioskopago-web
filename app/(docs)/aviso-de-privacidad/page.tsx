import { WrapperHeaderFooter } from '@/features/home/components/WrapperHeaderFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Aviso de privacidad',
}

export default function AvisoDePrivacidadPage() {
	return (
		<WrapperHeaderFooter>
			<main className="container mx-auto px-4 py-16 max-w-3xl">
				<h1 className="text-3xl font-bold mb-2">
					Contrato de prestación de servicios tecnológicos e intermediación
				</h1>
				<p className="text-muted-foreground mb-10 leading-relaxed">
					Que celebran por una parte el C. Erick Oswaldo Sánchez Vargas, por su
					propio derecho, a quien en lo sucesivo se le denominará{' '}
					<strong className="text-foreground">&ldquo;KIOSKO PAGO&rdquo;</strong>
					, y por la otra parte el{' '}
					<strong className="text-foreground">Usuario / Aceptante</strong>, al
					tenor de las siguientes declaraciones y cláusulas.
				</p>

				<div className="space-y-10">

					{/* I. DECLARACIONES */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							I. Declaraciones
						</h2>
						<div className="space-y-2">
							<h3 className="font-semibold text-foreground">Declara KIOSKO PAGO:</h3>
							<ol className="list-[lower-alpha] list-inside text-muted-foreground space-y-1 leading-relaxed">
								<li>Ser una persona física con actividad empresarial conforme a las leyes de los Estados Unidos Mexicanos.</li>
								<li>Contar con RFC: SAVE9601306M9.</li>
								<li>Tener domicilio en: Asia #125, Col. Continental, Santa Rosa Jáuregui, Querétaro, Qro., C.P. 76220.</li>
								<li>Operar bajo el nombre comercial KIOSKO PAGO, ofreciendo servicios tecnológicos de intermediación de pagos.</li>
								<li>Contar con la infraestructura tecnológica necesaria para la prestación de sus servicios.</li>
							</ol>
						</div>
						<div className="space-y-2">
							<h3 className="font-semibold text-foreground">Declara el Usuario:</h3>
							<ol className="list-[lower-alpha] list-inside text-muted-foreground space-y-1 leading-relaxed">
								<li>Tener capacidad legal para contratar.</li>
								<li>Que la información proporcionada es veraz.</li>
								<li>Que acepta los términos del presente contrato.</li>
							</ol>
						</div>
					</section>

					{/* II. DEFINICIONES */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							II. Definiciones
						</h2>
						<ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
							<li><strong className="text-foreground">Plataforma:</strong> Sistema digital operado por KIOSKO PAGO.</li>
							<li><strong className="text-foreground">Usuario / Aceptante:</strong> Persona que utiliza la plataforma.</li>
							<li><strong className="text-foreground">Servicios:</strong> Recargas, pagos de servicios, cobros electrónicos.</li>
							<li><strong className="text-foreground">Saldo operativo:</strong> Recursos destinados a ejecutar operaciones.</li>
							<li><strong className="text-foreground">Operación:</strong> Transacción dentro del sistema.</li>
						</ul>
					</section>

					{/* III. NATURALEZA DEL SERVICIO */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							III. Naturaleza del servicio
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO actúa exclusivamente como intermediario tecnológico y
							comisionista. Por lo tanto:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>NO es institución financiera</li>
							<li>NO capta recursos del público</li>
							<li>NO resguarda dinero como depósito</li>
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							El usuario entrega recursos para la ejecución de pagos o adquisición
							de servicios de terceros.
						</p>
					</section>

					{/* IV. OBJETO DEL CONTRATO */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							IV. Objeto del contrato
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Permitir al usuario utilizar la plataforma para:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Procesar pagos</li>
							<li>Vender recargas</li>
							<li>Cobrar servicios</li>
							<li>Ejecutar transacciones electrónicas</li>
						</ul>
					</section>

					{/* V. REGISTRO Y ACCESO */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							V. Registro y acceso
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							El usuario:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Es responsable de su cuenta</li>
							<li>Resguarda credenciales</li>
							<li>Responde por todas las operaciones realizadas</li>
						</ul>
					</section>

					{/* VI. MODELO DE OPERACIÓN */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							VI. Modelo de operación (flujo de dinero)
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							El usuario deberá realizar depósitos a:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li><strong className="text-foreground">Banco:</strong> Nu México</li>
							<li><strong className="text-foreground">Titular:</strong> Erick Oswaldo Sánchez Vargas</li>
							<li><strong className="text-foreground">Cuenta:</strong> 5101258614924109</li>
							<li><strong className="text-foreground">CLABE:</strong> 638180000112275332</li>
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							Dichos recursos se destinan exclusivamente a la ejecución de
							operaciones y no constituyen ahorro ni inversión.
						</p>
					</section>

					{/* VII. COMISIONES */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							VII. Comisiones
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO cobrará comisiones por:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Uso de la plataforma</li>
							<li>Transacciones realizadas</li>
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							Las tarifas serán informadas dentro del sistema.
						</p>
					</section>

					{/* VIII. FACTURACIÓN */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							VIII. Facturación
						</h2>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>KIOSKO PAGO podrá facturar únicamente las comisiones</li>
							<li>El usuario deberá solicitar factura en tiempo</li>
						</ul>
					</section>

					{/* IX. PREVENCIÓN DE FRAUDE Y PLD */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							IX. Prevención de fraude y PLD
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO podrá:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Monitorear operaciones</li>
							<li>Detectar patrones inusuales</li>
							<li>Solicitar documentación adicional</li>
							<li>Restringir operaciones</li>
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							En caso de sospecha de fraude o actividad ilícita.
						</p>
					</section>

					{/* X. RETENCIÓN Y BLOQUEO DE CUENTAS */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							X. Retención y bloqueo de cuentas
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO podrá:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Suspender cuentas sin previo aviso</li>
							<li>Retener saldo temporalmente</li>
							<li>Cancelar definitivamente el acceso</li>
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							Cuando exista riesgo operativo, incumplimiento o actividad
							sospechosa.
						</p>
					</section>

					{/* XI. KYC */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XI. KYC (identificación del usuario)
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							El usuario acepta proporcionar:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Identificación oficial</li>
							<li>RFC</li>
							<li>Documentación adicional</li>
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO podrá validar información, establecer niveles de
							operación y limitar transacciones.
						</p>
					</section>

					{/* XII. RESPONSABILIDAD */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XII. Responsabilidad
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>NO garantiza disponibilidad continua</li>
							<li>NO es responsable por fallas de terceros</li>
							<li>NO responde por pérdidas indirectas</li>
						</ul>
					</section>

					{/* XIII. SERVICIOS DE TERCEROS */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XIII. Servicios de terceros
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Los servicios ofrecidos pueden depender de terceros, por lo que
							KIOSKO PAGO no controla su operación ni garantiza su continuidad.
						</p>
					</section>

					{/* XIV. REVERSOS Y ACLARACIONES */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XIV. Reversos y aclaraciones
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Las operaciones podrán ser revisadas y estarán sujetas a validación.
							No se garantizan devoluciones automáticas.
						</p>
					</section>

					{/* XV. CONFIDENCIALIDAD */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XV. Confidencialidad
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Ambas partes se obligan a proteger la información compartida.
						</p>
					</section>

					{/* XVI. PROPIEDAD INTELECTUAL */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XVI. Propiedad intelectual
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							La plataforma pertenece a KIOSKO PAGO.
						</p>
					</section>

					{/* XVII. TERMINACIÓN */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XVII. Terminación
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO podrá terminar el contrato en cualquier momento.
						</p>
					</section>

					{/* XVIII. MODIFICACIONES */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XVIII. Modificaciones
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Los términos podrán actualizarse sin previo aviso.
						</p>
					</section>

					{/* XIX. JURISDICCIÓN */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XIX. Jurisdicción
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Las partes se someten a tribunales de Querétaro, Qro., México.
						</p>
					</section>

				</div>
			</main>
		</WrapperHeaderFooter>
	)
}
