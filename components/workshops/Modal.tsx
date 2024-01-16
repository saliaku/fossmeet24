import React from 'react'
import ModalWrapper from '../common/ModalWrapper'
import Image from 'next/image'

const Modal = ({showModal , setShowModal}) => {
  return (
    <ModalWrapper>
      {showModal && (
        <div
          className="bg-white 
        
           border-2 border-black
         h-auto
           
            max-w-[566px]
              relative
           "
        >
          <div className=" p-4 absolute top-0 right-0">
            <Image
              src={'/close-button.svg'}
              onClick={() => setShowModal(false)}
              width={40}
              height={40}
              alt="close button"
            />
          </div>

          <div className="flex flex-col h-full w-full flex-wrap">
            <div className="h-2/3 w-full flex border-2 p-6 flex-col md:flex-row">
              <div
              className="w-[132] h-[140] flex-shrink-0">
                <Image
                  src="/r1.png"
                  width={140}
                  height={140}
                  alt="workshop image"
                />
              </div>
              <div className=" ml-5 mt-4 md:mt-0">
                <div className="flex space-x-3  items-center">
                  <div className="h-8 bg-gray-200 py-2 px-3 rounded-2xl font-semibold text-sm flex uppercase">
                    27 Jan
                  </div>
                  <div className="h-2 w-2 bg-black rounded-full "></div>
                  <p className="font-semibold text-sm">3hrs</p>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold mt-2">FFmpeg Workshop</h1>
                <p className="text-wrap mt-2 text-gray-500 text-sm sm:text-base">
                  Kerala Rustaceans is a group that aims to create a community
                  of Rust enthusiasts who can learn, collaborate and share
                  knowledge on projects related to Rust. The group also aims to
                  promote the use of Rust in the state and to attract more
                  developers to the language. They usually organise events,
                  meetups, and hackathons to discuss and learn about the latest
                  developments in Rust
                </p>
              </div>
            </div>
            <div className="min-h-[150px] h-auto w-full flex  md:flex-row px-3">
              <div className="flex flex-col space-y w-1/2 border-r-2 py-4">
                <p className="text tracking-[0.25rem]  text-gray-600 uppercase text-sm font-medium">
                  Conducted by
                </p>
                <div
                className='flex items-center space-x-2 flex-wrap mt-2'
                >
                    <div
                    >
                        <Image
                        src="/csea-small.png"
                        width={28}
                        height={28}
                        alt="organizer logo"
                        />
                    </div>
                    <p className= 'font-medium'>CSEA</p>

                </div>
                
              </div>
              <div className=' py-4 p-3'>
              <p className="text tracking-[0.25rem]  text-gray-600 uppercase text-sm mb-2 font-medium">
                  Hosts
                </p>
                <ul className='font-medium list-disc px-6'>
                    <li>
                        John Doe
                    </li>
                    <li>
                        John Doe
                    </li>
                    <li>
                        John Doe
                    </li>
                    <li>
                        John Doe
                    </li>

                </ul>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </ModalWrapper>
  )
}

export default Modal
