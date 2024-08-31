import { useAddPrivilege } from '@/features/usePrivilege'
import { Button } from '@/shared/ui/button/button'
import style from './addStyle.module.scss'

export const AddPrivilege = () => {
	const { privilegeAdd } = useAddPrivilege()

	return (
		<div className={style.container}>
			<form
				onSubmit={async (e: any) => {
					privilegeAdd(e)
				}}
			>
				<label htmlFor="name">
					Название привилегии:
					<input
						type="text"
						name="name"
						required
					/>
				</label>
				<label htmlFor="text_link">
					Описание:
					<input
						type="text"
						name="text_link"
						required
					/>
				</label>
				<label htmlFor="href_link">
					Ссылка на ресурс привилегии:
					<input
						type="url"
						name="href_link"
						required
					/>
				</label>
				<label htmlFor="tag">
					Тег привилегии:
					<input
						type="text"
						name="tag"
						required
					/>
				</label>

				<Button className={style.btn}>Добавить</Button>
			</form>
		</div>
	)
}
