'use client'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { listStores } from '@/features/admin/api/stores'
import { listUsers } from '@/features/admin/api/users'
import { listTransactions } from '@/features/admin/api/transactions'
import { formatCurrency, formatDate } from '@/shared/utils/formats'

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({ stores: 0, users: 0, transactions: 0 })
  const [recentTransactions, setRecentTransactions] = useState<Awaited<ReturnType<typeof listTransactions>>['transactions']>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storesData, usersData, txData] = await Promise.all([
          listStores({ limit: 1 }),
          listUsers({ limit: 1 }),
          listTransactions({ limit: 5 }),
        ])
        setStats({ stores: storesData.total, users: usersData.total, transactions: txData.total })
        setRecentTransactions(txData.transactions)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) return <div className="text-muted-foreground">Cargando...</div>

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">Tiendas</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold">{stats.stores}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">Usuarios</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold">{stats.users}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">Transacciones</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold">{stats.transactions}</p></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Transacciones recientes</CardTitle></CardHeader>
        <CardContent>
          {recentTransactions.length === 0 ? (
            <p className="text-muted-foreground text-sm">Sin transacciones aún.</p>
          ) : (
            <div className="space-y-3">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div>
                    <p className="text-sm font-medium">{tx.storeName}</p>
                    <p className="text-xs text-muted-foreground">{tx.folio} · {formatDate(tx.createdAt)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{formatCurrency(tx.totalAmount)}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      tx.status === 'SUCCESS' ? 'bg-green-100 text-green-700' :
                      tx.status === 'FAILED' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>{tx.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
