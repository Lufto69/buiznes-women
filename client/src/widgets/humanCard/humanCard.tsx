import Image from 'next/image'

import style from './humanCard.module.scss'
import arrow from '../../../public/arrow-back.svg'

export const Human = () => {
	return (
		<div className={style.person}>
			<div className={style.back}>
				<Image
					src={arrow}
					alt=""
				/>
			</div>
			<Image
				src=""
				alt=""
			/>
			<div className={style.person_info}>
				<h1>Name</h1>
				<div>Job</div>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
					natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus...
				</p>
			</div>
		</div>
	)
}
