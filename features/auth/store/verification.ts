import { create } from 'zustand'

interface AuthVerificationState {
	code: string
	setCode: (email: string) => void
	reset: () => void
}

export const useAuthVerificationStore = create<AuthVerificationState>((set) => ({
	code: '',
	setCode: (code) => set({ code }),
	reset: () => set({ code: '' }),
}))
