import Image from 'next/image'

import { useOneHumans } from '@/features/useHumans'
import { Loader } from '@/shared/ui/loader/Loader'
import { useRouter } from 'next/router'
import arrow from '../../../public/arrow-back.svg'
import style from './humanCard.module.scss'

export const Human = () => {
	const router = useRouter()
	const { id } = router.query

	if (id) {
		const {
			human,
			isLoading,
		}: {
			human: {
				id: number
				name: string
				tagresenent: []
				img: string
				text: string
			}
			isLoading: boolean
		} = useOneHumans(id)

		if (isLoading) {
			return <Loader />
		}

		return (
			<div className={style.person}>
				<div
					className={style.back}
					onClick={() => router.back()}
				>
					<Image
						src={arrow}
						alt=""
					/>
				</div>
				<Image
					src={`http://localhost:8080/image/${human.img}`}
					alt=""
					width={200}
					height={200}
				/>
				<div className={style.person_info}>
					<h1>{human?.name}</h1>
					<div className={style.wrap}>
						{human.tagresenent?.map(
							(
								tag: {
									id: number
									name: string
								},
								i
							) => {
								return <div key={tag.id}>{tag.name}</div>
							}
						)}
					</div>
					<p>{human.text}</p>
				</div>
			</div>
		)
	}
}
