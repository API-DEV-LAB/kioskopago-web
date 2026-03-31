import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ROUTES_APP } from '@/shared/utils/constants'

export default function CtaSection() {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="bg-primary p-8 md:p-12 text-center space-y-6 rounded-xl">
					<h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
						¿Listo para simplificar tus pagos?&nbsp;
					</h2>
					<p className="text-lg text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
						Únete a cientos de tiendas que ya confían en Kioskopago
						para sus operaciones diarias
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
	)
}

export { CtaSection }
