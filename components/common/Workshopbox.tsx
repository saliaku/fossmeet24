import styles from './Workshopbox.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function Workshopbox({ title, image ,date, time, description, organizer, organizerLogo,setShowModal }) {
  return (
    <div className={styles['work-shop-box']}>

      
      <div className={styles['img-box']}>
        
        <div className="logo-img">
              <Image 
              src={image}
              width={330}
              height={320}
              alt="logo of organizer" />
            </div>
      </div>

      <div className={styles['content-box']}>

        <div className={styles['date-time']}>
          {/* Dynamic date and time */}
          <p className={styles['date']}>{date}</p>
          <div className={styles['dot']}></div>
          <p className={styles['time']} >{time}</p>
        </div>

        <div className={styles['text-box']}>
          {/* Dynamic title and description */}
          <h1 className=''>{title}</h1>
          
          <p className=''>{description}</p>
        </div>

        <div className={styles['bottom-btns']}>
          <div className="logo-box">
                <Image 
                src={organizerLogo}
                width={28}
                height={28}
                alt="logo of organizer" />
                <p>{organizer}</p>
          </div>

          <div className={styles['view-btn']}>
            <button 
            onClick={
              
              () => {
              setShowModal(true)
              }
            }
            >
              <Image 
                src={'/arrow_right_alt.png'}
                width={28}
                height={28}
                alt="logo of organizer" />
            </button>
          </div>

          
        </div>


      </div>

    </div>
  );
}
