import { usePrivilegeTags } from '@/features/useAllTag'
import { usePrivilege } from '@/features/usePrivilege'
import { Tag } from '@/shared/ui/tag/tag'
import clsx from 'clsx'
import { useState } from 'react'
import style from './privilege.module.scss'

export const Privilege = () => {
	const [tagActive, setTag] = useState('Все')
	const { PrivilegeTags } = usePrivilegeTags()
	const { Privilege } = usePrivilege()

	return (
		<main className={style.container}>
			<h1>Привилегии</h1>

			<ul className={style.tabs}>
				<div
					onClick={() => {
						setTag('Все')
					}}
				>
					<Tag
						key={'Все'}
						active={tagActive == 'Все'}
					>
						Все
					</Tag>
				</div>
				{PrivilegeTags?.map((tag: string, index: number) => {
					return (
						<div
							onClick={() => {
								setTag(tag)
							}}
						>
							<Tag
								key={index}
								active={tag == tagActive}
							>
								{tag}
							</Tag>
						</div>
					)
				})}
			</ul>

			<div className={style.privilege}>
				<ul>
					{Privilege?.map(
						(privilege: {
							id: number
							name: string
							text_link: string
							href_link: string
							tag: string
						}) => {
							if (tagActive === 'Все') {
								return <PrivilegeItem privilege={privilege} />
							}
							if (privilege.tag === tagActive) {
								return <PrivilegeItem privilege={privilege} />
							}
						}
					)}
				</ul>
			</div>
		</main>
	)
}

export const PrivilegeItem = ({
	privilege,
	onDelete,
	admin,
}: {
	privilege: {
		id: number
		name: string
		text_link: string
		href_link: string
		tag: string
	}
	onDelete?: any
	admin?: boolean
}) => {
	return (
		<li
			key={privilege.id}
			className={style.li}
		>
			<div
				className={clsx(admin ? style.delete : 'none')}
				onClick={() => onDelete()}
			>
				&#10006;
			</div>
			<div>
				<h2>{privilege.name}</h2>
				<p>{privilege.text_link}</p>
			</div>

			<a href={privilege.href_link}>Подробнее...</a>
		</li>
	)
}
