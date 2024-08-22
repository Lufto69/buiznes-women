import { Tag } from '@/shared/ui/tag/tag'
import style from './project.module.scss'

export const Project = () => {
	return (
		<div className={style.container}>
			<h1>Проекты</h1>

			<div className={style.project}>
				<ul>
					<li>
						<div className={style.first}>
							<h2>Company name</h2>
							<a href="">Посмотреть услугу подробнее</a>
						</div>
						<div className={style.second}>
							<h2>Description</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget
								dolor. Aenean massa. Cum sociis natoque
								penatibus et magnis dis parturient montes,
								nascetur ridiculus mus...
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}
