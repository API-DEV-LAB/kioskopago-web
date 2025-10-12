'use client'
import { useState } from 'react'
import { RiSearchLine } from '@remixicon/react'
import { Input } from '@/components/ui/input'

export default function SearchBar() {
	const [searchQuery, setSearchQuery] = useState<string>('')
	return (
		<div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-8 mt-8">
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-1 relative">
					<RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
					<Input
						type="text"
						placeholder="Telcel, AT&T, CFE, CEA"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="pl-10"
					/>
				</div>
			</div>
		</div>
	)
}

export { SearchBar }
