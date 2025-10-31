import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { RiArrowLeftLine } from '@remixicon/react'
import { ROUTES_APP } from '@/shared/utils/constants'
import { formatPhone } from '@/shared/utils/formats'

interface FormRecoverPasswordSuccessProps {
    phone: string
}
export default function FormRecoverPasswordSuccess({
    phone,
}: FormRecoverPasswordSuccessProps) {
    return (
        <Card className="w-full max-w-[400px] border-none shadow-none">
            <CardHeader className="space-y-4 pb-4">
                <h1 className="text-2xl font-bold text-center">
                    ¡Mensaje enviado!
                </h1>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground text-sm leading-relaxed">
                    Hemos enviado un código de verificación por SMS para restablecer tu
                    contraseña a{' '}
                    <span className="font-medium text-foreground">{formatPhone(phone)}</span>
                </p>
                <p className="text-center text-muted-foreground text-sm leading-relaxed">
                    Por favor revisa tu bandeja de entrada y sigue las
                    instrucciones.
                </p>
                <Link href={ROUTES_APP.LOGIN.path} className="block">
                    <Button className="w-full">
                        <RiArrowLeftLine className="w-4 h-4 mr-2" />
                        Volver a iniciar sesión
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

export { FormRecoverPasswordSuccess }
