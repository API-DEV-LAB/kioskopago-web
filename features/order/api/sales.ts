import API from '@/lib/axios'
import { AxiosResponse } from 'axios'
import { SaleResponse } from '@/features/order/types/types'

export async function OrderSalesGet(): Promise<AxiosResponse<SaleResponse>> {
    try {
        const response = await API.get('/order/sales')
        return response.data.data
    } catch (error) {
        console.error('OrderSalesGet::error', error)
        throw error
    }
}
