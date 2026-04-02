export function formatCurrency(amount: number | string | undefined): string {
	if (amount === undefined || amount === null) return '$0.00'
	return new Intl.NumberFormat('es-MX', {
		style: 'currency',
		currency: 'MXN',
	}).format(Number(amount))
}

// Alias usado en componentes legacy
export const formatPrice = (amount: number | string | undefined): string =>
	formatCurrency(amount)

export function formatDate(dateStr: string): string {
	return new Intl.DateTimeFormat('es-MX', {
		dateStyle: 'medium',
		timeStyle: 'short',
	}).format(new Date(dateStr))
}

export function getDateNow(): string {
	return new Intl.DateTimeFormat('es-MX', {
		dateStyle: 'medium',
		timeStyle: 'short',
	}).format(new Date())
}

export function formatPhone(phone: string): string {
	const digits = phone.replace(/\D/g, '')
	if (digits.length === 10) {
		return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6)}`
	}
	return phone
}
