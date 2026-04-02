'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background p-4">
			<Card className="max-w-2xl w-full p-8 md:p-12 space-y-8">
				<div className="text-center space-y-4">
					<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
						<svg
							className="w-10 h-10 text-primary"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>

					<div className="space-y-2">
						<h1 className="text-6xl font-bold text-foreground">
							404
						</h1>
						<h2 className="text-2xl font-semibold text-foreground">
							Página no encontrada
						</h2>
						<p className="text-muted-foreground max-w-md mx-auto">
							Lo sentimos, la página que estás buscando no existe
							o ha sido movida a otra ubicación.
						</p>
					</div>
				</div>

				<div className="space-y-4 pt-4">
					<div className="text-sm text-muted-foreground">
						<p className="font-medium mb-2">Puedes intentar:</p>
						<ul className="list-disc list-inside space-y-1 ml-2">
							<li>Verificar la URL ingresada</li>
							<li>Regresar a la página anterior</li>
							<li>Ir a la página de inicio</li>
							<li>Navegar usando el menú principal</li>
						</ul>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 pt-4">
						<Button
							onClick={() => window.history.back()}
							variant="outline"
							className="flex-1"
						>
							<svg
								className="w-4 h-4 mr-2"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
							Volver atrás
						</Button>
						<Button asChild variant="default" className="flex-1">
							<Link href="/">
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
								</svg>
								Ir al inicio
							</Link>
						</Button>
					</div>
				</div>
			</Card>
		</div>
	)
}
