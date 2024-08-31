import { useProjects } from '@/features/useProject'
import clsx from 'clsx'
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
							return <ProjectItem project={project} />
						}
					)}
				</ul>
			</div>
		</div>
	)
}

export const ProjectItem = ({
	project,
	onDelete,
	admin,
}: {
	project: {
		id: number
		name: string
		text: string
		url: string
	}
	onDelete?: any
	admin?: boolean
}) => {
	return (
		<li
			key={project.id}
			className={clsx(style.li, admin ? style.admin : '')}
		>
			<div
				className={clsx(admin ? style.delete : 'none')}
				onClick={() => onDelete()}
			>
				&#10006;
			</div>
			<div className={style.first}>
				<h2>{project.name}</h2>
				<a href={project.url}>Посмотреть услугу подробнее</a>
			</div>
			<div className={style.second}>
				<p>{project.text}</p>
			</div>
		</li>
	)
}
