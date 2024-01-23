import React from 'react'
import Image from 'next/image'
import styles from './Button.module.css'
export default function Button({isLeft}) {
    return (
        <div className={styles['view-btn']}>
            <button
            >
               {
                    isLeft?
                     <Image
                     src={'/arrow_left_alt.png'}
                     width={28}
                     height={28}
                     alt="left_arrow"
                     />
                     :
                     <Image
                     src={'/arrow_right_alt.png'}
                     width={28}
                     height={28}
                     alt="right_arrow"
                     />
               }
            </button>
        </div>
    )
}
