export interface Service {
	id: number
	name: string
	image: string
}

export interface ServicesResponse {
	data: Service[]
}
