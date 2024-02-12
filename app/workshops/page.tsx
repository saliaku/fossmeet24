'use client';
import PageTitle from '@/components/common/PageTitle';
import Workshopbox from '@/components/common/Workshopbox';
import Modal from '@/components/workshops/Modal';
import { useState } from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';

import workshopsData from '@/public/workshopsData.json';
import styles from '../speakers/page.module.css';

const Page = () => {
    const [showModal, setShowModal] = useState(false)
    const [currWorkshop, setCurrWorkshop] = useState({})
    return (
        <div className={styles['workshop-container']}>
            <Navbar />
            <PageTitle imageSrc="/pencil.png" title="Workshops" tag="Educational" />
            <main>
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    currWorkshop={currWorkshop}
                />
                <div className="outer-margin">
                    <div className={styles['speakers-grid']}>
                        {workshopsData.map((workshop, index) => (
                            <div className={styles['workshop-card-wrapper']} key={index}>
                                <Workshopbox
                                    setShowModal={setShowModal}
                                    setCurrWorkshop={setCurrWorkshop}
                                    workshop={workshop}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    )
}

export default Page