 
 import React, { useState } from 'react'
import { IoMdCall } from "react-icons/io"
import { FaWhatsapp } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"
import logo from '../assets/logo.png';

export default function HeaderSection() {
    const [open, setOpen] = useState(false)

    return (
        <div className="p-6 bg-white border-b border-gray-100">
            <div className="flex justify-between items-center">


                <a href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-20 cursor-pointer"
                    />
                </a>



                <ul className="hidden md:flex items-center gap-10 text-[#515151]">
                    <li className="cursor-pointer">OUR STORY</li>
                    <li className="cursor-pointer">OUR PROJECTS</li>
                    <li className="rounded-full p-2 border cursor-pointer">
                        <IoMdCall />
                    </li>
                    <li className="rounded-full p-2 border cursor-pointer">
                        <FaWhatsapp />
                    </li>
                    <li> <div className='cursor-pointer'> <RxHamburgerMenu size={30} /> </div> </li>
                </ul>

                <div className=" md:hidden flex gap-4 reverse-1">
                    <div className="rounded-full p-2 border cursor-pointer">
                        <IoMdCall />
                    </div>
                    <div className="rounded-full p-2 border cursor-pointer">
                        <FaWhatsapp />
                    </div>
                </div>
                <div
                    className="md:hidden cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <RxHamburgerMenu size={30} />
                </div>

            </div>


            {open && (
                <div className="md:hidden mt-6">
                    <ul className="flex flex-col gap-4 text-[#515151]">
                        <li className="cursor-pointer">OUR STORY</li>
                        <li className="cursor-pointer">OUR PROJECTS</li>

                    </ul>
                </div>
            )}
        </div>
    )
}
