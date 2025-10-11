import type { Metadata } from 'next'
import './globals.css'

import {
	Nunito_Sans as V0_Font_Nunito_Sans,
	Geist_Mono as V0_Font_Geist_Mono,
	Source_Serif_4 as V0_Font_Source_Serif_4,
} from 'next/font/google'

// Initialize fonts
const _nunitoSans = V0_Font_Nunito_Sans({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})
const _geistMono = V0_Font_Geist_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Kioskopago',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`font-sans`}>{children}</body>
		</html>
	)
}
