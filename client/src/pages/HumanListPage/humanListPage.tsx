import { Footer } from '@/widgets/footer/footer'
import { Header } from '@/widgets/header/header'
import { HumanList } from '@/widgets/humanList/humanList'
import { Partners } from '@/widgets/partners/partners'
export default function HumanPage() {
	return (
		<>
			<Header />
			<HumanList />
			<Partners />
			<Footer />
		</>
	)
}
