import { LandingHeader } from '@/features/home/components/LandingHeader'
import { HeroSection } from '@/features/home/components/HeroSection'
import { FeaturesSection } from '@/features/home/components/FeaturesSection'
import { ServicesSection } from '@/features/home/components/ServicesSection'
import { BenefitsSection } from '@/features/home/components/BenefitsSection'
import { CtaSection } from '@/features/home/components/CtaSection'
import { Footer } from '@/features/home/components/Footer'

export default function IndexPage() {
	return (
		<div className="min-h-screen bg-background">
			<LandingHeader />
			<HeroSection />
			<FeaturesSection />
			<ServicesSection />
			<BenefitsSection />
			<CtaSection />
			<Footer />
		</div>
	)
}
