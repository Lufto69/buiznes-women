import { Footer } from '@/widgets/footer/footer'
import { Header } from '@/widgets/header/header'
import { HumanList } from '@/widgets/humanList/humanList'
import { Partners } from '@/widgets/partners/partners'
import style from './home.module.scss'
import { Human } from '@/widgets/humanCard/humanCard'
export default function HumanPage() {
	return (
		<>
			<Header />
			<Human />
			<Partners />
			<Footer />
		</>
	)
}
