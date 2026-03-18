'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { listTransactions, Transaction, TransactionType, TransactionStatus } from '@/features/admin/api/transactions'
import { formatCurrency, formatDate } from '@/shared/utils/formats'

const STATUS_COLORS: Record<TransactionStatus, string> = {
  SUCCESS: 'bg-green-100 text-green-700',
  PENDING: 'bg-yellow-100 text-yellow-700',
  FAILED: 'bg-red-100 text-red-700',
  REFUNDED: 'bg-blue-100 text-blue-700',
}

export default function TransaccionesPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState<{ type?: TransactionType; status?: TransactionStatus; search?: string }>({})

  const fetchTransactions = async (p = page) => {
    setIsLoading(true)
    try {
      const data = await listTransactions({ page: p, limit: 20, ...filters })
      setTransactions(data.transactions)
      setTotal(data.total)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { fetchTransactions() }, [page])

  const totalPages = Math.ceil(total / 20)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Transacciones</h1>

      <div className="flex flex-wrap gap-3">
        <Input placeholder="Buscar folio o referencia..." className="max-w-xs"
          onChange={(e) => setFilters(f => ({ ...f, search: e.target.value || undefined }))} />
        <select className="border rounded-md px-3 py-2 text-sm"
          onChange={(e) => setFilters(f => ({ ...f, type: (e.target.value as TransactionType) || undefined }))}>
          <option value="">Todos los tipos</option>
          <option value="SALE">SALE</option>
          <option value="TOPUP">TOPUP</option>
          <option value="REFUND">REFUND</option>
        </select>
        <select className="border rounded-md px-3 py-2 text-sm"
          onChange={(e) => setFilters(f => ({ ...f, status: (e.target.value as TransactionStatus) || undefined }))}>
          <option value="">Todos los estados</option>
          <option value="SUCCESS">SUCCESS</option>
          <option value="PENDING">PENDING</option>
          <option value="FAILED">FAILED</option>
          <option value="REFUNDED">REFUNDED</option>
        </select>
        <Button variant="outline" onClick={() => { setPage(1); fetchTransactions(1) }}>Filtrar</Button>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Cargando...</p>
      ) : (
        <>
          <div className="border rounded-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-medium">Folio</th>
                  <th className="text-left p-3 font-medium">Tienda</th>
                  <th className="text-left p-3 font-medium">Tipo</th>
                  <th className="text-left p-3 font-medium">Monto</th>
                  <th className="text-left p-3 font-medium">Estado</th>
                  <th className="text-left p-3 font-medium">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-t hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs">{tx.folio}</td>
                    <td className="p-3">{tx.storeName}</td>
                    <td className="p-3"><Badge variant="outline">{tx.type}</Badge></td>
                    <td className="p-3 font-semibold">{formatCurrency(tx.totalAmount)}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${STATUS_COLORS[tx.status]}`}>{tx.status}</span>
                    </td>
                    <td className="p-3 text-muted-foreground">{formatDate(tx.createdAt)}</td>
                  </tr>
                ))}
                {transactions.length === 0 && (
                  <tr><td colSpan={6} className="p-6 text-center text-muted-foreground">Sin transacciones.</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{total} transacciones totales</span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Anterior</Button>
              <span className="px-2 py-1">Pág {page} / {totalPages}</span>
              <Button size="sm" variant="outline" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Siguiente</Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
