'use client'

import type React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ROUTES_APP } from '@/shared/utils/constants'

export default function RegisterPage() {
	const router = useRouter()
	const [formData, setFormData] = useState({
		storeName: '',
		storeAddress: '',
		storeLocation: '',
		ownerName: '',
		phoneNumber: '',
		rfc: '',
		email: '',
		acceptTerms: false,
	})
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!formData.acceptTerms) {
			alert('Debes aceptar los términos y condiciones')
			return
		}

		setIsLoading(true)

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000))

		// Store phone number for verification
		sessionStorage.setItem('phoneNumber', formData.phoneNumber)

		setIsLoading(false)
		router.push('/verification')
	}

	const handleGetLocation = () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const location = `${position.coords.latitude}, ${position.coords.longitude}`
					setFormData({ ...formData, storeLocation: location })
				},
				(error) => {
					alert(
						'No se pudo obtener la ubicación. Por favor, ingrésala manualmente.',
					)
				},
			)
		} else {
			alert('Tu navegador no soporta geolocalización')
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
			<Card className="w-full max-w-2xl shadow-lg rounded-lg">
				<CardHeader className="space-y-1 text-center">
					<CardTitle className="text-2xl font-bold">
						Registra tu tienda
					</CardTitle>
					<CardDescription>
						Completa la información para comenzar a vender
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label
								htmlFor="storeName"
								className="flex items-center gap-2"
							>
								Nombre de la tienda*
							</Label>
							<Input
								id="storeName"
								placeholder="Mi Tienda"
								required
								value={formData.storeName}
								onChange={(e) =>
									setFormData({
										...formData,
										storeName: e.target.value,
									})
								}
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="storeAddress"
								className="flex items-center gap-2"
							>
								Dirección de la tienda*
							</Label>
							<Input
								id="storeAddress"
								placeholder="Calle Principal #123, Colonia Centro"
								required
								value={formData.storeAddress}
								onChange={(e) =>
									setFormData({
										...formData,
										storeAddress: e.target.value,
									})
								}
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="storeLocation"
								className="flex items-center gap-2"
							>
								Geolocalización*
							</Label>
							<div className="flex gap-2">
								<Input
									id="storeLocation"
									placeholder="Latitud, Longitud"
									required
									disabled
									value={formData.storeLocation}
									onChange={(e) =>
										setFormData({
											...formData,
											storeLocation: e.target.value,
										})
									}
								/>
								<Button
									type="button"
									variant="outline"
									onClick={handleGetLocation}
								>
									Obtener
								</Button>
							</div>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="ownerName"
								className="flex items-center gap-2"
							>
								Nombre del dueño*
							</Label>
							<Input
								id="ownerName"
								placeholder="Juan Pérez"
								required
								value={formData.ownerName}
								onChange={(e) =>
									setFormData({
										...formData,
										ownerName: e.target.value,
									})
								}
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="phoneNumber"
								className="flex items-center gap-2"
							>
								Número de celular*
							</Label>
							<Input
								id="phoneNumber"
								type="tel"
								placeholder="(123) 456 7890"
								required
								value={formData.phoneNumber}
								onChange={(e) =>
									setFormData({
										...formData,
										phoneNumber: e.target.value,
									})
								}
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="rfc"
								className="flex items-center gap-2"
							>
								RFC (opcional)
							</Label>
							<Input
								id="rfc"
								placeholder="XAXX010101000"
								value={formData.rfc}
								onChange={(e) =>
									setFormData({
										...formData,
										rfc: e.target.value,
									})
								}
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="email"
								className="flex items-center gap-2"
							>
								Correo electrónico (opcional)
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="correo@ejemplo.com"
								value={formData.email}
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
							/>
						</div>
						<div className="flex items-start space-x-2 pt-2">
							<Checkbox
								id="terms"
								checked={formData.acceptTerms}
								onCheckedChange={(checked) =>
									setFormData({
										...formData,
										acceptTerms: checked as boolean,
									})
								}
							/>
							<label
								htmlFor="terms"
								className="text-sm leading-relaxed text-muted-foreground cursor-pointer"
							>
								He leido y acepto los{' '}
								<a
									href={ROUTES_APP.TERMSANDCONDITIONS.path}
									className="text-primary hover:underline"
								>
									términos y condiciones
								</a>
							</label>
						</div>
						<Button
							type="submit"
							className="w-full"
							size="lg"
							disabled={isLoading}
						>
							{isLoading ? 'Registrando...' : 'Registrar Tienda'}
						</Button>
						<p className="text-center text-sm text-muted-foreground">
							¿Ya tienes una cuenta?{' '}
							<a
								href={ROUTES_APP.LOGIN.path}
								className="text-primary hover:underline font-medium"
							>
								Inicia sesión
							</a>
						</p>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
