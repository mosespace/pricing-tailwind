"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/about-logo.png";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function NavBar() {
  const [showHumbug, setShowHumbug] = useState(false);
  function HandleClick() {
    setShowHumbug(!showHumbug);
  }
  return (
    <main>
      <nav className='bg-indigo-50 py-4 px-12 text-sky-950 flex justify-between items-center md:px-22'>
        <div className='flex gap-2 items-center'>
          <div className='relative h-10 w-10'>
            <div>
              <Image
                src={Logo}
                alt='Firefox'
                fill
                className='w-full h-full object-cover pointer-events-none '
              />
            </div>
          </div>
          <h1 className='font-bold text-xl'>Firefox</h1>
        </div>

        <button
          onClick={HandleClick}
          className={showHumbug ? "cursor-pointer hidden " : "lg:hidden"}
        >
          <FiMenu size={30} />
        </button>
        <div className="hidden lg:block">
          <Link href='/next-page'>
            <h1 className='font-bold text-xl'>Next Page</h1>
          </Link>
        </div>
      </nav>
    </main>
  );
}
