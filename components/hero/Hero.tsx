'use client'

import styles from './Hero.module.css'

export default function Hero() {
	return (
		<div className={styles['hero']}>
			<div className={styles['container']}>
				<div className={styles['left']}>
					<h1>FOSSMeet&apos;24</h1>
					<div className={styles['items-wrapper']}>
						<div className={styles['item']}>
							<div className={styles['circle']}>
								<img src="/location.svg" alt="Location" />
							</div>
							<span className={styles['item-text']}>NIT Calicut</span>
						</div>
						<div className={styles['item']}>
							<div className={styles['circle']}>
								<img src="/Calendar.svg" alt="Location" />
							</div>
							<span className={styles['item-text']}>Mar 15, 16, 17</span>
						</div>
					</div>
					<button className={styles['cta-button']}>
						<span>Register</span>
						<img src='/arrow_right_alt.svg' />
					</button>
				</div>
				<img src="/hero.svg" className={styles['hero-image']} />
			</div>
		</div>
	)
}
