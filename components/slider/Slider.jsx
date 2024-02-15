import React, { use, useEffect, useState } from 'react';
import styles from './Slider.module.css'
import Image from 'next/image'
import Pencil from '/public/pencil.png'
import LeftArrow from '/public/arrow_left.png'
import RightArrow from '/public/arrow_right.png'


// make sure the no. of objects in the array is multiple of 3, if not make it by adding empty object
// Dummy object, replace it with actual workshop/speakers data.
const arr = [
    {name: 'card1'},
    {name: 'card2'},
    {name: 'card3'},
    {name: 'card4'},
    {name: 'card5'},
    {name: 'card6'},
    {name: 'card7'},
    {name: 'card8'},
    {name: 'card9'},
    {name: 'card10'},
    {name: 'card11'},
    {}

]

export default function Slider() {
  const [left, setLeft] = useState(0);
  const n = arr.length;
  const [nthButtonIndex, setNthButtonIndex] = useState(0);
  const [screenValue, setScreenValue] = useState(3);

  // now update the same css for corresponding medias-screen, in slider-card-container
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 800) {
        setScreenValue(1);
      } else if (screenWidth < 998) {
        setScreenValue(2);
      } else {
        setScreenValue(3);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to set the initial screen value
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const paginationButton = new Array(Math.ceil(n / screenValue)).fill(null);
  const paginationContainerWidth = (n/screenValue)*15;

  const OnClickLeft = () => {
        if(left < 0){
            setLeft(prev => prev + 110);
            setNthButtonIndex(prev => prev - 1);
        }
  }
  const OnClickRight = () => {
        if(left > (-110)*(n/screenValue-1)){
            setLeft(prev => prev - 110);
            setNthButtonIndex(prev => prev + 1);
        }
  }

  const containerStyle = {
    position: 'relative',
    left: `${left}%`
  }

  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  return (
    <div className={styles.slider}>
        <div className={styles['slider-heading-container']}>
            <div className={styles['slider-heading-inner-container']}>
                <div className={styles['slider-heading-img-container']}>
                    <Image src={Pencil} alt = 'pencil' className='slider-header-img'></Image>
                </div>
                <div className={styles['slider-heading']}>
                    <div className={styles['slider-heading-thin']}>Educational</div>
                    <div className={styles['slider-heading-bold']}>Workshops</div>
                </div>
            </div>
            <div className={styles['slider-view-all-container-big']}>
                <div className={styles['slider-view-all']}> View all Workshops</div>
            </div>
        </div>
        <div className={styles['slider-container']}>
            <div className={styles['slider-button-left']} onClick={OnClickLeft}>
                <Image  className={styles['arrow-img']} src={LeftArrow} alt='arrow'></Image>
            </div>
            <div className={styles['slider-button-right']} onClick={OnClickRight}>
                <Image  className={styles['arrow-img']} src={RightArrow} alt='arrow'></Image>
            </div>

            <div className={styles['slider-div-container']}>
              {arr.reduce((acc, item, index) => {
                if (index % screenValue === 0) {
                  acc.push([]);
                }
                acc[acc.length - 1].push(item);
                return acc;
              }, []).map((group, groupIndex) => (
                <div key={groupIndex} className={styles['slider-card-container']} style={containerStyle}>
                  {group.map((item, itemIndex) => (
                    // replace the given below div with the actual workshop/speaker cards
                    <div key={itemIndex} className={styles['swiper-card']} style={{ visibility: isEmptyObject(item) ? 'hidden' : 'visible' }}>
                      {item.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>

        </div>
        <div className={styles['slider-pagination-container']}>
          <div className={styles['slider-pagination-inner']} style={{ width: `${paginationContainerWidth}px` }}>
            {paginationButton.map((button, index) => (
              <div
                key={index}
                className={styles['slider-pagination-button']}
                style={{
                  backgroundColor: index === nthButtonIndex ? 'black' : 'white',
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles['slider-view-all-container-small']}>
          <div className={styles['slider-view-all']}> View all Workshops</div>
        </div>
    </div>
  )
}
