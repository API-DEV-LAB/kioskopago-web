import { HeroSection } from '@/features/home/components/HeroSection'
import { FeaturesSection } from '@/features/home/components/FeaturesSection'
import { ServicesSection } from '@/features/home/components/ServicesSection'
import { BenefitsSection } from '@/features/home/components/BenefitsSection'
import { CtaSection } from '@/features/home/components/CtaSection'
import { WrapperHeaderFooter } from '@/features/home/components/WrapperHeaderFooter'

export default function IndexPage() {
	return (
		<WrapperHeaderFooter>
			<HeroSection />
			<FeaturesSection />
			<ServicesSection />
			<BenefitsSection />
			<CtaSection />
		</WrapperHeaderFooter>
	)
}
