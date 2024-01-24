'use client';
import Modal from '@/components/speakers/Modal';
import { useState } from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';

import image from '@/public/phone.png';
import speakersData from '@/public/speakersData.json';
import Image from 'next/image';
import styles from './page.module.css';

import Speakerbox from '@/components/common/Speakersbox';
const Page = () => {
    const [showModal, setShowModal] = useState(false)
    const [currSpeaker, setCurrSpeaker] = useState({})
  return (
    <div className={styles['speaker-container']}>
        <Navbar />
        <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currSpeaker={currSpeaker}   
        />
        <div className={styles['main']}>
            <div className={styles['head-section']}>
                <div className={styles['head-box']}>
                    <div className={styles['pic']}>
                        <Image
                        className={styles['phone-image']}
                        src={image}
                        alt="phone-image"
                        />
                    </div>
                    <div className={styles['text']}>
                        <h2 className={styles['renowned-text']}>RENOWNED</h2>
                        <h1 className={styles['speakers-text']}>Speakers</h1>
                    </div>
                </div>
            </div>
            <div className={styles['cards-box']}>
                <div className={styles['cards-container']}>
                    {speakersData.map((speaker, index) => (
                        <Speakerbox
                            key={index}
                            setShowModal={setShowModal}
                            setCurrSpeaker={setCurrSpeaker}
                            speaker={speaker}
                        />
                ))}
                 </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Page