'use client'
import { formatPhone } from '@/shared/utils/formats'
import { useAuthLoginStore } from '@/features/auth/store/login'

export default function TitlePhone() {
	const { phone } = useAuthLoginStore()
	return (
		<div className="flex items-center justify-center gap-2 text-md font-medium text-foreground pt-1">
			{formatPhone(phone)}
		</div>
	)
}

export { TitlePhone }
