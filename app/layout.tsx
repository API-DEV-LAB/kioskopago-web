import type { Metadata } from 'next'
import './globals.css'

import {
	Nunito_Sans as V0_Font_Nunito_Sans,
	Source_Serif_4 as V0_Font_Source_Serif_4,
} from 'next/font/google'

// Initialize fonts
const _nunitoSans = V0_Font_Nunito_Sans({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Kioskopago - Paga todo en un solo lugar',
	description:
		'Paga todos tus servicios desde un solo lugar. Recarga tiempo aire, paga luz y agua. Rápido, seguro y sin complicaciones.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`font-sans overflow-x-hidden`}>{children}</body>
		</html>
	)
}
