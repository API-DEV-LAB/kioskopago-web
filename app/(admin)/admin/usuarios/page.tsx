'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { listUsers, createUser, updateUser, deleteUser, User } from '@/features/admin/api/users'

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Create modal
  const [showCreate, setShowCreate] = useState(false)
  const [createForm, setCreateForm] = useState({ name: '', fatherLastname: '', motherLastname: '', email: '', password: '', phone: '', role: 'GROCER' as 'ADMIN' | 'GROCER' })
  const [createLoading, setCreateLoading] = useState(false)

  const fetchUsers = async () => {
    setIsLoading(true)
    try {
      const data = await listUsers({ search: search || undefined })
      setUsers(data.items)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { fetchUsers() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreateLoading(true)
    try {
      await createUser(createForm)
      setShowCreate(false)
      setCreateForm({ name: '', fatherLastname: '', motherLastname: '', email: '', password: '', phone: '', role: 'GROCER' })
      fetchUsers()
    } catch { alert('Error al crear usuario') }
    finally { setCreateLoading(false) }
  }

  const handleToggleStatus = async (user: User) => {
    if (!confirm(`¿${user.status === 'ENABLED' ? 'Deshabilitar' : 'Habilitar'} a ${user.name}?`)) return
    try {
      if (user.status === 'ENABLED') {
        await deleteUser(user.id)
      } else {
        await updateUser(user.id, { status: 'ENABLED' })
      }
      fetchUsers()
    } catch { alert('Error al actualizar usuario') }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Usuarios</h1>
        <Button onClick={() => setShowCreate(true)}>Nuevo usuario</Button>
      </div>

      <div className="flex gap-3">
        <Input placeholder="Buscar usuario..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm" />
        <Button variant="outline" onClick={fetchUsers}>Buscar</Button>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Cargando...</p>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Nombre</th>
                <th className="text-left p-3 font-medium">Contacto</th>
                <th className="text-left p-3 font-medium">Rol</th>
                <th className="text-left p-3 font-medium">Estado</th>
                <th className="text-left p-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-muted/50">
                  <td className="p-3">
                    <p className="font-medium">{user.name} {user.fatherLastname}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </td>
                  <td className="p-3 text-muted-foreground">{user.phone}</td>
                  <td className="p-3">
                    <Badge variant={user.role === 'ADMIN' ? 'default' : 'secondary'}>{user.role}</Badge>
                  </td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${user.status === 'ENABLED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {user.status === 'ENABLED' ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="p-3">
                    <Button size="sm" variant="outline" onClick={() => handleToggleStatus(user)}>
                      {user.status === 'ENABLED' ? 'Deshabilitar' : 'Habilitar'}
                    </Button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr><td colSpan={5} className="p-6 text-center text-muted-foreground">No hay usuarios.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Create user modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg m-4 max-h-[90vh] overflow-y-auto">
            <CardHeader><CardTitle>Nuevo usuario</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleCreate} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label>Nombre</Label>
                    <Input value={createForm.name} onChange={(e) => setCreateForm(f => ({ ...f, name: e.target.value }))} required />
                  </div>
                  <div className="space-y-1">
                    <Label>Apellido paterno</Label>
                    <Input value={createForm.fatherLastname} onChange={(e) => setCreateForm(f => ({ ...f, fatherLastname: e.target.value }))} required />
                  </div>
                  <div className="space-y-1">
                    <Label>Apellido materno</Label>
                    <Input value={createForm.motherLastname} onChange={(e) => setCreateForm(f => ({ ...f, motherLastname: e.target.value }))} required />
                  </div>
                  <div className="space-y-1">
                    <Label>Teléfono</Label>
                    <Input value={createForm.phone} onChange={(e) => setCreateForm(f => ({ ...f, phone: e.target.value }))} required />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label>Correo electrónico</Label>
                  <Input type="email" value={createForm.email} onChange={(e) => setCreateForm(f => ({ ...f, email: e.target.value }))} required />
                </div>
                <div className="space-y-1">
                  <Label>Contraseña</Label>
                  <Input type="password" value={createForm.password} onChange={(e) => setCreateForm(f => ({ ...f, password: e.target.value }))} required />
                </div>
                <div className="space-y-1">
                  <Label>Rol</Label>
                  <select className="w-full border rounded-md px-3 py-2 text-sm" value={createForm.role} onChange={(e) => setCreateForm(f => ({ ...f, role: e.target.value as 'ADMIN' | 'GROCER' }))}>
                    <option value="GROCER">GROCER (Tienda)</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
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
    </div>
  )
}
