import { GrocerHeader } from '@/features/dashboard/components/GrocerHeader'
import { MobileNavigation } from '@/features/dashboard/components/MobileNavigation'

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<GrocerHeader />
			{children}
			<MobileNavigation />
		</div>
	)
}
