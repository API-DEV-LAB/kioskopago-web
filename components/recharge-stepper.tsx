"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface Package {
  id: string
  name: string
  total: number
  description: string
}

const packages: Package[] = [
  { id: "1", name: "Paquete Básico", total: 50, description: "100 MB + 50 minutos" },
  { id: "2", name: "Paquete Plus", total: 100, description: "500 MB + 100 minutos" },
  { id: "3", name: "Paquete Premium", total: 200, description: "2 GB + 200 minutos" },
  { id: "4", name: "Paquete Ultra", total: 350, description: "5 GB + minutos ilimitados" },
  { id: "5", name: "Paquete Ultra", total: 350, description: "5 GB + minutos ilimitados" },
  { id: "6", name: "Paquete Ultra", total: 350, description: "5 GB + minutos ilimitados" },
  { id: "7", name: "Paquete Ultra", total: 350, description: "5 GB + minutos ilimitados" },
]

interface RechargeStepperProps {
  serviceName: string
}

export function RechargeStepper({ serviceName }: RechargeStepperProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [phoneNumber, setPhoneNumber] = useState("")

  const handlePackageSelect = (packageId: string) => {
    const pkg = packages.find((p) => p.id === packageId)
    if (pkg) {
      setSelectedPackage(pkg)
    }
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleNewRecharge = () => {
    setCurrentStep(1)
    setSelectedPackage(null)
    setPhoneNumber("")
  }

  // Calculate commission (10% of total)
  const commission = selectedPackage ? selectedPackage.total * 0.1 : 0
  const subtotal = selectedPackage ? selectedPackage.total : 0
  const total = subtotal + commission

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Completa tu recarga</h2>
        <p className="text-muted-foreground">Sigue los pasos para realizar tu recarga</p>
      </div>

      {/* Stepper */}
      <div className="relative">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((step, index) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step < currentStep
                      ? "bg-primary border-primary text-primary-foreground"
                      : step === currentStep
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-background border-muted-foreground/30 text-muted-foreground"
                  }`}
                >
                  {step < currentStep ? <Check className="h-5 w-5" /> : step}
                </div>
                <span className="text-xs mt-2 text-center font-medium">
                  {step === 1 ? "Paquete" : step === 2 ? "Teléfono" : "Resumen"}
                </span>
              </div>
              {index < 2 && (
                <div
                  className={`flex-1 h-0.5 mx-2 transition-all ${
                    step < currentStep ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {/* Step 1: Package Selection */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Selecciona un paquete</h3>
              <RadioGroup value={selectedPackage?.id} onValueChange={handlePackageSelect}>
                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
                        selectedPackage?.id === pkg.id ? "border-primary bg-primary/5" : "border-border"
                      }`}
                    >
                      <RadioGroupItem value={pkg.id} id={pkg.id} className="mt-1" />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold">{pkg.name}</p>
                          <p className="text-lg font-bold text-primary">${pkg.total}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{pkg.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={handleNextStep} disabled={!selectedPackage}>
                Continuar
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Phone Number */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Ingresa el número de celular</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Número de celular</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456 7890"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    maxLength={10}
                  />
                  <p className="text-xs text-muted-foreground">Ingresa el número a 10 dígitos sin espacios</p>
                </div>

                {selectedPackage && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Paquete seleccionado</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Paquete:</span>
                        <span className="text-sm font-medium">{selectedPackage.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Descripción:</span>
                        <span className="text-sm font-medium">{selectedPackage.description}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total:</span>
                        <span className="text-sm font-bold">${selectedPackage.total}</span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handlePreviousStep}>
                Atrás
              </Button>
              <Button onClick={handleNextStep} disabled={phoneNumber.length !== 10}>
                Continuar
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Summary */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resumen de recarga</h3>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Detalles de la recarga</CardTitle>
                    <Badge variant="secondary">Pendiente</Badge>
                  </div>
                  <CardDescription>Verifica los datos antes de confirmar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">ID de compra:</span>
                    <span className="text-sm font-medium">RC-{Date.now().toString().slice(-8)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Número de celular:</span>
                    <span className="text-sm font-medium">{phoneNumber}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Fecha:</span>
                    <span className="text-sm font-medium">{new Date().toLocaleDateString("es-MX")}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Servicio:</span>
                    <span className="text-sm font-medium">{serviceName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Paquete:</span>
                    <span className="text-sm font-medium">{selectedPackage?.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Estatus:</span>
                    <Badge variant="outline">Pendiente de pago</Badge>
                  </div>
                  <div className="pt-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Subtotal:</span>
                      <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Comisión (10%):</span>
                      <span className="text-sm font-medium">${commission.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t-2">
                      <span className="text-base font-semibold">Total:</span>
                      <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handlePreviousStep}>
                Atrás
              </Button>
              <div className="space-x-2">
                <Button variant="outline" onClick={handleNewRecharge}>
                  Nueva recarga
                </Button>
                <Button>Confirmar recarga</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RechargeStepper
