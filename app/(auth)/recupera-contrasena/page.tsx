import type { Metadata } from 'next'
import FormRecoverPassword from '@/features/auth/components/FormRecoverPassword'

export const metadata: Metadata = {
    title: 'Recuperar contraseña',
    description:
        'Ingresa tu número de celular y te enviaremos un código por SMS.',
}

export default function RecuperarContraseñaPage() {
    return <FormRecoverPassword />
}
