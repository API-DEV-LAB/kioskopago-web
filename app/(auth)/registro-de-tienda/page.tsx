import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FormRegister } from '@/features/auth/components/FormRegister'

export default function RegisterPage() {
	return (
		<Card className="w-full max-w-[400px] border-none shadow-none">
			<CardHeader className="space-y-1 text-center mb-8">
				<h1 className="text-2xl font-bold">Registra tu tienda</h1>
				<h2 className="text-muted-foreground text-sm leading-relaxed">
					Completa la información para comenzar a vender
				</h2>
			</CardHeader>
			<CardContent className="px-none">
				<FormRegister />
			</CardContent>
		</Card>
	)
}
