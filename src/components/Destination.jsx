import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";


export default function Destination() {
    return (
        <div className='p-6'>
            <div className="px-4 sm:px-6 lg:px-16 py-2 md:py-0 space-y-10">
                <div className='bg-[#22356CDB] rounded-2xl text-white px-6 sm:px-10 py-14 max-w-6xl mx-auto'>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                        An Uber Luxury High Street Retail Destination
                    </h2>

                    <p className="mt-4 text-sm sm:text-sm leading-relaxed text-white/90 ">
                        Catch The Latest Fix, Meet Your Friends For A Cup Of Coffee, Shop For
                        The Latest Trends, Or Take Your Family On A Culinary Journey. Capture
                        Every Beautiful Moment And Rejoice In The Joys Of Retail Therapy. With
                        Saya South X, You Can Explore A Mix Of Retail, Restaurants And
                        Entertainment Pulsating With Style And Energy. No Limit, No End To Fun
                        & Excitement At Saya South X.
                    </p>
                    <button className="mt-6 flex items-center gap-2 font-semibold bg-[#F6883E] hover:bg-orange-600 transition text-white px-5 py-2 rounded-full text-sm">
                        Read More
                        <BsArrowUpRightCircle className="text-white font-bold " />
                    </button>
                </div>

                <div className="relative max-w-4xl mx-auto">


                    <div className="hidden lg:block absolute -right-45 top-4">
                        <button className="bg-[#1E2F57] text-white px-5 py-2  text-sm">
                            ENQUIRE NOW
                        </button>
                    </div>


                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="src/assets/Rectangle 45138.png"
                            alt="Saya"
                            className="w-full h-[220px] sm:h-[320px] lg:h-[420px] object-cover"
                        />


                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                                <FaPlay />
                            </button>
                        </div>
                    </div>


                    <div className="lg:hidden flex justify-center mt-4">
                        <button className="bg-[#1E2F57] text-white px-6 py-2  text-sm">
                            ENQUIRE NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
