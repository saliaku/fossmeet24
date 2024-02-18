'use client';
import { useState } from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';

import styles from './page.module.css';

// Define an array of lead members with their details
const mainMembers = [
    { name: 'John Doe', role: 'Developer', image: '/images/john.jpg', github: 'https://github.com/johndoe' },
    { name: 'Jane Smith', role: 'Designer', image: '/images/jane.jpg', github: 'https://github.com/janesmith' },
    // Add more lead members with their GitHub links
];


// Define an array of team members with their details
const teamMembers = [
    { name: 'John Doe', role: 'Developer', image: '/images/john.jpg', github: 'https://github.com/johndoe' },
    { name: 'Jane Smith', role: 'Designer', image: '/images/jane.jpg', github: 'https://github.com/janesmith' },
    { name: 'Jane Smith', role: 'Designer', image: '/images/jane.jpg', github: 'https://github.com/janesmith' },
    { name: 'Jane Smith', role: 'Designer', image: '/images/jane.jpg', github: 'https://github.com/janesmith' },
    { name: 'Jane Smith', role: 'Designer', image: '/images/jane.jpg', github: 'https://github.com/janesmith' },
    { name: 'Jane Smith', role: 'Designer', image: '/images/jane.jpg', github: 'https://github.com/janesmith' },
    { name: 'Jane Smith', role: 'Designer', image: '/images/jane.jpg', github: 'https://github.com/janesmith' },
    // Add more team members with their GitHub links
];


const Contacts = () => {
    const [showModal, setShowModal] = useState(false)
    const [currWorkshop, setCurrWorkshop] = useState({})
    return (
        <div className={styles['workshop-container']}>
            <Navbar />

            <main>
                <div className={styles['main-personal-info']}>
                    {mainMembers.map((main, index) => (
                        <div key={index} className={styles['main-card']}>
                            <a href={main.github} target="_blank" rel="noopener noreferrer">
                                <img src={main.image} alt={main.name} className={styles['main-image']} />
                            </a>
                            <div className={styles['main-details']}>
                                <h2 className={styles['main-name']}>{main.name}</h2>
                                <p className={styles['main-role']}>{main.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles['team-cards-container']}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles['team-card']}>
                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                <img src={member.image} alt={member.name} className={styles['team-image']} />
                            </a>
                            <div className={styles['team-details']}>
                                <h2 className={styles['team-name']}>{member.name}</h2>
                                <p className={styles['team-role']}>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </main >

            <Footer />
        </div >
    )
}

export default Contacts