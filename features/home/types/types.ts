export interface Service {
	id: number
	name: string
	image: string
	type: string
}

export interface ServicesResponse {
	data: Service[]
}
