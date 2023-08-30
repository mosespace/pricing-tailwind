"use client";
import React, { useState } from "react";

export default function CloneBtns() {
  const [btnClicked, setBtnClicked] = useState();

  function handleBtnClick(btnClicked) {
    setBtnClicked(btnClicked);
  }
  return (
    <section className='py-2 px-[1rem]'>
      <div id='#buttons' className='bg-slate-900 py-4 rounded-3xl'>
        <div className='px-4 gap-6 flex flex-wrap'>
          <button
            onClick={() => handleBtnClick("all")}
            className={`${
              btnClicked === "all"
                ? "bg-blue-800 px-8 py-2 rounded-3xl"
                : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleBtnClick("agency")}
            className={`${
              btnClicked === "agency"? "bg-blue-800 px-8 py-2 rounded-3xl" : ""
            }`}
          >
            Agency
          </button>
          <button onClick={() => handleBtnClick("business")}
            className={`${
              btnClicked === "business"? "bg-blue-800 px-8 py-2 rounded-3xl" : ""
            }`}>Business</button>
          <button onClick={() => handleBtnClick("saas")}
            className={`${
              btnClicked === "saas"? "bg-blue-800 px-8 py-2 rounded-3xl" : ""
            }`}>SaaS</button>
          <button onClick={() => handleBtnClick("startup")}
            className={`${
              btnClicked === "startup"? "bg-blue-800 px-8 py-2 rounded-3xl" : ""
            }`}>Startup</button>
          <button onClick={() => handleBtnClick("e-commerce")}
            className={`${
              btnClicked === "e-commerce"? "bg-blue-800 px-8 py-2 rounded-3xl" : ""
            }`}>ECommerce</button>
          <button onClick={() => handleBtnClick("dashboard")}
            className={`${
              btnClicked === "dashboard"? "bg-blue-800 px-8 py-2 rounded-3xl" : ""
            }`}>Dashboard</button>
        </div>
      </div>
    </section>
  );
}
