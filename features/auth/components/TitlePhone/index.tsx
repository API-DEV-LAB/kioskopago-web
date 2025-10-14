'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { formatPhoneNumber } from '@/shared/utils/formats'
import { ROUTES_APP } from '@/shared/utils/constants'

export default function TitlePhone() {
	const router = useRouter()
	const [phoneNumber, setPhoneNumber] = useState<string>('')

	useEffect(() => {
		const storedPhone = sessionStorage.getItem('phoneNumber')
		if (!storedPhone) {
			router.push(ROUTES_APP.LOGIN.path)
			return
		}
		setPhoneNumber(storedPhone)
	}, [])

	return (
		<div className="flex items-center justify-center gap-2 text-md font-medium text-foreground pt-1">
			{formatPhoneNumber(phoneNumber)}
		</div>
	)
}
