'use client'
import type React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import {
	CODE_VERIFICATION_MAX,
	ROUTES_APP,
} from '@/src/_shared/utils/constants'
import { formatPhoneNumber } from '@/src/_shared/utils/formats'

export default function VerificationPage() {
	const router = useRouter()
	const [code, setCode] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [countdown, setCountdown] = useState(20)
	const [canResend, setCanResend] = useState(false)

	useEffect(() => {
		const storedPhone = sessionStorage.getItem('phoneNumber')
		if (!storedPhone) {
			router.push(ROUTES_APP.LOGIN.path)
			return
		}
		setPhoneNumber(storedPhone)

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

		return () => clearInterval(timer)
	}, [router])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (code.length !== CODE_VERIFICATION_MAX) {
			alert('Por favor ingresa el código de verificación')
			return
		}
		setIsLoading(true)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		sessionStorage.removeItem('phoneNumber')
		setIsLoading(false)
		router.push(ROUTES_APP.HOME.path)
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
						{formatPhoneNumber(phoneNumber)}
					</div>
				</CardHeader>
				<CardContent>
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
				</CardContent>
			</Card>
		</div>
	)
}
