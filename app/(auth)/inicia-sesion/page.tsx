import type { Metadata } from 'next'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FormLogin } from '@/features/auth/components/FormLogin'

export const metadata: Metadata = {
	title: 'Bienvenido de nuevo - Iniciar sesión',
	description: 'Ingresa a tu cuenta',
}

export default function LoginPage() {
	return (
		<Card className="w-full max-w-[400px] border-none shadow-none">
			<CardHeader className="space-y-1 text-center mb-8">
				<h1 className="text-2xl font-bold">Bienvenido de nuevo</h1>
				<h2 className="text-muted-foreground text-sm leading-relaxed">
					Ingresa tu número celular, recibirás un código de
					verificación por SMS.
				</h2>
			</CardHeader>
			<CardContent className="px-none">
				<FormLogin />
			</CardContent>
		</Card>
	)
}
