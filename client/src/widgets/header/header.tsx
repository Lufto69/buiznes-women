import { Massagers } from '@/shared/ui/massagers/massagers'
import Image from 'next/image'

import style from './header.module.scss'

import { Button } from '@/shared/ui/button/button'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logo from '../../../public/Слой_x0020_1.svg'

export const Header = () => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const body = document.querySelector('body')
		if (open) {
			body?.classList.add(style.body)
		} else {
			body?.classList.remove(style.body)
		}
	}, [open])

	return (
		<header className={style.header}>
			<div className={style.container}>
				<Menu />
				<div className={style.burger_menu}>
					<input
						type="checkbox"
						id="burger-checkbox"
						className={style.burger_checkbox}
						onClick={() => setOpen(!open)}
					/>
					<label
						className={style.burger}
						htmlFor="burger-checkbox"
					></label>
				</div>
			</div>

			<div className={clsx(style.burger_modal, open ? style.active : '')}>
				<Menu />
			</div>
		</header>
	)
}

const Menu = () => {
	return (
		<>
			<nav>
				<Link href="/about">О комитете</Link>
				<Link href="/human">Резиденты</Link>
				<Link href="/project">Проекты</Link>
				<Link href="/privilege">Привилегии</Link>
				<Link href="/information">Контакты</Link>
			</nav>
			<Link href="/">
				<Image
					className={style.logo}
					src={logo}
					alt="logo"
				/>
			</Link>
			<div className={style.wrapper_link}>
				<Massagers />
				<Link href="/about">
					<Button>Вступить в комитет</Button>
				</Link>
			</div>
		</>
	)
}
