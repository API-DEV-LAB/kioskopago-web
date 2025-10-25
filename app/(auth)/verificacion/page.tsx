import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import FormVerification from '@/features/auth/components/FormVerification'
import TitlePhone from '@/features/auth/components/TitlePhone'
import { CODE_VERIFICATION_MAX } from '@/shared/utils/constants'

export default function VerificationPage() {
	return (
		<Card className="w-full max-w-md border-none shadow-none">
			<CardHeader className="space-y-1 text-center mb-8">
				<CardTitle className="text-2xl font-bold">
					Verificación de número celular
				</CardTitle>
				<CardDescription>
					{`Ingresa el código de ${CODE_VERIFICATION_MAX} dígitos enviado a`}
				</CardDescription>
				<TitlePhone />
			</CardHeader>
			<CardContent>
				<FormVerification />
			</CardContent>
		</Card>
	)
}
