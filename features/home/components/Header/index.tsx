import Image from 'next/image'
import HeaderMenu from '@/features/home/components/HeaderMenu'

export default function Header() {
	return (
		<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 h-16 flex items-center justify-center">
				<nav className="flex items-center w-full justify-between">
					<a href='/'>
						<Image
							src="https://res.cloudinary.com/dtzcyvuqi/image/upload/v1760590312/kioskopago_avnvtf.svg"
							alt="Logo Kioskopago"
							height={60}
							width={180}
						/>
					</a>
					<HeaderMenu />
				</nav>
			</div>
		</header>
	)
}

export { Header }
