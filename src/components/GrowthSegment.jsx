import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import grwth from "../assets/logo-south-x 1.png";
import grwth1 from "../assets/Mask group.png";
import grwth2 from "../assets/Mask group (1).png";

export default function GrowthSegment() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-12">
      <div className="flex flex-col lg:flex-row gap-30">


        <div className="lg:w-7/12 space-y-8">
          <div className="space-y-4">
            <img
              src={grwth}
              className="w-30 sm:w-36"
              alt="Saya South X"
            />

            <h1 className="text-lg sm:text-xl lg:text-2xl font-medium  text-gray-800 max-w-lg">
              Saya South X Is Here To Take Your Retail Experience To
              The Next Level With A Diverse Selection Of Luxury
              Brands Amidst Tasteful Landscaping.
            </h1>
          </div>
        </div>


        <div className="lg:w-5/12 bg-white rounded-xl shadow-md p-5 sm:p-6 border border-gray-100">
          <div className="flex justify-between py-2 border-b border-gray-400 text-sm sm:text-base">
            <span className="text-[#515151]">Property Type</span>
            <span className="font-medium">Commercial</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-400 text-sm sm:text-base">
            <span className="text-[#515151]">Location</span>
            <span className="font-medium">Sector 94, Noida</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-400 text-sm sm:text-base">
            <span className="text-[#515151]">Status</span>
            <span className="font-medium">Delivered</span>
          </div>

          <div className="flex justify-between py-2 text-sm sm:text-base">
            <span className="text-[#515151]">RERA Number</span>
            <span className="font-medium text-right">
              UPRERAPRJ7950 <br />
              www.up-rera.in
            </span>
          </div>
        </div>

      </div>

    <div className="w-full py-6">
  <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-10 items-center gap-20">

    <div className="lg:col-span-4 space-y-6 lg:pr-16">
      <div>
        <h2 className="text-[42px] font-semibold text-[#4A4A4A] leading-tight">
          12,000+ Sq.M
        </h2>
        <p className="text-[20px] text-[#6B6B6B] mt-1">
          Growth Segment
        </p>
      </div>

      <div className="flex gap-3">
        <button className="w-8 h-8 border border-[#D6D6D6] rounded-md flex items-center justify-center">
          <IoIosArrowBack size={16} />
        </button>
        <button className="w-8 h-8 border border-[#D6D6D6] rounded-md flex items-center justify-center">
          <IoIosArrowForward size={16} />
        </button>
      </div>
    </div>

    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
  
  <div>
    <div className="w-full rounded-t-xl overflow-hidden bg-[#F3F3F3]">
      <img
        src={grwth1}
        alt="Families"
        className="w-full h-[220px] object-cover"
      />
      <div className="bg-black text-white py-2 text-center">
        <span className="text-2xl font-semibold">500K+</span>
        <span className="text-sm ml-2">Families</span>
      </div>
    </div>
  </div>

  <div>
    <div className="w-full rounded-t-xl overflow-hidden bg-[#F3F3F3]">
      <img
        src={grwth2}
        alt="Building"
        className="w-full h-[220px] object-cover"
      />
      <div className="bg-black text-white py-2 text-center">
        <span className="text-2xl font-semibold">3-Side Open</span>
        <span className="text-sm ml-2">Building Frontage</span>
      </div>
    </div>
  </div>

</div>


  </div>
</div>





    </div>
  )
}
