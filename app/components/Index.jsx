import Link from "next/link";
import Image from "next/image";
import GitKnow from "../../public/SVG/logo.svg";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Index() {
  return (
    <div className=' bg-gradient-to-l from-cyan-500 to-blue-500 text-slate-900 h-screen flex flex-col py-4  align-middle items-center justify-center'>
      <div className=' relative h-[40px] w-[85px]'>
        <Image
          src={GitKnow}
          alt='Logo'
          fill
          className='w-full h-full object-contain'
        />
      </div>
      <div className=' w-full overflow-hidden px-[2rem]'>
        <div id='#upper-form'>
          <div id='#main-text' className='text-center pb-[1.3rem]'>
            <h1 className='text-3xl font-bold'>Safety First</h1>
            <span className='font-semibold text-slate-800'>
              Hello, we're so grateful that your here.
            </span>
          </div>
          <div
            id='#sign-up'
            className='flex gap-2  items-center justify-center  py-[1rem] px-[1rem] font-bold text-slate-50  rounded-md  bg-blue-700  hover:bg-amber-500 hover:text-amber-50'
          >
            <Link href='/login'>
              <button>login</button>
            </Link>
          </div>
          <div
            id='#OR'
            className=' flex items-center justify-center pt-[1.2rem] font-semibold text-slate-50 w-full'
          >
            <span className='border-t-2 border-slate-300  w-full '></span>
            <h1>OR</h1>
            <span className='border-t-2 border-slate-300  w-full '></span>
          </div>
        </div>
        <div id='#downer-form'>
          <div id='#submit-button' className='py-[1.3rem]'>
            <Link href='#'>
              <button
                type='submit'
                className='w-full flex items-center justify-center py-[1rem] px-[1rem] font-bold text-blue-50 bg-blue-700 rounded-md hover:bg-amber-500 hover:text-amber-50'
              >
                Sign-Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        id='#social-media '
        className='flex flex-col items-center gap-[1rem]'
      >
        <h3 className='text-slate-800 font-semibold'>
          Follow Us On Social Media
        </h3>
        <div className='text-blue-50 flex gap-[1.3rem] '>
          <Link href='#' className='hover:text-blue-700'>
            <BsLinkedin size={25} />
          </Link>
          <Link href='#' className='hover:text-blue-700'>
            <BsTwitter size={25} />
          </Link>
          <Link href='#' className='hover:text-blue-700'>
            <BsGithub size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
