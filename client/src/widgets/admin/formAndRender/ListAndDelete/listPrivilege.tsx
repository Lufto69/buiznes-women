import { useDeletePrivilege, usePrivilege } from '@/features/usePrivilege'
import { PrivilegeItem } from '@/widgets/privilege/privilege'
import style from './listAndDelete.module.scss'

export const ListPrivilege = () => {
	const { Privilege } = usePrivilege()

	const { privilegeDelete } = useDeletePrivilege()

	return (
		<ul className={style.ul}>
			{Privilege?.map(
				(privilege: {
					id: number
					name: string
					text_link: string
					href_link: string
					tag: string
				}) => {
					return (
						<PrivilegeItem
							key={privilege.id}
							privilege={privilege}
							onDelete={() => privilegeDelete(privilege.id)}
							admin
						/>
					)
				}
			)}
		</ul>
	)
}
