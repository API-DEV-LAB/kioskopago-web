import { AdminHeader } from '@/features/dashboard/components/AdminHeader'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<AdminHeader />
			{children}
		</div>
	)
}
