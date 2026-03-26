'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { PHONE_MAX, PHONE_PLACEHOLDER } from '@/shared/utils/constants'

export default function ProfilePage() {
	const [isSaving, setIsSaving] = useState(false)
	const [formData, setFormData] = useState({
		storeName: '',
		storeAddress: '',
		storeLocation: '',
		ownerName: '',
		phoneNumber: '',
		rfc: '',
		email: '',
	})

	// Load profile data on mount (simulated)
	useEffect(() => {
		// Simulate loading profile data from API
		const loadProfileData = async () => {
			await new Promise((resolve) => setTimeout(resolve, 500))

			// Mock data - in real app, this would come from API
			setFormData({
				storeName: 'Ferretería El Martillo',
				storeAddress: 'Av. Reforma #456, Col. Centro',
				storeLocation: '19.4326, -99.1332',
				ownerName: 'Juan Pérez García',
				phoneNumber: '(555) 123-4567',
				rfc: 'PEGJ850101ABC',
				email: 'juan.perez@ferreteria.com',
			})
		}

		loadProfileData()
	}, [])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSaving(true)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		setIsSaving(false)
		alert('Perfil actualizado exitosamente')
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
		<main className="w-full max-w-3xl mx-auto px-4 py-8">
			<div className="space-y-2 mb-8">
				<h1 className="text-2xl font-bold">Mi Perfil</h1>
				<p className="text-muted-foreground">
					Información de mi tienda y cuenta
				</p>
			</div>
			<Card className="w-full border-none shadow-none rounded-lg mb-[60px]">
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-4">
							<h3 className="text-lg font-semibold flex items-center gap-2">
								Información de la tienda
							</h3>
							<div className="space-y-2">
								<Label
									htmlFor="storeName"
									className="flex items-center gap-2"
								>
									Nombre de la tienda
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
									Dirección de la tienda
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
									Geolocalización
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
						</div>
						<div className="space-y-4 pt-4 border-t">
							<h3 className="text-lg font-semibold flex items-center gap-2">
								Información personal
							</h3>
							<div className="space-y-2">
								<Label
									htmlFor="ownerName"
									className="flex items-center gap-2"
								>
									Nombre del dueño
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
									Número de celular
								</Label>
								<Input
									id="phoneNumber"
									type="tel"
									placeholder={PHONE_PLACEHOLDER}
									required
									maxLength={PHONE_MAX}
									value={formData.phoneNumber}
									onChange={(e) =>
										setFormData({
											...formData,
											phoneNumber: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className="space-y-4 pt-4 border-t">
							<h3 className="text-lg font-semibold">
								Información adicional
							</h3>
							<div className="space-y-2">
								<Label
									htmlFor="rfc"
									className="flex items-center gap-2"
								>
									RFC
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
									Correo electrónico
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
						</div>
						<div className="flex gap-3 pt-4">
							<Button
								type="submit"
								className="flex-1"
								disabled={isSaving}
							>
								{isSaving ? 'Guardando...' : 'Guardar Cambios'}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</main>
	)
}
