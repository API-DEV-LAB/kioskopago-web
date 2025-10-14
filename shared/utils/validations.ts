import {
	FIELD_REQUIRED,
	CODE_VERIFICATION_MAX,
	PHONE_MAX,
} from '@/shared/utils/constants'

export const validatePhone = (phone: string): string | null => {
	if (!phone) return FIELD_REQUIRED
	const digits = phone.replace(/\D/g, '')
	if (digits.length !== PHONE_MAX)
		return 'El número celular debe tener 10 dígitos'
	return null
}

export const validateCodeVerification = (code: string): string | null => {
	if (!code) return FIELD_REQUIRED
	const digits = code.replace(/\D/g, '')
	if (digits.length !== CODE_VERIFICATION_MAX)
		return 'El código de verificación debe tener 6 dígitos'
	return null
}
