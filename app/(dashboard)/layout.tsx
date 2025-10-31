import { DashboardHeader } from '@/features/home/components/DashboardHeader'
import { MobileNavigation } from '@/features/home/components/MobileNavigation'
// import { AuthGuard } from '@/shared/components/AuthGuard'

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`font-sans overflow-x-hidden`}>
				{/* <AuthGuard> */}
				<div className="min-h-screen bg-background flex flex-col">
					<DashboardHeader />
					{children}
					<MobileNavigation />
				</div>
				{/* </AuthGuard> */}
			</body>
		</html>
	)
}
