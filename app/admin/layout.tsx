import { AdminHeader } from '@/features/dashboard/components/AdminHeader'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<AdminHeader />
			<main className="container mx-auto px-4 py-8 flex-1 flex flex-col">
				{children}
			</main>
		</div>
	)
}
