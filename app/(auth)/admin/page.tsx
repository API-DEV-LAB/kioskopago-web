import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import FormAdminLogin from '@/features/auth/components/FormAdminLogin'

export default function AdminLoginPage() {
	return (
		<Card className="w-full max-w-md border-none shadow-none rounded-lg">
			<CardHeader className="space-y-1 text-center mb-8">
				<CardTitle className="text-2xl font-bold mt-4">
					Administrador
				</CardTitle>
				<CardDescription>
					Ingresa con tu correo y contraseña
				</CardDescription>
			</CardHeader>
			<CardContent>
				<FormAdminLogin />
			</CardContent>
		</Card>
	)
}
