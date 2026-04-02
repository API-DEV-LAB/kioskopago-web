import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/tienda/', '/admin/', '/api/'],
			},
		],
		sitemap: 'https://www.kioskopago.com/sitemap.xml',
	}
}
