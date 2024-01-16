'use client';
import React, { Children } from 'react'

const ModalWrapper = ({children}) => {
    
  return (
    <>
    {children && (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center'>
        {children}
    </div>
    )    
    }
    </>
  )
}

export default ModalWrapper