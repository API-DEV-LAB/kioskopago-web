// GROCER auth (phone + OTP)
export interface OtpRequestProps {
	phone: string
}

export interface OtpVerifyProps {
	phone: string
	code: string
}

// ADMIN auth (email + password)
export interface AdminLoginProps {
	identifier: string
	password: string
}

// Legacy (kept for compatibility)
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

// JWT payload
export interface JwtPayload {
	sub: string
	email: string
	role: 'ADMIN' | 'GROCER'
	exp: number
}

// Auth responses
export interface AuthResponse {
	accessToken: string
	refreshToken: string
	expiresIn: number
	user: {
		id: string
		name: string
		email: string
		role: 'ADMIN' | 'GROCER'
		status: string
	}
}

export interface OtpRequestResponse {
	message: string
	phone: string
}
