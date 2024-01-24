import Image from 'next/image';
import styles from './Workshopbox.module.css';


export default function Workshopbox({ workshop,setShowModal, setCurrWorkshop }) {
  return (
    <div className={styles['work-shop-box']}>

      
      <div className={styles['img-box']}>
        
        <div className="logo-img">
              <Image 
              src={workshop.image}
              width={330}
              height={320}
              alt="logo of organizer" />
            </div>
      </div>

      <div className={styles['content-box']}>

        <div className={styles['date-time']}>
          {/* Dynamic date and time */}
          <p className={styles['date']}>{workshop.date}</p>
          <div className={styles['dot']}></div>
          <p className={styles['time']} >{workshop.time}</p>
        </div>

        <div className={styles['text-box']}>
          {/* Dynamic title and description */}
          <h1 className=''>{workshop.title}</h1>
          
          <p className=''>{workshop.description}</p>
        </div>

        <div className={styles['bottom-btns']}>
          <div className="logo-box">
                <Image 
                src={workshop.organizerLogo}
                width={28}
                height={28}
                alt="logo of organizer" />
                <p>{workshop.organizer}</p>
          </div>

          <div className={styles['view-btn']}>
            <button 
            onClick={
              
              () => {
              console.log(workshop) 
              setCurrWorkshop(workshop)
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
