import Link from "next/link";
import React from "react";

export default function CloneNext() {
  return (
    <section className='flex py-4 px-[1rem] items-center justify-center'>
      <Link href='/login'>
        <button className=' bg-blue-700 py-4 px-[3rem] hover:bg-red-600 rounded-full'>
          Login
        </button>
      </Link>
    </section>
  );
}
