"use client";
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";

import {SlMenu} from "react-icons/sl";
import {useGlobalContext} from "@/context/Context";

function Header() {
  const {mobileMenu, setMobileMenu} = useGlobalContext();

  const handleMobileMenuOpen = () => {
    setMobileMenu(!mobileMenu);
  };

  // const handleMobileMenuToggle = () => {
  //   setMobileMenu(!mobileMenu);
  // };

  return (
    <>
      <div className="sticky  top-0 h-14 flex flex-row items-center justify-between px-4 md:px-5 bg-white border-b border-b-gray-300 shadow-lg ">
        {/* icons and logo  */}
        <div className="flex items-center h-5">
          {/* icons for full screen and mobile  */}
          <div
            className="h-10 w-10 rounded-full cursor-pointer flex items-center justify-center md:hidden md:mr-6 hover:bg-[#303030]/20 duration-200 text-black "
            onClick={handleMobileMenuOpen}>
            <SlMenu className=" text-xl" size={18} />
          </div>

          {/* adding logo  */}
          <Link href={"/"} className="h-5 flex items-center">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold italic text-red-500">
                E<span className="text-lg">ye</span>
              </h1>
              <h1 className="text-4xl font-bold text-blue-400">
                G<span className="text-lg">ate</span>
              </h1>
            </div>
            {/* <Image src={""} alt="logo" className="h-full hidden md:block" />
            <Image src={""} alt="mobile logo" className="h-full  md:hidden " /> */}
          </Link>
        </div>

        {/* user profile image  */}
        <div className="flex items-center">
          <div className="flex">
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#303030]/60 overflow-hidden mx-4  cursor-pointer">
              <Image
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt="profile image"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
