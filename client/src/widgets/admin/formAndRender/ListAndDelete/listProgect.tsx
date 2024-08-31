import { useDeleteProject, useProjects } from '@/features/useProject'
import { ProjectItem } from '@/widgets/projects/projects'
import style from './listAndDelete.module.scss'

export const ListProjects = () => {
	const { projects } = useProjects()
	const { projectDelete } = useDeleteProject()
	return (
		<ul className={style.ul}>
			{projects?.map(
				(project: {
					id: number
					name: string
					text: string
					url: string
				}) => {
					return (
						<ProjectItem
							key={project.id}
							onDelete={() => projectDelete(project.id)}
							admin
							project={project}
						/>
					)
				}
			)}
		</ul>
	)
}
