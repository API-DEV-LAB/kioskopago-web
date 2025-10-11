"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Store, User, Phone, Mail, FileText, Save, Edit } from "lucide-react"
import Header from "@/components/header"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    storeName: "",
    storeAddress: "",
    storeLocation: "",
    ownerName: "",
    phoneNumber: "",
    rfc: "",
    email: "",
  })

  // Load profile data on mount (simulated)
  useEffect(() => {
    // Simulate loading profile data from API
    const loadProfileData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Mock data - in real app, this would come from API
      setFormData({
        storeName: "Ferretería El Martillo",
        storeAddress: "Av. Reforma #456, Col. Centro",
        storeLocation: "19.4326, -99.1332",
        ownerName: "Juan Pérez García",
        phoneNumber: "(555) 123-4567",
        rfc: "PEGJ850101ABC",
        email: "juan.perez@ferreteria.com",
      })
    }

    loadProfileData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate API call to save profile
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSaving(false)
    setIsEditing(false)

    // Show success message
    alert("Perfil actualizado exitosamente")
  }

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = `${position.coords.latitude}, ${position.coords.longitude}`
          setFormData({ ...formData, storeLocation: location })
        },
        (error) => {
          alert("No se pudo obtener la ubicación. Por favor, ingrésala manualmente.")
        },
      )
    } else {
      alert("Tu navegador no soporta geolocalización")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto shadow-lg rounded-lg">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold">Mi Perfil</CardTitle>
                <CardDescription>Información de mi tienda y cuenta</CardDescription>
              </div>
              {!isEditing && (
                <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Store Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  Información de la tienda
                </h3>

                {/* Store Name */}
                <div className="space-y-2">
                  <Label htmlFor="storeName" className="flex items-center gap-2">
                    Nombre de la tienda
                  </Label>
                  <Input
                    id="storeName"
                    placeholder="Mi Tienda"
                    required
                    disabled={!isEditing}
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>

                {/* Store Address */}
                <div className="space-y-2">
                  <Label htmlFor="storeAddress" className="flex items-center gap-2">
                    Dirección de la tienda
                  </Label>
                  <Input
                    id="storeAddress"
                    placeholder="Calle Principal #123, Colonia Centro"
                    required
                    disabled={!isEditing}
                    value={formData.storeAddress}
                    onChange={(e) => setFormData({ ...formData, storeAddress: e.target.value })}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>

                {/* Geolocation */}
                <div className="space-y-2">
                  <Label htmlFor="storeLocation" className="flex items-center gap-2">
                    Geolocalización
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="storeLocation"
                      placeholder="Latitud, Longitud"
                      required
                      disabled={!isEditing}
                      value={formData.storeLocation}
                      onChange={(e) => setFormData({ ...formData, storeLocation: e.target.value })}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                    {isEditing && (
                      <Button type="button" variant="outline" onClick={handleGetLocation}>
                        Obtener
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Owner Information Section */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  Información del dueño
                </h3>

                {/* Owner Name */}
                <div className="space-y-2">
                  <Label htmlFor="ownerName" className="flex items-center gap-2">
                    Nombre del dueño
                  </Label>
                  <Input
                    id="ownerName"
                    placeholder="Juan Pérez"
                    required
                    disabled={!isEditing}
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                    Número de celular
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="(123) 456 7890"
                    required
                    disabled={!isEditing}
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>
              </div>

              {/* Optional Information Section */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold">Información adicional (Opcional)</h3>

                {/* RFC */}
                <div className="space-y-2">
                  <Label htmlFor="rfc" className="flex items-center gap-2">
                    RFC
                  </Label>
                  <Input
                    id="rfc"
                    placeholder="XAXX010101000"
                    disabled={!isEditing}
                    value={formData.rfc}
                    onChange={(e) => setFormData({ ...formData, rfc: e.target.value })}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    disabled={!isEditing}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1" disabled={isSaving}>
                    <Save className="h-4 w-4 mr-2" />
                    {isSaving ? "Guardando..." : "Guardar Cambios"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsEditing(false)} disabled={isSaving}>
                    Cancelar
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
