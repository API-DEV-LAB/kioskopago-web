export interface LoginProps {
	phoneNumber: string
}

export interface VerificationProps {
	code: string
}

export interface RegisterProps {
	storeName: string
	storeAddress: string
	storeLocation: string
	ownerName: string
	phone: string
	rfc: string
	email: string
	acceptTerms: boolean
}

export interface ProfileProps {
	id?: number | null
	name: string | null
	fatherLastname: string | null
	motherLastname: string | null
	email: string | null
	phone?: string | null
	onboardingStatus?: string | null
	createdAt?: string | null
	updatedAt?: string | null
	termsAndConditions?: boolean
	privacyPolicy?: boolean
}

