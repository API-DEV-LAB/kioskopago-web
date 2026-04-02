import { create } from 'zustand'

interface AuthRegisterState {
	formData: {
		storeName: string
		storeAddress: string
		storeLocation: string
		ownerName: string
		phone: string
		rfc: string
		email: string
		acceptTerms: boolean
	}
	setStoreName: (storeName: string) => void
	setStoreAddress: (storeAddress: string) => void
	setStoreLocation: (storeLocation: string) => void
	setOwnerName: (ownerName: string) => void
	setPhone: (phone: string) => void
	setRFC: (rfc: string) => void
	setEmail: (email: string) => void
	setAcceptTerms: (acceptTerms: boolean) => void
	reset: () => void
}

export const useAuthRegisterStore = create<AuthRegisterState>((set) => ({
	formData: {
		storeName: '',
		storeAddress: '',
		storeLocation: '',
		ownerName: '',
		phone: '',
		rfc: '',
		email: '',
		acceptTerms: false,
	},
	setStoreName: (storeName) =>
		set((s) => ({ formData: { ...s.formData, storeName } })),
	setStoreAddress: (storeAddress) =>
		set((s) => ({ formData: { ...s.formData, storeAddress } })),
	setStoreLocation: (storeLocation) =>
		set((s) => ({ formData: { ...s.formData, storeLocation } })),
	setOwnerName: (ownerName) =>
		set((s) => ({ formData: { ...s.formData, ownerName } })),
	setPhone: (phone) => set((s) => ({ formData: { ...s.formData, phone } })),
	setRFC: (rfc) => set((s) => ({ formData: { ...s.formData, rfc } })),
	setEmail: (email) => set((s) => ({ formData: { ...s.formData, email } })),
	setAcceptTerms: (acceptTerms) =>
		set((s) => ({ formData: { ...s.formData, acceptTerms } })),
	reset: () =>
		set({
			formData: {
				storeName: '',
				storeAddress: '',
				storeLocation: '',
				ownerName: '',
				phone: '',
				rfc: '',
				email: '',
				acceptTerms: false,
			},
		}),
}))
