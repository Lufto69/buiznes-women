import { useProjects } from '@/features/useProject'
import style from './project.module.scss'

export const Project = () => {
	const { projects } = useProjects()

	return (
		<div className={style.container}>
			<h1>Проекты</h1>

			<div className={style.project}>
				<ul>
					{projects?.map(
						(project: {
							id: number
							name: string
							text: string
							url: string
						}) => {
							return (
								<li key={project.id}>
									<div className={style.first}>
										<h2>{project.name}</h2>
										<a href={project.url}>
											Посмотреть услугу подробнее
										</a>
									</div>
									<div className={style.second}>
										<p>{project.text}</p>
									</div>
								</li>
							)
						}
					)}
				</ul>
			</div>
		</div>
	)
}
