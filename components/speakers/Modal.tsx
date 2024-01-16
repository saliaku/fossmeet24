import React from 'react'
import ModalWrapper from '../common/ModalWrapper'
import Image from 'next/image'
import {
  FaLinkedin,
  FaGlobe,
} from 'react-icons/fa'


const Modal = ({ showModal, setShowModal }) => {
  return (
    <ModalWrapper>
      <div className="bg-white w-[560px] h-auto relative  border-2 border-black">
        <div className="absolute top-0 right-0 p-4">
          
         
          <Image
            src={'/close-button.svg'}
            width={0}
            height={0}
            className='w-full h-full'
            onClick={() => setShowModal(false)}
            alt="close button"
          />
        </div>
        <div className="p-4">
          <div
          >
            <Image src={'/person.png'} width={80} height={80} className='w-[80px] h-[80px] sm:h-[135px] sm:w-[135px]' alt="Atharv" />
            <h1 className="mt-2 font-bold text-xl sm:text-2xl">Atharva Raykar</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Atharva Raykar is an ardent FOSS enthusiast who is a Computer
              Science graduate from PES University, Bangalore. He is currently a
              software engineer at Nilenso and has previously worked as an
              intern for the Git Community as a part of the Google Summer of
              Code 21. Even while working as a full time engineer, he never
              shies aay from sharing his knowledge and experience to youngsters
              and fellow FOSS enthusiasts, testimony to which is his initiative
              of an open source community by the name of Universities of FOSS,
              India.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <div className="pb-4">
                <FaGlobe size={20} />              </div>
              <div>
                <FaLinkedin size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 border-t-2 border-black p-4  flex space-x-2">
            <button
            className='bg-black text-white px-4 py-2 rounded-2xl flex  space-x-1 items-center h-8 w-24'
            >
                <div>
                🎤
                </div>
               
                <p
                className='text-sm md:text-base uppercase'
                >Talk</p>
           
            </button>
        <p className='text-sm sm:text-base'>
        Lorem ipsum dolor sit amet consectetur. Amet cursus morbi diam tincidunt. Tincidunt a vitae amet nunc cursus. Sit congue dapibus elementum nisi. Eget nunc id in nisi ultrices.
        </p>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default Modal
