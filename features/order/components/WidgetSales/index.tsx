import { formatPrice } from "@/shared/utils/formats"

interface WidgetSalesProps {
    total: number
    salesTotal: number
    saldo: number
}

export default function WidgetSales({ total, salesTotal, saldo }: WidgetSalesProps) {
    return (
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <p className="text-sm text-slate-600 mb-1">
                        Total de compras
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                        {total}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-slate-600 mb-1">
                        Venta total
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                        {formatPrice(salesTotal)}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-slate-600 mb-1">
                        Saldo restante
                    </p>
                    <p className="text-2xl font-bold text-primary">
                        {formatPrice(saldo)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export { WidgetSales }