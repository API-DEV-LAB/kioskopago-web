import { DashboardHeader } from '@/features/home/components/DashboardHeader'
import { MobileNavigation } from '@/features/home/components/MobileNavigation'

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<DashboardHeader />
			{children}
			<MobileNavigation />
		</div>
	)
}
