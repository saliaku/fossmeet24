// Import necessary modules and components
import Navbar from '@/components/common/Navbar';
import PageTitle from '@/components/common/PageTitle';
import Footer from '@/components/footer/Footer';
import VideoPlayer from './VideoPlayer'; // Import the VideoPlayer component
import styles from './page.module.css';

// Define the Page component
function Page() {
    return (
        <div className={styles['workshop-container']}>
            <Navbar />
            <PageTitle imageSrc="/pencil.png" title="Live" tag="Watch it " />

            <main>
                {/* Include the VideoPlayer component */}
                <VideoPlayer />

            </main>

            <Footer />
        </div >
    );
}

// Export the Page component
export default Page;
