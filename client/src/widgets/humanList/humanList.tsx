import { Button } from '@/shared/ui/button/button'
import { Tag } from '@/shared/ui/tag/tag'
import clsx from 'clsx'
import Image from 'next/image'
import style from './humanList.module.scss'

export const HumanList = () => {
	return (
		<div className={style.listPerson}>
			<h1>Участники комитета</h1>

			<div className={clsx(style.persons, style.persons_custom_block)}>
				<h2>Администрация</h2>
				<ul>
					<li>
						<Image
							src=""
							alt=""
						/>
						<Button className={style.button}>More...\_O_/</Button>
					</li>
				</ul>
			</div>

			<div className={style.persons}>
				<h2>All persons</h2>

				<ul className={style.tabs}>
					<Tag>Кек</Tag>
				</ul>

				<ul>
					<li>
						<Image
							src=""
							alt=""
						/>
						<Button className={style.button}>Вольфшлеге</Button>
					</li>
				</ul>
			</div>
		</div>
	)
}
