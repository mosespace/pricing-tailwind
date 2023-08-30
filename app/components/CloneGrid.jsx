import React from "react";
import Image from "next/image";
import { FiTag } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import UsedImg from "../../public/tt.jpg";

export default function CloneGrid() {
  return (
    <section className='py-4 px-[2rem] sm:px-[5rem]'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <div className='bg-slate-900 rounded-[0.5rem] flex flex-col'>
          <div className='relative h-52'>
            <Image
              src={UsedImg}
              alt='Tailwind-Grids'
              fill
              className='w-full h-full object-cover'
            />
          </div>
          <div className='pt-[1.5rem] px-8'>
            <div className='flex items-center gap-[0.8rem] text-slate-400'>
              <FiTag size={25} />
              <span>Agency, Business</span>
            </div>
            <h1 className='font-bold text-[1.3rem] pt-3'>
              Agency-Tailwind CSS Agency Site Template
            </h1>
            <p className='text-clip py-3 text-slate-400'>
              The Agency-Tailwind CSS Agency Site Template is the perfect
              solution for creating a professional website for your agency. It
              is user-friendly and captures more users
            </p>
          </div>
          <div className='  text-[1.2rem] text-slate-400 border-t-2'>
            <div className='px-8 flex justify-between py-3 '>
              <button className='flex gap-[0.8rem] items-center'>
                <AiOutlineEye /> Preview
              </button>
              <button className='flex gap-[0.8rem] items-center'>
                <BiDownload /> Download
              </button>
            </div>
          </div>
        </div>
        <div className='bg-slate-900 rounded-[0.5rem] flex flex-col'>
          <div className='relative h-52'>
            <Image
              src='/trial.jpg'
              alt='Tailwind-Grids'
              fill
              className='w-full h-full object-cover'
            />
          </div>
          <div className='pt-[1.5rem] px-8'>
            <div className='flex items-center gap-[0.8rem] text-slate-400'>
              <FiTag size={25} />
              <span>Agency, Business</span>
            </div>
            <h1 className='font-bold text-[1.3rem] pt-3'>
              Agency-Tailwind CSS Agency Site Template
            </h1>
            <p className='text-clip py-3 text-slate-400'>
              The Agency-Tailwind CSS Agency Site Template is the perfect
              solution for creating a professional website for your agency. It
              is user-friendly and captures more users
            </p>
          </div>
          <div className='  text-[1.2rem] text-slate-400 border-t-2'>
            <div className='px-8 flex justify-between py-3 '>
              <button className='flex gap-[0.8rem] items-center'>
                <AiOutlineEye /> Preview
              </button>
              <button className='flex gap-[0.8rem] items-center'>
                <BiDownload /> Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
