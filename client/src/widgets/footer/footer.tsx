import Image from 'next/image'

import style from './footer.module.scss'

import Link from 'next/link'
import Arrow from '../../../public/Arrow.svg'
import logo from '../../../public/Слой_x0020_1.svg'
import { useContext } from 'react'

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<div className={style.wrap}>
					<div className={style.info}>
						<h5>header</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed ornare cursus sed nunc eget dictum Sed
							ornare cursus sed nunc eget dictumd nunc eget dictum
							Sed ornare cursus sed nunc eget dictum
						</p>
					</div>
					<Image
						className={style.logo}
						alt="logo"
						src={logo}
					/>
				</div>
				<nav className={style.info}>
					<h5>Также можете прочесть</h5>
					<Link href="/about">
						<Image
							src={Arrow}
							alt="Arrow"
						/>
						О комитете
					</Link>
					<Link href="/human">
						<Image
							src={Arrow}
							alt="Arrow"
						/>
						Резиденты
					</Link>
					<Link href="/project">
						<Image
							src={Arrow}
							alt="Arrow"
						/>
						Проекты
					</Link>
					<Link href="/privilege">
						<Image
							src={Arrow}
							alt="Arrow"
						/>
						Привилегии
					</Link>
					<Link href="/information">
						<Image
							src={Arrow}
							alt="Arrow"
						/>
						Контакты
					</Link>
				</nav>
			</div>
		</footer>
	)
}
