import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import { METADATA } from '@/shared/utils/metadata'

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
	metadataBase: new URL(METADATA.URL),
	title: {
		default: METADATA.TITLE,
		template: '%s | Kioskopago',
	},
	description: METADATA.DESCRIPTION,
	keywords: METADATA.KEYWORDS,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: METADATA.URL,
	},
	openGraph: {
		title: METADATA.TITLE,
		description: METADATA.DESCRIPTION,
		url: METADATA.URL,
		siteName: 'Kioskopago',
		locale: 'es_MX',
		type: 'website',
		images: [
			{
				url: METADATA.IMAGE,
				width: 1200,
				height: 630,
				alt: METADATA.DESCRIPTION,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: METADATA.TITLE,
		description: METADATA.DESCRIPTION,
		images: [METADATA.IMAGE],
	},
	// PWA
	manifest: '/manifest.json',
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: 'Kioskopago',
	},
	icons: {
		apple: '/icons/apple-touch-icon.png',
	},
}

export const viewport: Viewport = {
	themeColor: '#000000',
	width: 'device-width',
	initialScale: 1,
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
