import { usePrivilege } from '@/features/usePrivilege'
import { usePrivilegeTags } from '@/features/usePrivilegeTag'
import { Tag } from '@/shared/ui/tag/tag'
import style from './privilege.module.scss'

export const Privilege = () => {
	const { PrivilegeTags } = usePrivilegeTags()
	const { Privilege } = usePrivilege()

	return (
		<main className={style.container}>
			<h1>Привилегии</h1>

			<ul className={style.tabs}>
				{PrivilegeTags?.map((tag: string, index: number) => {
					return <Tag key={index}>{tag}</Tag>
				})}
			</ul>

			<div className={style.privilege}>
				<ul>
					{Privilege?.map(
						(privilege: {
							id: number
							name: string
							text_link: string
							href_link: string
							tag: string
						}) => {
							return (
								<li key={privilege.id}>
									<div>
										<h2>{privilege.name}</h2>
										<p>{privilege.text_link}</p>
									</div>

									<a href={privilege.href_link}>
										Подробнее...
									</a>
								</li>
							)
						}
					)}
				</ul>
			</div>
		</main>
	)
}
