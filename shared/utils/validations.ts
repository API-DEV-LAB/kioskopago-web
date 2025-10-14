import { FIELD_REQUIRED } from '@/shared/utils/constants';

export const validatePhone = (phone: string): string | null => {
	if (!phone) return FIELD_REQUIRED;
	const digits = phone.replace(/\D/g, '');
	if (digits.length !== 10) return 'El número celular debe tener 10 dígitos';
	return null;
};