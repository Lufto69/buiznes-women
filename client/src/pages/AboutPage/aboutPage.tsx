import { About } from '@/widgets/about/about'
import { Footer } from '@/widgets/footer/footer'
import { Header } from '@/widgets/header/header'
import { Partners } from '@/widgets/partners/partners'
export default function AboutPage() {
	return (
		<>
			<Header />
			<About />
			<Partners />
			<Footer />
		</>
	)
}
