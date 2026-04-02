import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import { METADATA } from '@/shared/utils/metadata'

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	display: 'swap',
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
		siteName: METADATA.TITLE_SHORT,
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
			<head>
				<link rel="icon" type="image/png" href="" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="" />
				<link rel="shortcut icon" href="" />
				<link rel="apple-touch-icon" sizes="180x180" href="" />
				<link rel="manifest" href="/manifest.json" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'SportsOrganization',
							name: 'Kioskopago',
							url: METADATA.URL,
							logo: METADATA.IMAGE,
							description: METADATA.DESCRIPTION,
							sameAs: [],
						}),
					}}
				/>
			</head>
			<body className={`${nunitoSans.className} overflow-x-hidden`}>
				{children}
			</body>
		</html>
	)
}
