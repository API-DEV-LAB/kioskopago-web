'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
    RiSearchLine,
} from '@remixicon/react'

export default function SearchSales() {
    const [searchTerm, setSearchTerm] = useState<string>('')
    return (
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Buscar por teléfono, servicio"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>
        </div>
    )
}

export { SearchSales }
