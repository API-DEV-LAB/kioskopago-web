import { WrapperHeaderFooter } from '@/features/home/components/WrapperHeaderFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Términos y condiciones',
}

export default function TerminosYCondicionesPage() {
	return (
		<WrapperHeaderFooter>
			<main className="container mx-auto px-4 py-16 max-w-3xl">
				<h1 className="text-3xl font-bold mb-2">
					Términos y condiciones de uso
				</h1>
				<p className="text-muted-foreground mb-10 leading-relaxed">
					Que celebran por una parte el C. Erick Oswaldo Sánchez Vargas, por su
					propio derecho, a quien en lo sucesivo se le denominará{' '}
					<strong className="text-foreground">&ldquo;KIOSKO PAGO&rdquo;</strong>
					, y por la otra parte el{' '}
					<strong className="text-foreground">Usuario / Aceptante</strong>,
					sujetándose al tenor de las siguientes declaraciones y cláusulas.
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
								<li>Que es una persona física con actividad empresarial, legalmente constituida conforme a las leyes de los Estados Unidos Mexicanos.</li>
								<li>Que cuenta con Registro Federal de Contribuyentes: SAVE9601306M9.</li>
								<li>Que señala como domicilio el ubicado en: Asia #125, Col. Continental, Santa Rosa Jáuregui, Querétaro, Qro., C.P. 76220.</li>
								<li>Que cuenta con la capacidad técnica, administrativa y operativa para prestar servicios de tecnología enfocados en la gestión de pagos electrónicos, recargas y servicios digitales.</li>
								<li>Que opera bajo el nombre comercial KIOSKO PAGO, mediante una plataforma digital propia o de terceros integrados.</li>
							</ol>
						</div>
						<div className="space-y-2">
							<h3 className="font-semibold text-foreground">Declara el Usuario / Aceptante:</h3>
							<ol className="list-[lower-alpha] list-inside text-muted-foreground space-y-1 leading-relaxed">
								<li>Que cuenta con capacidad legal para obligarse en términos del presente contrato.</li>
								<li>Que desea utilizar la plataforma KIOSKO PAGO para la comercialización de servicios electrónicos.</li>
								<li>Que reconoce haber leído, entendido y aceptado los presentes términos y condiciones.</li>
							</ol>
						</div>
					</section>

					{/* II. DEFINICIONES */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							II. Definiciones
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Para efectos del presente contrato se entenderá por:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
							<li><strong className="text-foreground">Plataforma:</strong> Sistema tecnológico operado por KIOSKO PAGO.</li>
							<li><strong className="text-foreground">Aceptante:</strong> Persona física o moral que utiliza la plataforma.</li>
							<li><strong className="text-foreground">Saldo electrónico / saldo virtual:</strong> Recursos prepagados disponibles para operar dentro de la plataforma.</li>
							<li><strong className="text-foreground">Servicios:</strong> Venta de recargas, pago de servicios, cobros digitales y demás servicios habilitados.</li>
							<li><strong className="text-foreground">Operación:</strong> Transacción realizada dentro del sistema.</li>
						</ul>
					</section>

					{/* III. OBJETO */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							III. Objeto
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							El presente contrato tiene por objeto establecer los términos bajo los
							cuales KIOSKO PAGO proporciona al Aceptante acceso a su plataforma
							para la realización de operaciones electrónicas, incluyendo pero no
							limitadas a:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Venta de tiempo aire</li>
							<li>Pago de servicios</li>
							<li>Cobros electrónicos</li>
							<li>Otros servicios integrados</li>
						</ul>
					</section>

					{/* IV. REGISTRO Y ACCESO */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							IV. Registro y acceso
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							El Aceptante será responsable de:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Proporcionar información veraz</li>
							<li>Resguardar sus credenciales</li>
							<li>Todas las operaciones realizadas desde su cuenta</li>
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO no será responsable por accesos no autorizados derivados
							de negligencia del usuario.
						</p>
					</section>

					{/* V. FORMA DE OPERACIÓN Y PAGOS */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							V. Forma de operación y pagos
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							El Aceptante deberá realizar depósitos previos a la siguiente cuenta:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li><strong className="text-foreground">Banco:</strong> Nu México</li>
							<li><strong className="text-foreground">Titular:</strong> Erick Oswaldo Sánchez Vargas</li>
							<li><strong className="text-foreground">Cuenta:</strong> 5101258614924109</li>
							<li><strong className="text-foreground">CLABE:</strong> 638180000112275332</li>
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							Dichos depósitos se reflejarán como saldo electrónico, el cual será
							utilizado para operar dentro de la plataforma.
						</p>
					</section>

					{/* VI. NATURALEZA DEL SALDO */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							VI. Naturaleza del saldo
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							El saldo electrónico:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>No constituye un depósito bancario</li>
							<li>No genera intereses</li>
							<li>Podrá no ser reembolsable salvo validación por parte de KIOSKO PAGO</li>
						</ul>
					</section>

					{/* VII. COMISIONES */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							VII. Comisiones
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO podrá aplicar comisiones por el uso de la plataforma y
							por cada operación realizada. Las comisiones serán informadas
							previamente dentro del sistema o mediante comunicación oficial.
						</p>
					</section>

					{/* VIII. FACTURACIÓN */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							VIII. Facturación
						</h2>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>El esquema de facturación será definido por KIOSKO PAGO</li>
							<li>El usuario deberá solicitar factura dentro del periodo correspondiente</li>
							<li>La facturación podrá aplicar únicamente sobre comisiones</li>
						</ul>
					</section>

					{/* IX. RESPONSABILIDAD */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							IX. Responsabilidad
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Actúa como intermediario tecnológico</li>
							<li>No garantiza la disponibilidad continua del servicio</li>
							<li>No es responsable por fallas de terceros, proveedores o redes</li>
						</ul>
					</section>

					{/* X. REVERSOS Y ACLARACIONES */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							X. Reversos y aclaraciones
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Las operaciones podrán ser sujetas a revisión en caso de fallas.
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Los reversos aplicarán únicamente cuando proceda</li>
							<li>Estarán sujetos a validación técnica y administrativa</li>
						</ul>
					</section>

					{/* XI. PREVENCIÓN DE FRAUDE Y USO INDEBIDO */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XI. Prevención de fraude y uso indebido
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO se reserva el derecho de:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Suspender cuentas sin previo aviso</li>
							<li>Retener saldo en caso de investigación</li>
							<li>Solicitar documentación adicional</li>
						</ul>
						<p className="text-muted-foreground leading-relaxed">
							En caso de detectar actividades sospechosas o ilícitas.
						</p>
					</section>

					{/* XII. CONFIDENCIALIDAD */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XII. Confidencialidad
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Ambas partes se obligan a mantener confidencial la información
							derivada de la relación comercial.
						</p>
					</section>

					{/* XIII. TERMINACIÓN */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XIII. Terminación
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO podrá dar por terminado el acceso a la plataforma en
							cualquier momento en caso de:
						</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							<li>Incumplimiento</li>
							<li>Uso indebido</li>
							<li>Riesgo operativo o legal</li>
						</ul>
					</section>

					{/* XIV. MODIFICACIONES */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XIV. Modificaciones
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							KIOSKO PAGO podrá modificar los presentes términos en cualquier
							momento, notificándolo a través de sus medios oficiales.
						</p>
					</section>

					{/* XV. JURISDICCIÓN */}
					<section className="space-y-4">
						<h2 className="text-xl font-bold text-foreground border-b pb-2">
							XV. Jurisdicción
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Para la interpretación y cumplimiento del presente contrato, las
							partes se someten a las leyes y tribunales de Querétaro, Qro., México.
						</p>
					</section>

				</div>
			</main>
		</WrapperHeaderFooter>
	)
}
