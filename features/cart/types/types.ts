export interface CategoriesResponse {
	id: string
	name: string
	total: number
	description: string
	expired: number
	amount: string
	type: string
	details: {
		term: string
		title: string
	}
}
