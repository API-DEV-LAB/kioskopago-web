export const formatPhoneNumber = (phone: string): string => {
	if (!phone || phone?.length < 0) return ''
	const digits = phone.toString().replace(/\D/g, '')
	return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}
