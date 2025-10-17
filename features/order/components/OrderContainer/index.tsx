import { WidgetSales } from '@/features/order/components/WidgetSales'
import { SearchSales } from '@/features/order/components/SearchSales'
import { SalesList } from '@/features/order/components/SalesList'

export default function OrderContainer() {
    return (
        <>
            <SearchSales />
            <WidgetSales total={150} salesTotal={12500} saldo={3000} />
            <SalesList />
        </>
    )
}

export { OrderContainer }