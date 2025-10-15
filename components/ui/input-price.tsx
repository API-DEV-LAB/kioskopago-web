'use client'

import type React from 'react'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface PriceInputProps {
	label?: string
	value: string
	onChange: (value: string) => void
	placeholder?: string
	required?: boolean
	disabled?: boolean
	error?: string
	helperText?: string
	currency?: string
	id?: string
}

export default function PriceInput({
	label = 'Precio',
	value,
	onChange,
	placeholder = '0.00',
	required = false,
	disabled = false,
	error,
	helperText,
	currency = 'MXN',
	id = 'price-input',
}: PriceInputProps) {
	const [isFocused, setIsFocused] = useState(false)

	const formatPrice = (val: string) => {
		// Remove non-numeric characters except decimal point
		const numericValue = val.replace(/[^\d.]/g, '')

		// Ensure only one decimal point
		const parts = numericValue.split('.')
		if (parts.length > 2) {
			return parts[0] + '.' + parts.slice(1).join('')
		}

		// Limit to 2 decimal places
		if (parts[1] && parts[1].length > 2) {
			return parts[0] + '.' + parts[1].slice(0, 2)
		}

		return numericValue
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formatted = formatPrice(e.target.value)
		onChange(formatted)
	}

	const displayValue = () => {
		if (!value) return ''
		if (isFocused) return value

		// Format with thousand separators when not focused
		const num = Number.parseFloat(value)
		if (isNaN(num)) return value

		return new Intl.NumberFormat('es-MX', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(num)
	}

	return (
		<div className="space-y-2">
			{label && (
				<Label htmlFor={id} className="text-sm font-medium">
					{label}
				</Label>
			)}

			<div className="relative">
				<div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground">
					<span className="text-sm font-medium">{currency}</span>
				</div>

				<Input
					id={id}
					type="text"
					inputMode="decimal"
					value={isFocused ? value : displayValue()}
					onChange={handleChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					placeholder={placeholder}
					disabled={disabled}
					required={required}
					className={`pl-20 text-right text-lg ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
					aria-invalid={!!error}
					aria-describedby={
						error
							? `${id}-error`
							: helperText
								? `${id}-helper`
								: undefined
					}
				/>
			</div>

			{error && (
				<p
					id={`${id}-error`}
					className="text-sm text-red-500 flex items-center gap-1"
				>
					<span className="font-medium">Error:</span> {error}
				</p>
			)}

			{helperText && !error && (
				<p
					id={`${id}-helper`}
					className="text-sm text-muted-foreground"
				>
					{helperText}
				</p>
			)}
		</div>
	)
}
