import { create } from 'zustand'

interface AuthLoginState {
	phone: string
	setPhone: (phone: string) => void
	reset: () => void
}

export const useAuthLoginStore = create<AuthLoginState>((set) => ({
	phone: '',
	setPhone: (phone) => set({ phone }),
	reset: () => set({ phone: '' }),
}))
