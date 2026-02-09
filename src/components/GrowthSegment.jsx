import React from 'react'

export default function GrowthSegment() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <img
              src="src/assets/logo-south-x 1.png"
              className="w-32 sm:w-40"
              alt="Saya South X"
            />

            <h1 className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-gray-800 max-w-2xl">
              Saya South X Is Here To Take Your Retail Experience To
              The Next Level With A Diverse Selection Of Luxury
              Brands Amidst Tasteful Landscaping.
            </h1>
          </div>

          <div className="mt-18 text-[#515151]">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
              12,000+
              <span className="text-base sm:text-xl font-normal ml-2">Sq.M</span>
            </h2>
            <p className="text-gray-500 mt-2 text-lg sm:text-xl">
              Growth Segment
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">

          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-t-xl overflow-hidden">
              <img
                src="src/assets/Mask group.png"
                className="w-full h-48 sm:h-56 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 w-full bg-black text-white text-center py-2 text-sm font-bold">
                500K+ <span className="text-xs">Families</span>
              </div>
            </div>

            <div className="relative rounded-t-xl overflow-hidden">
              <img
                src="src/assets/image 914 (4).png"
                className="w-full h-48 sm:h-56 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 w-full bg-black/80 text-white text-center py-2 text-xs sm:text-sm whitespace-nowrap">
                3-Side Open <span>Building Frontage</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
