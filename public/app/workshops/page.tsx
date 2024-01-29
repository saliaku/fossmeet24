'use client';
import Workshopbox from '@/components/common/Workshopbox';
import Modal from '@/components/workshops/Modal';
import { useState } from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';

import image from '@/public/pencil.png';
import workshopsData from '@/public/workshopsData.json';
import Image from 'next/image';
import styles from './page.module.css';

const Page = () => {
    const [showModal, setShowModal] = useState(false)
    const [currWorkshop, setCurrWorkshop] = useState({})
  return (
    <div className={styles['workshop-container']}>
        <Navbar />
        <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currWorkshop={currWorkshop}
        />
        <div className={styles['main']}>
            <div className={styles['head-section']}>
                <div className={styles['head-box']}>
                    <div className={styles['pic']}>
                        <Image
                        className={styles['pencil-image']}
                        src={image}
                        alt="pencil-image"
                        />
                    </div>
                    <div className={styles['text']}>
                        <h2 className={styles['educational-text']}>EDUCATIONAL</h2>
                        <h1 className={styles['workshops-text']}>Workshops</h1>
                    </div>
                </div>
            </div>
            <div className={styles['cards-box']}>
                <div className={styles['cards-container']}>
                    {workshopsData.map((workshop, index) => (
                        <Workshopbox
                            key={index}
                            setShowModal={setShowModal}
                            setCurrWorkshop={setCurrWorkshop}
                            workshop={workshop}
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