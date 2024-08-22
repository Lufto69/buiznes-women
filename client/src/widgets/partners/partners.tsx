import Image from 'next/image'

import style from './partners.module.scss'

import logo from '../../../public/Слой_x0020_1.svg'

export const Partners = () => {
	return (
		<div className={style.container}>
			<div className={style.partners}>
				<h3>Партнеры Комитета</h3>
				<ul>
					<li>
						<Image
							src={logo}
							alt=""
							className="style.partners_image"
						/>
					</li>
					<li>
						<Image
							src={logo}
							alt=""
							className="style.partners_image"
						/>
					</li>
					<li>
						<Image
							src={logo}
							alt=""
							className="style.partners_image"
						/>
					</li>
				</ul>
			</div>
		</div>
	)
}
