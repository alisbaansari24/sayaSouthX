import React from 'react'

export default function ImageSection() {
    return (
        <div>
            <div>
                <img src="src/assets/image 907.png" alt="" className='w-auto h-auto' />
            </div>
            <div className="w-full shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
                   
                    <ul className="flex gap-4 md:gap-6 text-sm text-[#515151] overflow-x-auto whitespace-nowrap scrollbar-hide flex-1">
                        <li className="cursor-pointer hover:text-black">Overview</li>
                        <li className="cursor-pointer hover:text-black">Tour</li>
                        <li className="cursor-pointer hover:text-black">Amenities</li>
                        <li className="cursor-pointer hover:text-black">Download Brochure</li>
                        <li className="cursor-pointer hover:text-black">Map Location</li>
                        <li className="cursor-pointer hover:text-black">Master Layout</li>
                        <li className="cursor-pointer hover:text-black">Floor Layout</li>
                    </ul>

                    <div className="hidden md:block cursor-pointer text-sm text-[#515151] font-medium hover:text-black">
                        Contact with us
                    </div>
                </div>
            </div>


        </div>
    )
}
