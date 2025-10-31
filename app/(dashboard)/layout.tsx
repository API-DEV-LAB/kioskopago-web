import { DashboardHeader } from '@/features/home/components/DashboardHeader'
import { MobileNavigation } from '@/features/home/components/MobileNavigation'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`font-sans overflow-x-hidden`}>
				<div className="min-h-screen bg-background flex flex-col">
					<DashboardHeader />
					{children}
					<MobileNavigation />
				</div>
			</body>
		</html>
	)
}
