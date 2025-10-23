import Image from 'next/image'
import DesktopNavigation from '@/features/home/components/DesktopNavigation'
import MobileNavigation from '@/features/home/components/MobileNavigation'

interface HeaderProps {
	withMenu?: boolean
}

export default function Header({ withMenu = true }: HeaderProps) {
	return (
		<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between md:justify-center">
				{!withMenu && (
					<nav className="flex items-center w-full justify-between">
						<a href='/'>
							<Image
								src="https://res.cloudinary.com/dtzcyvuqi/image/upload/v1760590312/kioskopago_avnvtf.svg"
								alt="Logo Kioskopago"
								height={60}
								width={180}
							/>
						</a>
					</nav>
				)}
				{withMenu && (
					<>
						<nav className="hidden md:flex items-center w-full justify-between">
							<a href='/'>
								<Image
									src="https://res.cloudinary.com/dtzcyvuqi/image/upload/v1760590312/kioskopago_avnvtf.svg"
									alt="Logo Kioskopago"
									height={60}
									width={180}
								/>
							</a>
							<DesktopNavigation />
						</nav>
						<MobileNavigation />
					</>
				)}
			</div>
		</header>
	)
}

export { Header }
