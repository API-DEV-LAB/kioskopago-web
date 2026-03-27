export interface Company {
	id: number | null
	categoryCompanyId: number | null
	name: string | null
	icon: string | null
	order: number | null
	isOnHome: boolean | null
	createdAt: string | null
	updatedAt: string | null
	abbreviation: string | null
	type: string
}
export interface ServiceCategory {
	id: number
	name: string
	order: number
	icon: string
	createdAt: string
	updatedAt: string
	companies: Company[]
}

export interface ServicesResponse {
	data: ServiceCategory[]
}
