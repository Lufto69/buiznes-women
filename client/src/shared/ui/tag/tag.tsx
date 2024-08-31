import clsx from 'clsx'

import style from './tag.module.scss'

export const Tag = ({
	className,
	children,
	active,
	admin,
	onDelete,
	...props
}: {
	className?: string
	active?: boolean
	admin?: boolean
	onDelete?: any
	children: string
}) => {
	return (
		<li
			{...props}
			className={clsx(
				className,
				style.li,
				active ? style.active : '',
				admin ? style.unActive : ''
			)}
		>
			<div
				className={clsx(admin ? style.delete : 'none')}
				onClick={() => onDelete()}
			>
				&#10006;
			</div>
			{children}
		</li>
	)
}
