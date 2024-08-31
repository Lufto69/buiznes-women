'use client'

import { useAddHumans } from '@/features/useHumans'
import { Button } from '@/shared/ui/button/button'
import style from './addStyle.module.scss'

export const AddHuman = () => {
	const { humanAdd } = useAddHumans()

	return (
		<div className={style.container}>
			<form onSubmit={humanAdd}>
				<label htmlFor="name">
					Имя:
					<input
						type="text"
						name="name"
						required
					/>
				</label>
				<label htmlFor="text">
					Описание:
					<input
						type="text"
						name="text"
						required
					/>
				</label>
				<label htmlFor="avatar">
					Фотография:
					<input
						type="file"
						name="avatar"
						required
					/>
				</label>
				<Button className={style.btn}>Добавить</Button>
			</form>
		</div>
	)
}
