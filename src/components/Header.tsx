"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Button } from '@/components/ui/button';
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/navigation'; 



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="w-full flex justify-between items-center px-10 py-4 bg-white shadow-md relative">
        <Image onClick={()=>router.push(`/`)} src="/logo.png" className='cursor-pointer w-10 h-10' alt="Register Karo Logo" width={150} height={50} />
        

        <div className="flex items-center gap-8">

          <nav className="hidden items-center md:flex gap-8 font-extrabold">
            <a href="#" className="text-gray-800 font-medium">Home</a>
            <a href="#" className="text-gray-800 font-medium">Our Services</a>
            <a href="#" className="text-gray-800 font-medium">Blog</a>
            <a href="#" className="text-gray-800 font-medium">Contact Us</a>
            <a href="#" className="text-gray-800 font-medium">About Us</a>
            <CiSearch size={30} />
          </nav>

 
          <Button className="bg-orange-500 hidden md:flex text-white px-6 py-2 rounded-md">Talk An Expert</Button>
        </div>


        <button onClick={toggleMenu} className="md:hidden absolute top-5 right-5 bg-orange-500 p-2 rounded-md">
          <GiHamburgerMenu  size={20} color="white" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-white shadow-md px-10 py-5">
          <a href="#" className="text-gray-800 font-medium">Home</a>
          <a href="#" className="text-gray-800 font-medium">Our Services</a>
          <a href="#" className="text-gray-800 font-medium">Blog</a>
          <a href="#" className="text-gray-800 font-medium">Contact Us</a>
          <a href="#" className="text-gray-800 font-medium">About Us</a>
          <CiSearch size={30}  />
          <Button className="bg-orange-500 text-white p-2 rounded-md">Talk An Expert</Button>

        </div>
      )}
    </>
  );
}

export default Header;
