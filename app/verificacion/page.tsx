import type React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { formatPhoneNumber } from '@/shared/utils/formats'
import FormVerification from '@/features/auth/components/FormVerification'

export default function VerificationPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
			<Card className="w-full max-w-md shadow-lg rounded-lg">
				<CardHeader className="space-y-1 text-center">
					<CardTitle className="text-2xl font-bold">
						Verificación de número celular
					</CardTitle>
					<CardDescription>
						Ingresa el código de 6 dígitos enviado a
					</CardDescription>
					<div className="flex items-center justify-center gap-2 text-md font-medium text-foreground pt-1">
						{formatPhoneNumber('4427560874')}
					</div>
				</CardHeader>
				<CardContent>
					<FormVerification />
				</CardContent>
			</Card>
		</div>
	)
}
