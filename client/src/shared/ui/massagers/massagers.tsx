import clsx from 'clsx'
import Image from 'next/image'
import style from './massager.module.scss'

import yt from '../../../../public/Youtube-Fill.svg'
import TG from '../../../../public/tg.svg'
import VK from '../../../../public/vk.svg'

export const Massagers = () => {
	return (
		<div className={clsx(style.wrapper_link_massager)}>
			<a
				className={style.link_massager}
				href="https://www.youtube.com"
			>
				<Image
					src={yt}
					alt="youtube"
				/>
			</a>
			<a
				className={style.link_massager}
				href="https://www.youtube.com"
			>
				<Image
					src={TG}
					alt="telegram"
				/>
			</a>
			<a
				className={style.link_massager}
				href="https://www.youtube.com"
			>
				<Image
					src={VK}
					alt="VK"
				/>
			</a>
		</div>
	)
}
