import HeaderMenu from '@/features/home/components/HeaderMenu'

export default function Header() {
	return (
		<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 h-16 flex items-center justify-center">
				<nav className="flex items-center gap-8">
					<HeaderMenu />
				</nav>
			</div>
		</header>
	)
}

export { Header }
