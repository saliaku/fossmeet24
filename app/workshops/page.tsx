'use client';
import PageTitle from '@/components/common/PageTitle';
import Workshopbox from '@/components/common/Workshopbox';
import Modal from '@/components/workshops/Modal';
import { useState } from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';

import workshopsData from '@/public/workshopsData.json';
import styles from './page.module.css';

const Page = () => {
    const [showModal, setShowModal] = useState(false)
    const [currWorkshop, setCurrWorkshop] = useState({})
    return (
        <div className={styles['workshop-container']}>
            <Navbar />
            <PageTitle imageSrc="/pencil.png" title="Workshops" tag="Educational" />
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                currWorkshop={currWorkshop}
            />
            <div className={styles['main']}>
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
            <Footer />
        </div>
    )
}

export default Page