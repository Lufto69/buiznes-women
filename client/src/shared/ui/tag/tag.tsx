import clsx from 'clsx'

import style from './tag.module.scss'

export const Tag = ({
	className,
	children,
	active,
	...props
}: {
	className?: string
	active?: boolean
	children: string
}) => {
	return (
		<li
			{...props}
			className={clsx(className, style.li, active ? style.active : '')}
		>
			{children}
		</li>
	)
}
