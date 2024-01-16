'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white md:border-black border-b-2 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:py-2 md:block">
              <Link href="/">
                <h2 className="text-2xl text-black font-bold ">FOSSMeet' 24
                <span className="hidden md:inline-block absolute h-full border-l-2 border-black top-1/2 transform -translate-y-1/2 ml-6"></span>
                </h2>
              </Link>
              <div className="md:hidden ml-4">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-sm font-bold text-black py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-fm-orange  border-fm-orange  md:hover:text-fm-orange md:hover:bg-transparent">
                  <Link href="#" onClick={() => setNavbar(!navbar)}>
                    WORKSHOPS
                  </Link>
                </li>
                <li className="text-sm font-bold text-black py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-fm-orange  border-fm-orange  md:hover:text-fm-orange md:hover:bg-transparent">
                  <Link href="#" onClick={() => setNavbar(!navbar)}>
                    EVENTS
                  </Link>
                </li>
                <li className="text-sm font-bold text-black py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-fm-orange  border-fm-orange  md:hover:text-fm-orange md:hover:bg-transparent">
                  <Link href="#" onClick={() => setNavbar(!navbar)}>
                    SPEAKERS
                  </Link>
                </li>
                <li className="text-sm font-bold text-black py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-fm-orange  border-fm-orange  md:hover:text-fm-orange md:hover:bg-transparent">
                  <Link href="#" onClick={() => setNavbar(!navbar)}>
                    CONTACT
                  </Link>
                </li>
                <li className="h-full font-bold text-sm text-black py-2 px-4 text-center  border-b-2 md:bg-fm-orange md:border-b-0  hover:bg-fm-orange  border-fm-orange  md:hover:text-fm-orange md:hover:bg-transparent">
                  <Link href="#" onClick={() => setNavbar(!navbar)}>
                    REGISTER
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </nav>
    </div>
  );
}

export default NavBar;
