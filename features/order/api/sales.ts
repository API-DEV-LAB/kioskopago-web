import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { SaleResponse } from '@/features/order/types/types'

export async function OrderSalesGet(): Promise<AxiosResponse<SaleResponse>> {
    try {
        const response = await API.get(`${process.env.NEXT_PUBLIC_API_URL}/order/sales`)
        const data: AxiosResponse = await response.data.data
        return data
    } catch (error) {
        console.error('HomeServicesGet::error', error)
        throw error
    }
}
