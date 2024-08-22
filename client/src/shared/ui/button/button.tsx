import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

import style from './button.module.scss'

export const Button = ({
	className,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			{...props}
			className={clsx(className, style.button)}
		/>
	)
}
