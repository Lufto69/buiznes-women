import { useAllTag, useDeleteTag } from '@/features/useAllTag'
import { Tag } from '@/shared/ui/tag/tag'
import style from './listAndDelete.module.scss'

export const ListTeg = () => {
	const { tags } = useAllTag()
	const { humanDeleteHuman } = useDeleteTag()
	console.log(tags)

	return (
		<ul className={style.ul}>
			{tags?.map((tags: { id: number; name: string }) => {
				return (
					<Tag
						key={tags.id}
						admin
						onDelete={() => humanDeleteHuman(tags.id)}
					>
						{tags.name}
					</Tag>
				)
			})}
		</ul>
	)
}
