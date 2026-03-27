import { create } from 'zustand'
import { Company } from '@/features/services/types/types'
import { CategoriesResponse } from '@/features/cart/types/types'
import { PATH_CART } from '@/shared/utils/constants'

interface CartState {
	product: any
	type: string
	categorie: CategoriesResponse | null
	total: string
	phone: string
	reference: string
	step: number | null
	setProduct: (service: any) => void
	setType: (type: string) => void
	setCategorie: (categorie: CategoriesResponse) => void
	setTotal: (total: string) => void
	setPhone: (phone: string) => void
	setReference: (reference: string) => void
	setStep: (step: number) => void
	reset: () => void
}

export const useCartStore = create<CartState>((set) => ({
	product: null,
	type: '',
	categorie: null,
	total: '',
	phone: '',
	reference: '',
	step: PATH_CART.EMPTY,
	setProduct: (product: Company) => set({ product }),
	setType: (type) => set({ type }),
	setCategorie: (categorie: CategoriesResponse) => set({ categorie }),
	setTotal: (total) => set({ total }),
	setPhone: (phone) => set({ phone }),
	setReference: (reference) => set({ reference }),
	setStep: (step) => set({ step }),
	reset: () =>
		set({
			product: null,
			type: '',
			categorie: null,
			total: '',
			phone: '',
			reference: '',
			step: null,
		}),
}))
