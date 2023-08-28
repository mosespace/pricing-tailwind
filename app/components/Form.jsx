import React from "react";
import {BsFillArrowRightCircleFill} from "react-icons/bs"

export default function Form() {

  return (
    <section className='py-5 px-12  h-3/6 min-w-full'>
      <div>
        <form action='' className=' px-12 bg-white flex items-center gap-5 justify-center'>
            <div>
            <BsFillArrowRightCircleFill size={30} className="cursor-pointer text-black"/>
            </div>
          <input
          className="py-2 px-4 rounded-lg outline-0 w-full text-black"
            type='search'
            name='Search With Google or Enter Address'
            placeholder='Search With Google or Enter Address'
            id=''
          />
        </form>
      </div>
    </section>
  );
}
