import { Header } from '@/features/home/components/Header'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <body className={`font-sans overflow-x-hidden`}>
                <div className="min-h-screen bg-white flex flex-col">
                    <Header withMenu={false} />
                    <div className="min-h-screen flex items-center justify-center">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
