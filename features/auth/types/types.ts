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
	phoneNumber: string
	rfc: string
	email: string
	acceptTerms: boolean
}
