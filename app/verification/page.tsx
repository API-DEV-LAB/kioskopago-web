"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, ShieldCheck } from "lucide-react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export default function VerificationPage() {
  const router = useRouter()
  const [code, setCode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    // Get phone number from session storage
    const storedPhone = sessionStorage.getItem("phoneNumber")
    if (!storedPhone) {
      router.push("/login")
      return
    }
    setPhoneNumber(storedPhone)

    // Countdown timer for resend
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

    if (code.length !== 6) {
      alert("Por favor ingresa el código completo")
      return
    }

    setIsLoading(true)

    // Simulate API call to verify code
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Clear session storage
    sessionStorage.removeItem("phoneNumber")

    setIsLoading(false)

    // Redirect to dashboard or home
    router.push("/dashboard")
  }

  const handleResend = async () => {
    if (!canResend) return

    setIsLoading(true)

    // Simulate API call to resend code
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setCanResend(false)
    setCountdown(60)

    // Restart countdown
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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg rounded-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Verificación</CardTitle>
          <CardDescription>Ingresa el código de 6 dígitos enviado a</CardDescription>
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground pt-1">
            {phoneNumber}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <InputOTP maxLength={6} value={code} onChange={(value) => setCode(value)}>
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

            <Button type="submit" className="w-full" size="lg" disabled={isLoading || code.length !== 6}>
              {isLoading ? "Verificando..." : "Verificar"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              <a href="/login" className="text-primary hover:underline font-medium">
                Cambiar número de teléfono
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
