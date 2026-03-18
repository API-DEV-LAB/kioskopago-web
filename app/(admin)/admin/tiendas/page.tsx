'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { listStores, createStore, topupStore, getStoreBalance, Store } from '@/features/admin/api/stores'
import { formatCurrency } from '@/shared/utils/formats'

export default function TiendasPage() {
  const [stores, setStores] = useState<Store[]>([])
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Create store modal state
  const [showCreate, setShowCreate] = useState(false)
  const [createForm, setCreateForm] = useState({ name: '', address: '', phone: '', bonusPercentage: 0 })
  const [createLoading, setCreateLoading] = useState(false)

  // Topup modal state
  const [topupStore_, setTopupStore_] = useState<Store | null>(null)
  const [topupForm, setTopupForm] = useState({ amount: '', reference: '' })
  const [topupLoading, setTopupLoading] = useState(false)

  // Balances cache
  const [balances, setBalances] = useState<Record<string, number>>({})

  const fetchStores = async () => {
    setIsLoading(true)
    try {
      const data = await listStores({ search: search || undefined })
      setStores(data.items)
      setTotal(data.total)
      // Fetch balances
      const balanceMap: Record<string, number> = {}
      await Promise.all(data.items.map(async (s) => {
        try {
          const b = await getStoreBalance(s.id)
          balanceMap[s.id] = b.currentBalance
        } catch { balanceMap[s.id] = 0 }
      }))
      setBalances(balanceMap)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { fetchStores() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreateLoading(true)
    try {
      await createStore({ ...createForm, bonusPercentage: Number(createForm.bonusPercentage) })
      setShowCreate(false)
      setCreateForm({ name: '', address: '', phone: '', bonusPercentage: 0 })
      fetchStores()
    } catch { alert('Error al crear tienda') }
    finally { setCreateLoading(false) }
  }

  const handleTopup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!topupStore_) return
    setTopupLoading(true)
    try {
      await topupStore({ storeId: topupStore_.id, amount: Number(topupForm.amount), reference: topupForm.reference || undefined })
      setTopupStore_(null)
      setTopupForm({ amount: '', reference: '' })
      fetchStores()
    } catch { alert('Error al cargar saldo') }
    finally { setTopupLoading(false) }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tiendas</h1>
        <Button onClick={() => setShowCreate(true)}>Nueva tienda</Button>
      </div>

      <div className="flex gap-3">
        <Input placeholder="Buscar tienda..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm" />
        <Button variant="outline" onClick={fetchStores}>Buscar</Button>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Cargando...</p>
      ) : stores.length === 0 ? (
        <p className="text-muted-foreground">No hay tiendas registradas.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stores.map((store) => (
            <Card key={store.id}>
              <CardHeader>
                <CardTitle className="text-base">{store.name}</CardTitle>
                <p className="text-xs text-muted-foreground">{store.address}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Saldo</span>
                  <span className="font-semibold">{formatCurrency(balances[store.id] ?? 0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Bonificación</span>
                  <span>{store.bonusPercentage}%</span>
                </div>
                <Button size="sm" className="w-full" onClick={() => setTopupStore_(store)}>
                  Cargar saldo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Create store modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md m-4">
            <CardHeader><CardTitle>Nueva tienda</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleCreate} className="space-y-4">
                <div className="space-y-1">
                  <Label>Nombre</Label>
                  <Input value={createForm.name} onChange={(e) => setCreateForm(f => ({ ...f, name: e.target.value }))} required />
                </div>
                <div className="space-y-1">
                  <Label>Dirección</Label>
                  <Input value={createForm.address} onChange={(e) => setCreateForm(f => ({ ...f, address: e.target.value }))} required />
                </div>
                <div className="space-y-1">
                  <Label>Teléfono</Label>
                  <Input value={createForm.phone} onChange={(e) => setCreateForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
                <div className="space-y-1">
                  <Label>Bonificación (%)</Label>
                  <Input type="number" min={0} max={100} value={createForm.bonusPercentage} onChange={(e) => setCreateForm(f => ({ ...f, bonusPercentage: Number(e.target.value) }))} />
                </div>
                <div className="flex gap-2 pt-2">
                  <Button type="submit" disabled={createLoading}>{createLoading ? 'Creando...' : 'Crear'}</Button>
                  <Button type="button" variant="outline" onClick={() => setShowCreate(false)}>Cancelar</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Topup modal */}
      {topupStore_ && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md m-4">
            <CardHeader><CardTitle>Cargar saldo — {topupStore_.name}</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleTopup} className="space-y-4">
                <div className="space-y-1">
                  <Label>Monto ($)</Label>
                  <Input type="number" min={1} step="0.01" value={topupForm.amount} onChange={(e) => setTopupForm(f => ({ ...f, amount: e.target.value }))} required />
                </div>
                <div className="space-y-1">
                  <Label>Referencia (opcional)</Label>
                  <Input value={topupForm.reference} onChange={(e) => setTopupForm(f => ({ ...f, reference: e.target.value }))} placeholder="Carga enero 2026" />
                </div>
                <div className="flex gap-2 pt-2">
                  <Button type="submit" disabled={topupLoading}>{topupLoading ? 'Cargando...' : 'Confirmar'}</Button>
                  <Button type="button" variant="outline" onClick={() => setTopupStore_(null)}>Cancelar</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
