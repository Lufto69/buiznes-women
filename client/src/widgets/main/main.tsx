import Image from 'next/image'

import { Button } from '@/shared/ui/button/button'
import style from './main.module.scss'

export const Main = () => {
	return (
		<div className={style.main}>
			<Image
				className={style.img}
				src=""
				alt=""
			/>
			<div className={style.container}>
				<h1>
					Комитет по развитию женского <br />
					предпринимательства
				</h1>
				<p>
					Деятельность комитета направлена
					<br /> на развитие женского предпринимательства
				</p>

				<Button className={style.button}>Как вступить в комитет</Button>
			</div>
		</div>
	)
}
