export const formatPhoneNumber = (phone: string): string => {
	if (!phone || phone?.length < 0) return ''
	const digits = phone.toString().replace(/\D/g, '')
	return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export const getDateNow = () => {
	return new Date().toLocaleDateString('es-ES', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

export const formatPrice = (
	value: number | string | undefined,
	locale: string = 'es-MX',
	currency: string = 'MXN',
): string => {
	const number = typeof value === 'string' ? parseFloat(value) : value

	// @ts-ignore
	if (isNaN(number)) return ''

	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
		// @ts-ignore
	}).format(number)
}
