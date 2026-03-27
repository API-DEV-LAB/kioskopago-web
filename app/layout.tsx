import type { Metadata } from 'next'
import './globals.css'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
	title: 'Kioskopago - Paga todo en un solo lugar',
	description:
		'Paga todos tus servicios desde un solo lugar. Recarga tiempo aire, paga luz y agua.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="es">
			<body
				className={`${nunitoSans.className} font-sans overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	)
}
