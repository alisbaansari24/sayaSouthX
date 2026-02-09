import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

export default function Amenities() {
    const [open, setOpen] = useState("Ample Parking");

    const items = [
        {
            title: "Food Court",
            content: "",
        },
        {
            title: "Ample Parking",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim...",
        },
        {
            title: "Cinema",
            content: "",
        },
        {
            title: "Centralised Air Conditioning",
            content: "",
        },
        {
            title: "Centralised Air Conditioning",
            content: "",
        },
        {
            title: "Iconic Design",
            content: "",
        },
    ];

    return (
        <section className="px-6 sm:px-10 lg:px-20 py-16 bg-white">
            <div className="">

                <div>
                    <span className="text-sm tracking-widest text-orange-500 ">
                        Amenities
                    </span>

                    <h2 className="mt-3 text-2xl lg:text-3xl font-semibold text-gray-900">
                        A landmark commercial hub in Greater Noida West.
                    </h2>

                    <p className="mt-4 text-gray-600 leading-relaxed max-w-full">
                        An uber-luxury destination in Greater Noida West is designed to offer an elevated shopping and lifestyle experience.
                    </p>
                    <p className="text-gray-600 leading-relaxed max-w-full">Saya SouthX offers world-class amenities such as centralized air-conditioning, high-speed elevators, ample multi-level parking, and 24x7 security with CCTV surveillance.</p>


                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mt-4">
                    <div className="mt-10 divide-y border-b">
                        {items.map((item, index) => (
                            <div key={index} className="py-5">
                                <button
                                    onClick={() =>
                                        setOpen(open === item.title ? "" : item.title)
                                    }
                                    className="w-full flex items-center justify-between text-left"
                                >
                                    <span className="font-medium text-gray-900">
                                        {item.title}
                                    </span>

                                    {open === item.title ? (
                                        <GoArrowUpRight className="text-gray-700 cursor-pointer" />
                                    ) : (
                                        <IoIosArrowRoundUp size={20} className="text-gray-700 cursor-pointer" />
                                    )}
                                </button>

                                {open === item.title && item.content && (
                                    <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-lg">
                                        {item.content}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="relative">
                        <img
                            src="src/assets/image 915.png"
                            alt="Amenities"
                            className="w-full h-[420px] object-cover rounded-3xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
