'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { CODE_VERIFICATION_MAX, ROUTES_APP } from '@/shared/utils/constants'
import { useAuthLoginStore } from '@/features/auth/store/login'
import { useAuthVerificationStore } from '@/features/auth/store/verification'
import { verifyOtp, resendOtp } from '@/features/auth/api/otp'
import { setTokens } from '@/shared/utils/auth'

export default function FormVerification() {
	const router = useRouter()
	const { phone } = useAuthLoginStore()
	const { code, setCode } = useAuthVerificationStore()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [countdown, setCountdown] = useState(60)
	const [canResend, setCanResend] = useState(false)

	useEffect(() => {
		if (countdown <= 0) {
			setCanResend(true)
			return
		}
		const timer = setTimeout(() => setCountdown((c) => c - 1), 1000)
		return () => clearTimeout(timer)
	}, [countdown])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (code.length !== CODE_VERIFICATION_MAX) return
		setError(null)
		setIsLoading(true)
		try {
			const response = await verifyOtp({ phone, code })
			setTokens(response.accessToken, response.refreshToken, response.user.role)
			if (response.user.status === 'ENABLED') {
				if (response.user.role === 'ADMIN') {
					router.push(ROUTES_APP.ADMIN_DASHBOARD.path)
				} else {
					router.push(ROUTES_APP.DASHBOARD.path)
				}
			} else {
				setError('Usuario desactivado.')
			}
		} catch {
			setError('Código incorrecto o expirado. Intenta de nuevo.')
		} finally {
			setIsLoading(false)
		}
	}

	const handleResend = async () => {
		if (!canResend) return
		setIsLoading(true)
		try {
			await resendOtp({ phone })
			setCanResend(false)
			setCountdown(60)
			setCode('')
		} catch {
			setError('No se pudo reenviar el código.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="flex flex-col items-center space-y-4">
				<InputOTP
					maxLength={CODE_VERIFICATION_MAX}
					value={code}
					onChange={setCode}
				>
					<InputOTPGroup>
						{Array.from({ length: CODE_VERIFICATION_MAX }).map(
							(_, i) => (
								<InputOTPSlot key={i} index={i} />
							),
						)}
					</InputOTPGroup>
				</InputOTP>

				{error && (
					<p className="text-sm text-destructive text-center">
						{error}
					</p>
				)}

				<p className="text-xs text-muted-foreground text-center">
					{canResend ? (
						<button
							type="button"
							onClick={handleResend}
							className="text-primary hover:underline font-medium"
							disabled={isLoading}
						>
							Reenviar código
						</button>
					) : (
						<>Reenviar código en {countdown}s</>
					)}
				</p>
			</div>

			<Button
				type="submit"
				className="w-full"
				size="lg"
				disabled={isLoading || code.length !== CODE_VERIFICATION_MAX}
			>
				{isLoading ? 'Verificando...' : 'Verificar'}
			</Button>

			<p className="text-center text-sm text-muted-foreground">
				<a
					href={ROUTES_APP.LOGIN.path}
					className="text-primary hover:underline font-medium"
				>
					Cambiar número celular
				</a>
			</p>
		</form>
	)
}
