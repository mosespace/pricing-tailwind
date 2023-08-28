import React from "react";
import Logo from "../../public/about-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Cards() {
  return (
    <section className='py-5 px-12  h-3/6 min-w-full'>
      <div className='py-5 px-6 grid grid-cols-2 gap-5 items-center md:grid-cols-4'>
        <div className='bg-zinc-600 px-6 py-8 flex flex-col items-center justify-center rounded-2xl cursor-pointer hover:bg-zinc-900 hover:px-10'>
          <Link href='#'>
            <div className='relative h-10 w-10'>
              <Image
                src={Logo}
                alt='Tailwind Trial'
                className='w-full h-full object-contain pointer-events-none '
                fill
              />
            </div>
            Firefox
          </Link>
        </div>
        <div className='bg-zinc-600 px-6 py-8 flex flex-col items-center justify-center rounded-2xl cursor-pointer hover:bg-zinc-900 hover:px-10 '>
          <div className='relative h-10 w-10'>
            <Image
              src={Logo}
              alt='Tailwind Trial'
              className='w-full h-full object-contain pointer-events-none '
              fill
            />
          </div>
          Firefox
        </div>
        <div className='bg-zinc-600 px-6 py-8 flex flex-col items-center justify-center rounded-2xl cursor-pointer hover:bg-zinc-900 hover:px-10'>
          <div className='relative h-10 w-10'>
            <Image
              src={Logo}
              alt='Tailwind Trial'
              className='w-full h-full object-contain pointer-events-none '
              fill
            />
          </div>
          Firefox
        </div>
        <div className='bg-zinc-600 px-6 py-8 flex flex-col items-center justify-center rounded-2xl cursor-pointer hover:bg-zinc-900 hover:px-10'>
          <div className='relative h-10 w-10'>
            <Image
              src={Logo}
              alt='Tailwind Trial'
              className='w-full h-full object-contain pointer-events-none '
              fill
            />
          </div>
          Firefox
        </div>
      </div>
    </section>
  );
}
