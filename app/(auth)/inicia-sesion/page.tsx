import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import FormLogin from '@/features/auth/components/FormLogin'

export default function LoginPage() {
	return (
		<Card className="w-full max-w-md border-none shadow-none rounded-lg">
			<CardHeader className="space-y-1 text-center mb-8">
				<CardTitle className="text-2xl font-bold mt-4">
					Inicia sesión
				</CardTitle>
				<CardDescription>
					Ingresa tu número celular, recibirás un código de
					verificación por SMS.
				</CardDescription>
			</CardHeader>
			<CardContent className="px-none">
				<FormLogin />
			</CardContent>
		</Card>
	)
}
