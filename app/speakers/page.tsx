
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';

import PageTitle from '@/components/common/PageTitle';
import SpeakerContainer from '@/components/speakers/SpeakerContainer';
import { client } from '@/sanity/lib/client';
import { Speaker } from '@/sanity/schemas/speaker';
import styles from './page.module.css';

export const revalidate = 3600

export default async function Page() {
    const speakers = await client.fetch<Speaker[]>(`*[_type=="speaker"]`)

    return (
        <div className={styles['speaker-container']}>
            <Navbar />
            <PageTitle imageSrc={'./phone.png'} title="Speakers" tag="Renowned" />

            <div className={styles['main']}>
                <SpeakerContainer speakers={speakers} />
            </div>
            <Footer />
        </div>
    )
}
