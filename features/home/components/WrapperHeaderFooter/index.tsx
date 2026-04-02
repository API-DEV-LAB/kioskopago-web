import { Header } from '@/features/home/components/Header'
import { Footer } from '@/features/home/components/Footer'

interface WrapperHeaderFooterProps {
	children: React.ReactNode
}

export default function WrapperHeaderFooter({
	children,
}: WrapperHeaderFooterProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export { WrapperHeaderFooter }
