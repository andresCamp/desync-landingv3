'use client'
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import LogoBlack from '../public/desync-logo-white.png';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex justify-between items-center bg-black fixed top-0 w-full p-10 z-50'>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src={LogoBlack}
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      {/* Hamburger menu for mobile */}
      <div className="relative">
        <button className="lg:hidden" onClick={() => setIsOpen(prev => !prev)}>
            <GiHamburgerMenu  size={30} />
        </button>

        {/* Mobile popup menu with fade-in animation */}
        {isOpen && (
          <div className='absolute top-full right-0 w-[200px] flex flex-col gap-4 text-center text-slate-200 lg:hidden bg-white border rounded shadow-lg z-40 transition-opacity duration-1000 ease-in-out opacity-100'>
            <p>microservices</p>
            <p>digital ecosystem</p>
            <p>blog</p>
            <p>portfolio</p>
          </div>
        )}
      </div>

      {/* Normal menu for larger screens */}
      <div className='hidden lg:flex justify-items-center gap-4 text-center text-slate-200'>
        <p>microservices</p>
        <p>digital ecosystem</p>
        <p>blog</p>
        <p>portfolio</p>
      </div>
    </div>
  );
};

export default Navbar;
