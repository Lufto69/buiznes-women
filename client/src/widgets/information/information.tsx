import { Massagers } from '@/shared/ui/massagers/massagers'

import { Button } from '@/shared/ui/button/button'
import Image from 'next/image'
import bg from '../../../public/communication-social-media-icons-smartphone-device-transformed 1.svg'
import style from './information.module.scss'

export const Information = () => {
	return (
		<>
			<div className={style.map}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8619.018137369032!2d48.39174051430996!3d54.3161167372145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d376e963ac91b%3A0x1a6497f148e8d024!2z0JTQstC-0YDQtdGGIMKr0JPRg9Cx0LXRgNC90LDRgtC-0YDRgdC60LjQucK7!5e0!3m2!1sru!2sru!4v1724104798237!5m2!1sru!2sru"
					width="100%"
					height="450"
					loading="lazy"
				></iframe>
				<div className={style.wrap}>
					<address>
						<h2>Social and adress</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. Aenean
							massa. Cum sociis natoque{' '}
						</p>
						<Massagers />
					</address>
				</div>
			</div>

			<div className={style.wrapper}>
				<div className={style.info}>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Aenean commodo ligula eget dolor. Aenean massa.
						Cum sociis natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus...
					</p>
					<Button>more...</Button>
				</div>
				<Image
					className={style.background}
					src={bg}
					alt=""
				/>
				<div className={style.info}>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Aenean commodo ligula eget dolor. Aenean massa.
						Cum sociis natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus...
					</p>
					<Button>more...</Button>
				</div>
			</div>
		</>
	)
}
