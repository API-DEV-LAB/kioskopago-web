'use client'
import { useState } from 'react'
import { RiSearchLine } from '@remixicon/react'
import { Input } from '@/components/ui/input'

export default function SearchBar() {
	const [searchQuery, setSearchQuery] = useState<string>('')

	return (
		<div className="relative">
			<RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
			<Input
				type="search"
				placeholder="Buscar servicios..."
				className="pl-10 bg-background font-medium rounded-full"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
		</div>
	)
}

export { SearchBar }
