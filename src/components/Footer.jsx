
import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";
import FooterLogo from "../assets/footer.png";
import GoogleLogo from "../assets/ggle.png";
export default function Footer() {
    return (
        <footer className="bg-[#243B6B] text-white p-6">
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 pb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                        <div className="text-3xl font-bold tracking-wide">
                            <img src={FooterLogo} alt="Logo" className="w-24" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mt-1">Say Hello To What's Next</h3>

                    <div className=" items-center gap-6">
                        <button className="bg-white text-[#243B6B] px-5 py-2 rounded-full text-sm font-medium cursor-pointer">
                            Schedule a call
                        </button>
                        <div>
                            <a href="#" className="mt-4 text-sm cursor-pointer">contact@sayahomes.in</a>

                        </div>                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1.2fr_1.2fr_1.2fr_1fr] gap-10">
                <div>
                    <h4 className="font-semibold mb-4">ABOUT US</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li className="cursor-pointer">Overview</li>
                        <li className="cursor-pointer">Vision & Mission</li>
                        <li className="cursor-pointer">Meet the Founder</li>
                        <li className="cursor-pointer">Customer Relationship</li>
                        <li className="cursor-pointer">Partnerships</li>
                        <li className="cursor-pointer">Appreciation Letter</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">PROJECTS</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li className="cursor-pointer">Residential</li>
                        <li className="cursor-pointer">Commercial</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">MEDIA</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li className="cursor-pointer">In The Media</li>
                        <li className="cursor-pointer">Awards & Recognition</li>
                        <li className="cursor-pointer">Events</li>
                        <li className="cursor-pointer">Blogs</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">QUICK LINKS</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li className="cursor-pointer">NRI Corner</li>
                        <li className="cursor-pointer">Customer Support</li>
                        <li className="cursor-pointer">Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="flex flex-col items-start gap-6 bg-white px-2 md:px-4 py-2 h-36 rounded-2xl">
                    <div className="flex items-center  bg-white text-[#243B6B] rounded-4xl px-4 sm:px-5 py-3 sm:py-2 w-full max-w-xs shadow-sm">
                        <img
                            src={GoogleLogo}
                            alt="Google Logo"
                            className="w-8 h-8 object-contain"
                        />

                        <div>
                            <p className="text-xs sm:text-xs font-medium">
                                Google reviews
                            </p>

                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-base sm:text-sm">
                                    4.8
                                </span>

                                <span className="text-yellow-400 text-sm sm:text-sm leading-none">
                                    ★★★★★
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="flex gap-3 text-white/70">
                        <div className="bg-[#515151] rounded-full p-2 cursor-pointer">
                            <FaFacebookF size={16} />
                        </div>
                        <div className="bg-[#515151] rounded-full p-2 cursor-pointer"><FaXTwitter size={16} /></div>
                        <div className="bg-[#515151] rounded-full p-2 cursor-pointer"><FaLinkedinIn size={16} /></div>
                        <div className="bg-[#515151] rounded-full p-2 cursor-pointer"> <FaInstagram size={16} /></div>
                        <div className="bg-[#515151] rounded-full p-2 cursor-pointer"><FaYoutube size={16} /></div>


                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
                © 2026 sayahomes. All rights reserved. digital media planned by Ritz Media World
            </div>
        </footer>
    );
}
