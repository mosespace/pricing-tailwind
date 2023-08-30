"use client";
import Image from "next/image";
import { useState } from "react";
// import Logo from "../../public/Logo.svg";
import { FiMenu } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";
import Link from "next/link";

export default function CloneNavBar() {
  const [showHumbug, setShowHumbug] = useState(false);
  function HandleClick() {
    setShowHumbug(!showHumbug);
  }
  return (
    <main>
      <nav className='bg-white fixed left-0 right-0 py-4 z-50 px-[2rem] text-black flex justify-between items-center md:px-22'>
        <div className='flex gap-2 items-center'>
          {/* <div className='relative h-10 w-36'>
            <div>
              <Image
                src={Logo}
                alt='BrandRider'
                fill
                className='w-full h-full object-contain pointer-events-none '
              />
            </div>
          </div> */}
          <h1 className='font-bold text-xl'>TailGrids</h1>
        </div>

        <div className='flex gap-[2.5rem]'>
          <button className='cursor-pointer lg:hidden'>
            <BsFillSunFill size={30} />
          </button>
          <button
            onClick={HandleClick}
            className={showHumbug ? "cursor-pointer hidden " : "lg:hidden"}
          >
            <FiMenu size={30} />
          </button>
        </div>

        <div className='hidden lg:block'>
          <Link href='/next-page'>
            <h1 className='font-bold text-xl'>Next Page</h1>
          </Link>
        </div>
      </nav>
    </main>
  );
}
