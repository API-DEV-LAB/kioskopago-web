export interface Sale {
    id: string
    date: string,
    status: string,
    phone: string,
    company: string,
    total: number
    image: string
}

export interface SaleResponse {
    data: Sale[]
}
