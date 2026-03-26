'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { listTransactions, Transaction } from '@/features/admin/api/transactions'

export default function TransaccionesPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState({ type: '', status: '', storeId: '' })

  const load = async () => {
    const r = await listTransactions({
      page,
      limit: 15,
      type: filters.type || undefined,
      status: filters.status || undefined,
      storeId: filters.storeId || undefined,
    })
    setTransactions(r.transactions)
    setTotal(r.total)
  }

  useEffect(() => { load() }, [page, filters])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transacciones</h1>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <select className="border rounded-md px-3 py-2 text-sm" value={filters.type} onChange={(e) => { setFilters(f => ({ ...f, type: e.target.value })); setPage(1) }}>
          <option value="">Todos los tipos</option>
          <option value="SALE">SALE</option>
          <option value="TOPUP">TOPUP</option>
          <option value="REFUND">REFUND</option>
        </select>
        <select className="border rounded-md px-3 py-2 text-sm" value={filters.status} onChange={(e) => { setFilters(f => ({ ...f, status: e.target.value })); setPage(1) }}>
          <option value="">Todos los estados</option>
          <option value="SUCCESS">SUCCESS</option>
          <option value="PENDING">PENDING</option>
          <option value="FAILED">FAILED</option>
          <option value="REFUNDED">REFUNDED</option>
        </select>
        <Input placeholder="ID de tienda..." className="max-w-xs" value={filters.storeId} onChange={(e) => { setFilters(f => ({ ...f, storeId: e.target.value })); setPage(1) }} />
      </div>

      <div className="rounded-md border">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left">Folio</th>
              <th className="px-4 py-3 text-left">Tienda</th>
              <th className="px-4 py-3 text-left">Tipo</th>
              <th className="px-4 py-3 text-right">Monto</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr><td colSpan={6} className="px-4 py-6 text-center text-muted-foreground">Sin transacciones</td></tr>
            ) : transactions.map((t) => (
              <tr key={t.id} className="border-b last:border-0">
                <td className="px-4 py-3 font-mono text-xs">{t.folio}</td>
                <td className="px-4 py-3">{t.storeName}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    t.type === 'TOPUP' ? 'bg-blue-100 text-blue-700' :
                    t.type === 'SALE' ? 'bg-purple-100 text-purple-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>{t.type}</span>
                </td>
                <td className="px-4 py-3 text-right">${Number(t.totalAmount).toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    t.status === 'SUCCESS' ? 'bg-green-100 text-green-700' :
                    t.status === 'FAILED' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>{t.status}</span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{new Date(t.createdAt).toLocaleDateString('es-MX')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{total} transacciones en total</span>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" disabled={page === 1} onClick={() => setPage(p => p - 1)}>Anterior</Button>
          <Button size="sm" variant="outline" disabled={transactions.length < 15} onClick={() => setPage(p => p + 1)}>Siguiente</Button>
        </div>
      </div>
    </div>
  )
}
