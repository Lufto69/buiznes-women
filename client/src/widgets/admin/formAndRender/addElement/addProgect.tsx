import { useAddProject } from '@/features/useProject'
import { Button } from '@/shared/ui/button/button'
import style from './addStyle.module.scss'

export const AddProject = () => {
	const { projectAdd } = useAddProject()
	return (
		<div className={style.container}>
			<form onSubmit={projectAdd}>
				<label htmlFor="name">
					Название проекта:
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
				<label htmlFor="url">
					Ссылка на ресурс проекта:
					<input
						type="text"
						name="url"
						required
					/>
				</label>

				<Button className={style.btn}>Добавить</Button>
			</form>
		</div>
	)
}
