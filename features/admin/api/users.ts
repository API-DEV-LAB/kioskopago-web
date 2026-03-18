import API from '@/lib/axios'

export interface User {
  id: string
  name: string
  fatherLastname: string
  motherLastname: string
  email: string
  phone: string
  role: 'ADMIN' | 'GROCER'
  status: 'ENABLED' | 'DISABLED'
  createdAt: string
  stores?: { id: string; name: string }[]
}

export interface CreateUserDto {
  name: string
  fatherLastname: string
  motherLastname: string
  email: string
  password: string
  phone: string
  role: 'ADMIN' | 'GROCER'
}

export interface UpdateUserDto {
  name?: string
  fatherLastname?: string
  motherLastname?: string
  phone?: string
  status?: 'ENABLED' | 'DISABLED'
  role?: 'ADMIN' | 'GROCER'
}

export async function listUsers(params?: { page?: number; limit?: number; role?: string; search?: string }) {
  const response = await API.get<{ items: User[]; total: number }>('/users', { params })
  return response.data
}

export async function getUser(id: string) {
  const response = await API.get<User>(`/users/${id}`)
  return response.data
}

export async function createUser(data: CreateUserDto) {
  const response = await API.post<User>('/users', data)
  return response.data
}

export async function updateUser(id: string, data: UpdateUserDto) {
  const response = await API.patch<User>(`/users/${id}`, data)
  return response.data
}

export async function deleteUser(id: string) {
  const response = await API.delete(`/users/${id}`)
  return response.data
}
