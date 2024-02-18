import React from 'react'
import styles from './Sponsors.module.css'
import Image from 'next/image'
import Star from '/public/star.png'
import Nilenso from '/public/nilenso.svg'
import FossUnited from '/public/foss-united.svg'
export default function sponsors() {
  return (
    <div className={styles['sponsors']}>
        <div className={styles['sponsors-heading-container']}>
            <div className={styles['sponsors-heading-inner-container']}>
                <div className={styles['sponsors-heading-img-container']}>
                    <Image src={Star} alt = 'star' className='sponsors-header-img'></Image>
                </div>
                <div className={styles['sponsors-heading']}>
                    <div className={styles['sponsors-heading-thin']}>Event</div>
                    <div className={styles['sponsors-heading-bold']}>Sponsors</div>
                </div>
            </div>
        </div>
        <div className={styles['sponsors-container']}>
            <div className={styles['sponsors-inner-container']}>
                <div className={styles['sponsors-card']}>
                    <div className={styles['sponsors-img-container']}>
                        <Image src={Nilenso} alt='nilenso' className={styles['sponsor-image-nilenso']}></Image>
                    </div>
                    <div className={styles['sponsors-description']}>
                        <div className={styles['sponsors-description-container']}>
                            <div className={styles['sponsors-description-circle-nilenso']} ></div>
                            <div className={styles['sponsors-name']}>Nilenso</div>
                        </div>
                        <div className={styles['sponsors-description-container-right']}>
                            <div className={styles['sponsors-description-bar']}></div>

                            <div>🥇 GOLD TIER</div>
                        </div>
                    </div>
                </div>
                <div className={styles['sponsors-card']}>
                    <div className={styles['sponsors-img-container']}>
                        <Image src={FossUnited} alt='foss-united' className={styles['sponsor-image-foss-united']}></Image>
                    </div>
                    <div className={styles['sponsors-description']}>
                        <div className={styles['sponsors-description-container']}>
                            <div className={styles['sponsors-description-circle-foss']} ></div>
                            <div className={styles['sponsors-name']}>FOSS United</div>
                        </div>
                        <div className={styles['sponsors-description-container-right']}>
                            <div className={styles['sponsors-description-bar']}></div>

                            <div>🥈 SILVER TIER</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
