import { Button } from '@/shared/ui/button/button'
import { Tag } from '@/shared/ui/tag/tag'
import clsx from 'clsx'
import Image from 'next/image'
import style from './humanList.module.scss'

import { useAllTag } from '@/features/useAllTag'
import { useHumans } from '@/features/useHumans'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const HumanList = () => {
	let [tag, SomeTag] = useState('Все')

	useEffect(() => {}, [tag])

	const { humans } = useHumans()
	const { tags } = useAllTag()

	return (
		<div className={style.listPerson}>
			<h1>Участники комитета</h1>

			<div className={clsx(style.persons, style.persons_custom_block)}>
				<h2>Администрация</h2>
				<ul>
					{humans?.map(
						(people: {
							id: number
							name: string
							tagresenent: []
							img: string
						}) => {
							if (
								people?.tagresenent?.some(
									(tag: { name: string }) => {
										return tag.name == 'Администратор'
									}
								)
							) {
								return (
									<Human
										key={people.id}
										people={people}
									/>
								)
							}
						}
					)}
				</ul>
			</div>

			<div className={style.persons}>
				<h2>All persons</h2>

				<ul className={style.tabs}>
					{tags?.map((tags: { id: number; name: string }) => {
						return (
							<div
								key={tags.id}
								onClick={() => {
									SomeTag(tags.name)
								}}
							>
								<Tag active={tags.name == tag}>{tags.name}</Tag>
							</div>
						)
					})}
				</ul>

				<ul>
					{humans?.map(
						(people: {
							id: number
							name: string
							tagresenent: []
							img: string
						}) => {
							if (tag === 'Все') {
								return (
									<Human
										key={people.id}
										people={people}
									/>
								)
							}
							if (
								people.tagresenent.some(
									(tags: { name: string }) => {
										return tags.name == tag
									}
								)
							) {
								return (
									<Human
										key={people.id}
										people={people}
									/>
								)
							}
						}
					)}
				</ul>
			</div>
		</div>
	)
}

export const Human = ({
	people,
	onDelete,
	admin,
}: {
	people: {
		id: number
		name: string
		tagresenent: []
		img: string
	}
	onDelete?: any
	admin?: boolean
}) => {
	return (
		<li className={style.li}>
			<div
				className={clsx(admin ? style.delete : 'none')}
				onClick={() => onDelete()}
			>
				&#10006;
			</div>
			<Image
				src={`http://localhost:8080/image/${people.img}`}
				alt=""
				className={style.img}
				width={300}
				height={300}
			/>
			<Link href={`/${people.id}/persons`}>
				<Button className={style.button}>{people.name}</Button>
			</Link>
		</li>
	)
}
