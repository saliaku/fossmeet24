
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';

import SpeakerContainer from '@/components/speakers/SpeakerContainer';
import image from '@/public/phone.png';
import { client } from '@/sanity/lib/client';
import { Speaker } from '@/sanity/schemas/speaker';
import Image from 'next/image';
import styles from './page.module.css';

export const revalidate = 3600

export default async function Page() {
    const speakers = await client.fetch<Speaker[]>(`*[_type=="speaker"]`)

    return (
        <div className={styles['speaker-container']}>
            <Navbar />

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
                <SpeakerContainer speakers={speakers} />
            </div>
            <Footer />
        </div>
    )
}
