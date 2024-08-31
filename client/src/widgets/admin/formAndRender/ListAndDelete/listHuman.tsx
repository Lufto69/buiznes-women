import { useDeleteHumans, useHumans } from '@/features/useHumans'
import { Human } from '@/widgets/humanList/humanList'
import { useEffect } from 'react'
import style from './listAndDelete.module.scss'

export const ListHuman = () => {
	const { humans } = useHumans()
	const { humanDelete } = useDeleteHumans()
	useEffect(() => {}, [humans, humanDelete])

	return (
		<ul className={style.ul}>
			{humans?.map(
				(people: {
					id: number
					name: string
					tagresenent: []
					img: string
				}) => {
					return (
						<Human
							key={people.id}
							people={people}
							admin
							onDelete={() => humanDelete(people.id)}
						/>
					)
				}
			)}
		</ul>
	)
}
