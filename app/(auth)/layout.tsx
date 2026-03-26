export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
				<div className="container mx-auto px-4 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="font-bold text-xl">Kioskopago</span>
					</div>
				</div>
			</header>
			<div className="min-h-screen flex items-center justify-center">
				{children}
			</div>
		</div>
	)
}
