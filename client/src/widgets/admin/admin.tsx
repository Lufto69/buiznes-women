import { Button } from '@/shared/ui/button/button'
import { Tag } from '@/shared/ui/tag/tag'
import { useState } from 'react'
import { Md5 } from 'ts-md5'
import style from './admin.module.scss'
import { AddHuman } from './formAndRender/addElement/addHuman'
import { AddPrivilege } from './formAndRender/addElement/addPrivilege'
import { AddProject } from './formAndRender/addElement/addProgect'
import { AddTeg } from './formAndRender/addElement/addTeg'
import { ListHuman } from './formAndRender/ListAndDelete/listHuman'
import { ListPrivilege } from './formAndRender/ListAndDelete/listPrivilege'
import { ListProjects } from './formAndRender/ListAndDelete/listProgect'
import { ListTeg } from './formAndRender/ListAndDelete/listTag'

export const Admin = () => {
	const [tag, setTag] = useState('Резиденты')
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	if (
		login == 'admin' &&
		Md5.hashStr(password) == '21232f297a57a5a743894a0e4a801fc3'
	) {
		return (
			<div className={style.container}>
				<div className={style.wrap}>
					<div onClick={() => setTag('Резиденты')}>
						<Tag active={'Резиденты' == tag}>Резиденты</Tag>
					</div>
					<div onClick={() => setTag('Привилегии')}>
						<Tag active={'Привилегии' == tag}>Привилегии</Tag>
					</div>
					<div onClick={() => setTag('Проекты')}>
						<Tag active={'Проекты' == tag}>Проекты</Tag>
					</div>
					<div onClick={() => setTag('Теги')}>
						<Tag active={'Теги' == tag}>Теги</Tag>
					</div>
				</div>

				{<Render tag={tag} />}
			</div>
		)
	}

	return (
		<div className={style.container}>
			<form
				onSubmit={(event: any) => {
					event.preventDefault()
					setLogin(event.target.login.value)
					setPassword(event.target.password.value)
				}}
				className={style.form}
			>
				<label htmlFor="login">
					Логин:
					<input
						type="text"
						name="login"
					/>
				</label>
				<label htmlFor="password">
					Пароль:
					<input
						type="text"
						name="password"
					/>
				</label>

				<Button className={style.btn}>Войти</Button>
			</form>
		</div>
	)
}

const Render = ({ tag }: { tag: string }) => {
	if (tag === 'Резиденты') {
		return (
			<>
				<AddHuman />
				<ListHuman />
			</>
		)
	}
	if (tag === 'Привилегии') {
		return (
			<>
				<AddPrivilege />
				<ListPrivilege />
			</>
		)
	}
	if (tag === 'Проекты') {
		return (
			<>
				<AddProject />
				<ListProjects />
			</>
		)
	}
	if (tag === 'Теги') {
		return (
			<>
				<AddTeg />
				<ListTeg />
			</>
		)
	}
}
function md5(arg0: string): any {
	throw new Error('Function not implemented.')
}
