'use client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
	ROUTES_APP,
	PHONE_MAX,
	PHONE_PLACEHOLDER,
} from '@/shared/utils/constants'
import { AuthRegisterPost } from '@/features/auth/api/register'
import { useAuthRegisterStore } from '@/features/auth/store/register'

export default function FormRegister() {
	const router = useRouter()
	const {
		formData,
		setStoreName,
		setStoreAddress,
		setStoreLocation,
		setOwnerName,
		setPhone,
		setAcceptTerms,
	} = useAuthRegisterStore()

	const { mutate, isPending } = useMutation({
		mutationFn: AuthRegisterPost,
		onSuccess: (response) => {
			// @ts-ignore
			if (response?.success === true) {
				router.push(ROUTES_APP.HOME.path)
				toast.success('Tienda registrado correctamente')
			}
		},
		onError: (error) => {
			console.error('AuthRegisterPost form::', error)
		},
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!formData.acceptTerms) {
			toast.error('Debes aceptar los términos y condiciones')
			return
		}

		mutate(formData)
	}

	const handleGetLocation = () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const location = `${position.coords.latitude}, ${position.coords.longitude}`
					setStoreLocation(location)
				},
				(error) => {
					toast.error(
						'No se pudo obtener la ubicación. Por favor, ingrésala manualmente.',
					)
				},
			)
		} else {
			toast.error('Tu navegador no soporta geolocalización')
		}
	}
	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="storeName" className="flex items-center gap-2">
					Nombre de la tienda *
				</Label>
				<Input
					id="storeName"
					placeholder=""
					required
					value={formData.storeName}
					onChange={(e) => setStoreName(e.target.value)}
				/>
			</div>
			<div className="space-y-2">
				<Label
					htmlFor="storeAddress"
					className="flex items-center gap-2"
				>
					Dirección de la tienda *
				</Label>
				<Input
					id="storeAddress"
					placeholder=""
					required
					value={formData.storeAddress}
					onChange={(e) => setStoreAddress(e.target.value)}
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
						placeholder=""
						required
						disabled
						value={formData.storeLocation}
						onChange={(e) => setStoreLocation(e.target.value)}
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
				<Label htmlFor="ownerName" className="flex items-center gap-2">
					Nombre del dueño *
				</Label>
				<Input
					id="ownerName"
					placeholder=""
					required
					value={formData.ownerName}
					onChange={(e) => setOwnerName(e.target.value)}
				/>
			</div>
			<div className="space-y-2">
				<Label
					htmlFor="phoneNumber"
					className="flex items-center gap-2"
				>
					Número de celular *
				</Label>
				<Input
					id="phoneNumber"
					type="tel"
					placeholder={PHONE_PLACEHOLDER}
					required
					value={formData.phone}
					maxLength={PHONE_MAX}
					onChange={(e) => setPhone(e.target.value)}
				/>
			</div>
			<div className="flex items-start space-x-2 pt-2">
				<Checkbox
					id="terms"
					checked={formData.acceptTerms}
					onCheckedChange={(checked) =>
						setAcceptTerms(checked as boolean)
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
				disabled={isPending}
			>
				{isPending ? 'Registrando...' : 'Registrar Tienda'}
			</Button>
			<p className="text-center text-sm text-muted-foreground mt-8 lg:mb-0">
				¿Ya tienes una cuenta?{' '}
				<a
					href={ROUTES_APP.LOGIN.path}
					className="text-primary hover:underline font-medium"
				>
					Inicia sesión
				</a>
			</p>
		</form>
	)
}

export { FormRegister }
