'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { CODE_VERIFICATION_MAX, ROUTES_APP } from '@/shared/utils/constants'
import { validateCodeVerification } from '@/shared/utils/validations'
import { verifyOtp, resendOtp } from '@/features/auth/api/otp'
import { useAuthVerificationStore } from '@/features/auth/store/verification'
import { useAuthLoginStore } from '@/features/auth/store/login'
import { useAuth } from '@/shared/hooks/useAuth'

export default function FormVerification() {
  const router = useRouter()
  const { code, setCode } = useAuthVerificationStore()
  const { phone } = useAuthLoginStore()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (!phone) {
      router.push(ROUTES_APP.LOGIN.path)
      return
    }
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { setCanResend(true); clearInterval(timer); return 0 }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [phone, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const validationError = validateCodeVerification(code)
    if (validationError) { setError(validationError); return }
    setIsLoading(true)
    try {
      const response = await verifyOtp({ phone, code })
      login(response.accessToken, response.refreshToken)
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
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) { setCanResend(true); clearInterval(timer); return 0 }
          return prev - 1
        })
      }, 1000)
    } catch {
      setError('No se pudo reenviar el código.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <InputOTP maxLength={CODE_VERIFICATION_MAX} value={code} onChange={setCode}>
          <InputOTPGroup>
            {Array.from({ length: CODE_VERIFICATION_MAX }).map((_, i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
        </InputOTP>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <p className="text-xs text-muted-foreground text-center">
          {canResend ? (
            <button type="button" onClick={handleResend} className="text-primary hover:underline font-medium" disabled={isLoading}>
              Reenviar código
            </button>
          ) : (
            <>Reenviar código en {countdown}s</>
          )}
        </p>
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isLoading || code.length !== CODE_VERIFICATION_MAX}>
        {isLoading ? 'Verificando...' : 'Verificar'}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        <a href={ROUTES_APP.LOGIN.path} className="text-primary hover:underline font-medium">
          Cambiar número de celular
        </a>
      </p>
    </form>
  )
}
