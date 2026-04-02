import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FormVerification } from '@/features/auth/components/FormVerification'
import { TitlePhone } from '@/features/auth/components/TitlePhone'
import { CODE_VERIFICATION_MAX } from '@/shared/utils/constants'

export default function VerificationPage() {
	return (
		<Card className="w-full max-w-[400px] border-none shadow-none">
			<CardHeader className="space-y-1 text-center mb-8">
				<h1 className="text-2xl font-bold">
					Verificación de número celular
				</h1>
				<h2 className="text-muted-foreground text-sm leading-relaxed">
					{`Ingresa el código de ${CODE_VERIFICATION_MAX} dígitos enviado a`}
				</h2>
				<TitlePhone />
			</CardHeader>
			<CardContent className="px-none">
				<FormVerification />
			</CardContent>
		</Card>
	)
}
