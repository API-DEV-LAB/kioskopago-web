'use client'
import type React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { InputOTP } from '@/components/ui/input-otp'
import { InputOTPGroup } from '@/components/ui/input-otp'
import { InputOTPSlot } from '@/components/ui/input-otp'
import { CODE_VERIFICATION_MAX, ROUTES_APP } from '@/shared/utils/constants'
import { validateCodeVerification } from '@/shared/utils/validations'
import { AuthVerificationPost } from '@/features/auth/api/verification'
import { useAuthVerificationStore } from '@/features/auth/store/verification'
import { useAuthLoginStore } from '@/features/auth/store/login'

export default function FormVerification() {
	const router = useRouter()
	const { code, setCode } = useAuthVerificationStore()
	const { phone } = useAuthLoginStore()
	const [isLoading, setIsLoading] = useState(false)
	const [countdown, setCountdown] = useState(20)
	const [canResend, setCanResend] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const error = validateCodeVerification(code)
		if (error) {
			alert(error)
			return
		}
		setIsLoading(true)
		try {
			// API verifyOtp expects { phoneNumber, otp }
			// accessToken is stored in localStorage by the axios interceptor (lib/axios.ts)
			const response = await AuthVerificationPost(phone, code)
			if (response?.accessToken) {
				if (typeof window !== 'undefined') {
					localStorage.setItem('token', response.accessToken)
				}
				router.push(ROUTES_APP.HOME.path)
			}
		} catch (error) {
			console.error('AuthVerificationPost form::', error)
			alert('Código incorrecto o expirado. Intenta de nuevo.')
		} finally {
			setIsLoading(false)
		}
	}

	const handleResend = async () => {
		if (!canResend) return
		setIsLoading(true)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		setIsLoading(false)
		setCanResend(false)
		setCountdown(60)

		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					setCanResend(true)
					clearInterval(timer)
					return 0
				}
				return prev - 1
			})
		}, 1000)
	}
	return (
		<>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="flex flex-col items-center space-y-4">
					<InputOTP
						maxLength={CODE_VERIFICATION_MAX}
						value={code}
						onChange={(value) => setCode(value)}
					>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>

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
					disabled={isLoading || code.length !== 6}
				>
					{isLoading ? 'Verificando...' : 'Verificar'}
				</Button>

				<p className="text-center text-sm text-muted-foreground">
					<a
						href={ROUTES_APP.LOGIN.path}
						className="text-primary hover:underline font-medium"
					>
						Cambiar tu número celular
					</a>
				</p>
			</form>
		</>
	)
}
