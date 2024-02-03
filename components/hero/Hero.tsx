'use client';
import Image from 'next/image';
import styles from './Hero.module.css';

import LandingPageDesktop from '@/public/LandingPageDesktop.svg';
// import LandingPageMobile from '@/public/LandingPageMobile.svg'
import Calendar from '@/public/Calendar.svg';
import Landmark from '@/public/Landmark.svg';

const Hero = () => {
    const handleScrollBottom = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.heroLeft}>
                    <p className={styles.fossmeetHeading}>FOSSMeet&apos;24</p>
                    <div className={styles.eventDetails}>
                        <div className={styles.landmark}>
                            <Image
                                src={Landmark}
                                alt="landmark.png"
                                className={styles.spaceRight}
                            />
                            <p className={styles.spaceLeft}>NIT Calicut</p>
                        </div>
                        <div className={styles.calendar}>
                            <Image
                                src={Calendar}
                                alt="calendar.png"
                                className={styles.spaceRight}
                            />
                            <p className={styles.spaceLeft}>Feb 3, 4, 5</p>
                        </div>
                    </div>
                    {/* Register Button should go here */}
                </div>
                <div className={styles.heroRight}>
                    <Image
                        src={LandingPageDesktop}
                        alt="landing-page.png"
                        className={styles.spaceRight}
                    />
                </div>
            </div>
            <div className={styles.toCentre} onClick={handleScrollBottom}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className={styles.line}></div>
        </>
    )
}

export default Hero