import { Button } from '@/shared/ui/button/button'
import style from './about.module.scss'

export const About = () => {
	return (
		<div className={style.about}>
			<div className={style.sells}>
				<h1>Как вступить в комитет?</h1>
				<div>
					Вступление в комитет по развитию женского
					предпринимательства
					<br /> Московского городского отделения «Опора России»
				</div>
				<img
					src="./assets/Stroke.svg"
					alt=""
				/>
			</div>

			<ul className={style.schedule}>
				<li className={style.schedule__item}>
					<div className={style.number}>1</div>
					<div className={style.action}>
						<h2>Lorem ipsum</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. ...
						</p>
					</div>
				</li>

				<li className={style.schedule__item}>
					<div className={style.number}>2</div>
					<div className={style.action}>
						<h2>Lorem ipsum</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. ...
						</p>
					</div>
				</li>

				<li className={style.schedule__item}>
					<div className={style.number}>3</div>
					<div className={style.action}>
						<h2>Lorem ipsum</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. ...
						</p>
					</div>
				</li>
			</ul>
			<Button className={style.invite_button}>Вступить в комитет</Button>
		</div>
	)
}
