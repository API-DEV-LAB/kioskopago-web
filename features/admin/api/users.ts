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
	phone?: string
	status?: 'ENABLED' | 'DISABLED'
	role?: 'ADMIN' | 'GROCER'
}

export interface ListUsersResponse {
	items: User[]
	total: number
}

export async function listUsers(params?: {
	page?: number
	limit?: number
	search?: string
	role?: string
}): Promise<ListUsersResponse> {
	const response = await API.get<ListUsersResponse>('/users', { params })
	return response.data
}

export async function createUser(data: CreateUserDto): Promise<User> {
	const response = await API.post<User>('/users', data)
	return response.data
}

export async function updateUser(
	id: string,
	data: UpdateUserDto,
): Promise<User> {
	const response = await API.patch<User>(`/users/${id}`, data)
	return response.data
}

export async function deleteUser(id: string): Promise<{ message: string }> {
	const response = await API.delete<{ message: string }>(`/users/${id}`)
	return response.data
}
