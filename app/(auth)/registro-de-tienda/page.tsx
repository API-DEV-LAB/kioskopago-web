import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import FormRegister from '@/features/auth/components/FormRegister'

export default function RegisterPage() {
	return (
		<Card className="w-full max-w-2xl shadow-lg rounded-lg">
			<CardHeader className="space-y-1 text-center">
				<CardTitle className="text-2xl font-bold mt-8 lg:mt-0">
					Registra tu tienda
				</CardTitle>
				<CardDescription>
					Completa la información para comenzar a vender
				</CardDescription>
			</CardHeader>
			<CardContent>
				<FormRegister />
			</CardContent>
		</Card>
	)
}
