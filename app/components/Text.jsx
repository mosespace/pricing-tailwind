"use client";
import React from "react";
import { monthlyPrice, annualPrice } from "@/pricingData";
import { useState } from "react";
import Package from "./Package";

export default function Text() {
  const [pricing, setPricing] = useState("monthly");
  const [pricingData, setPricingData] = useState(monthlyPrice);

  function changePricing(pricing) {
    setPricing(pricing);

    if (pricing == "monthly") {
      setPricingData(monthlyPrice);
    } else {
      setPricingData(annualPrice);
    }
  }
  return (
    <div className='px-8'>
      <div className='px-0 py-8 flex flex-col items-center justify-center text-white '>
        <h1 className='text-5xl font-bold pb-5'>Pricing ✅</h1>
        <p className=' text-center sm:text-2xl md:text-[1.2rem] md:w-[550px]'>
          Sign up in less than 30 Seconds. Try out our seven day risk free
          trial! Upgrade at any time no question, no hassle
        </p>
      </div>
      <div className='flex px-6 gap-6 justify-center min-[320px]:px-2'>
        <div className='bg-white text-black ' >
          <button
            onClick={() => changePricing("monthly")}
            className={`px-8 py-4 ${
              pricing === "monthly"
                ? "bg-amber-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => changePricing("annually")}
            className={`px-8 py-4 ${
              pricing === "annually"
                ? "bg-amber-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-2 sm:gap-4 sm:py-6 lg:grid-cols-4 lg:px-36 lg:py-10 md:px-16 min-[320px]:py-4'>
        {pricingData.map((month, i) => {
          return <Package key={i} data={month} />;
        })}
      </div>
    </div>
  );
}
