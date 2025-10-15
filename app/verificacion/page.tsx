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
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
			<Card className="w-full max-w-md shadow-lg rounded-lg">
				<CardHeader className="space-y-1 text-center">
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
		</div>
	)
}
