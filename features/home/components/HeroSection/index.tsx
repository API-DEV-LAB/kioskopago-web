import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ROUTES_APP } from '@/shared/utils/constants'

export default function HeroSection() {
	return (
		<section className="container mx-auto px-4 py-16 md:py-24">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
						Gestiona todo en un solo lugar
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
						Recargas y servicios básicos. Todo desde tu móvil, sin
						filas ni complicaciones.
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
				<div className="relative hidden lg:block">
					<Image
						src="https://res.cloudinary.com/dtstx7rhx/image/upload/v1753844328/left-image_ftiysy.png"
						alt="Kioskopago app"
						width={600}
						height={600}
						className="w-full h-auto rounded-md"
						priority
					/>
				</div>
			</div>
		</section>
	)
}

export { HeroSection }
