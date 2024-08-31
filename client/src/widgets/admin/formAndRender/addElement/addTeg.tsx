import {
	useAddHumanTag,
	useAddInListHumanTag,
	useAllTag,
} from '@/features/useAllTag'
import { useHumans } from '@/features/useHumans'
import { Button } from '@/shared/ui/button/button'
import style from './addStyle.module.scss'

export const AddTeg = () => {
	const { humanTagAdd } = useAddHumanTag()
	const { humanInListTagAdd } = useAddInListHumanTag()

	const { tags } = useAllTag()
	const { humans } = useHumans()

	return (
		<div className={style.container}>
			<form onSubmit={humanTagAdd}>
				<label htmlFor="name">
					Тег:
					<input
						type="text"
						name="name"
						required
					/>
				</label>

				<Button className={style.btn}>Добавить</Button>
			</form>

			<form
				onSubmit={(event: any) => {
					event.preventDefault()
					humanInListTagAdd(event)
				}}
			>
				<label htmlFor="name">
					Резидент:
					<select
						name="name"
						required
					>
						{humans?.map((human: { id: number; name: string }) => {
							return (
								<option
									key={human.id}
									value={human.id}
								>
									{human.name}
								</option>
							)
						})}
					</select>
				</label>

				<label htmlFor="text">
					Тег резидента:
					<select
						name="text"
						required
					>
						{tags?.map((teg: { id: number; name: string }) => {
							return (
								<option
									key={teg.id}
									value={teg.id}
								>
									{teg.name}
								</option>
							)
						})}
					</select>
				</label>

				<Button className={style.btn}>Добавить</Button>
			</form>
		</div>
	)
}
