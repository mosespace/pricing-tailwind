import React from "react";
import Logo from "../../public/about-logo.png";
import Image from "next/image";

export default function Hero() {
  // bg-blue-900
  return (
    <section className='py-5 px-12  h-3/6 min-w-full'>
      <div className='flex py-5 gap-3 items-center justify-center'>
        <div className='relative h-20 w-20'>
          <Image
            src={Logo}
            alt='Tailwind Trial'
            className='w-full h-full object-contain pointer-events-none '
            fill
          />
        </div>
        <div>
          <h1 className='text-3xl font-semibold align-middle flex justify-center'>
            Firefox
          </h1>
        </div>
      </div>
    </section>
  );
}
