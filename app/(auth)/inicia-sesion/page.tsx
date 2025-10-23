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
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
			<Card className="w-full max-w-md shadow-lg rounded-lg">
				<CardHeader className="space-y-1 text-center">
					<CardTitle className="text-2xl font-bold mt-4">
						Inicia sesión
					</CardTitle>
					<CardDescription>
						Ingresa tu número celular, recibirás un código de
						verificación por SMS.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<FormLogin />
				</CardContent>
			</Card>
		</div>
	)
}
