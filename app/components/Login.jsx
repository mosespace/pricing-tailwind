"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import GitKnow from "../../public/SVG/logo.svg";

export default function Login() {
  return (
    <div className='  bg-slate-50 text-slate-900 h-screen flex flex-col py-4  align-middle items-center justify-center'>
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
            <h1 className='text-3xl font-bold'>Your details</h1>
            <span className='font-semibold text-slate-500'>
              Please provide your name and email.
            </span>
          </div>
          <div
            id='#sign-up'
            className='flex gap-2  items-center justify-center  py-2 font-bold border-2 rounded-md border-slate-400'
          >
            <FcGoogle size={30} />
            <button onClick={() => signIn("google")}>
              Sign up with Google
            </button>
          </div>
          <div
            id='#OR'
            className=' flex items-center justify-center pt-[1.2rem] font-semibold text-slate-500 w-full'
          >
            <span className='border-t-2 border-slate-400  w-full '></span>
            <h1>OR</h1>
            <span className='border-t-2 border-slate-400  w-full '></span>
          </div>
        </div>
        <div id='#downer-form'>
          <form action=''>
            <label className='pt-[1rem] flex flex-col gap-[1rem]'>
              <h3 className='font-bold'>
                First name <span className='text-red-600'>*</span>
              </h3>
              <input
                type='text'
                name='user_first_name'
                placeholder='Enter your first name'
                id='#first-name'
                className='px-[1rem] py-[.7rem] border-2 font-semibold text-slate-400 border-slate-400 rounded-md focus:outline-none'
              />
            </label>
            <label className='pt-[1rem] flex flex-col gap-[1rem]'>
              <h3 className='font-bold'>
                Last name <span className='text-red-600'>*</span>
              </h3>
              <input
                type='text'
                name='user_last_name'
                placeholder='Enter your last name'
                id='#last-name'
                className='px-[1rem] py-[.7rem] border-2 font-semibold text-slate-400 border-slate-400 rounded-md focus:outline-none'
              />
            </label>
            <label className='pt-[1rem] flex flex-col gap-[1rem]'>
              <h3 className='font-bold'>
                Email <span className='text-red-600'>*</span>
              </h3>
              <input
                type='email'
                name='user_email'
                placeholder='Enter your email'
                id='#email'
                className='px-[1rem] py-[.7rem] border-2 font-semibold text-slate-400 border-slate-400 rounded-md focus:outline-none'
              />
            </label>
          </form>
          <div id='#submit-button' className='py-[1.3rem]'>
            <button
              type='submit'
              className='w-full flex items-center justify-center py-[1rem] px-[1rem] font-bold text-blue-50 bg-blue-700 rounded-md hover:bg-amber-500 hover:text-amber-50'
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
