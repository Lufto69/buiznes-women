import { Header } from '@/widgets/header/header'
import { Main } from '@/widgets/main/main'
import style from './home.module.scss'
export default function HomePage() {
	return (
		<div className={style.container}>
			<Header />
			<Main />
		</div>
	)
}
