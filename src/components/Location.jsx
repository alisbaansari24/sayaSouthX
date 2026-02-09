import React from "react";
import {
    FaMapMarkerAlt,
    FaLandmark,
    FaRoad,
    FaPlane
} from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";

export default function Location() {
    const locations = [
        { icon: <FaLandmark />, name: "Ek Murti Buddha Chowk", dist: "100 Mtr" },
        { icon: <FaRoad />, name: "Ek Murti Buddha Chowk", dist: "2 KM" },
        { icon: <FaMapMarkerAlt />, name: "Crossing Republik", dist: "2 KM" },
        { icon: <FaSignsPost />, name: "Kisan Chowk Chhar Murti", dist: "2.5 KM" },
        { icon: <ImAirplane />, name: "Jewar Airport", dist: "11 KM" },
        { icon: <ImAirplane />, name: "IGI International Airport", dist: "40 KM" },
    ];

    return (
        <section
            style={{
                backgroundImage: "url('src/assets/Group 105409.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="px-6 sm:px-10 lg:px-20 py-16"
        >

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                        Centralised Location
                    </h2>

                    <div className="divide-y divide-gray-300">
                        {locations.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between py-5"
                            >
                                <div className="flex items-center text-gray-700">

                                    <span className="text-lg">{item.icon}</span>

                                    <span className="mx-4 h-10 w-px bg-gray-300"></span>

                                    <span className="flex text-sm sm:text-base items-center gap-2">
                                        <span> <FaMapMarkerAlt /></span>
                                        {item.name}
                                    </span>
                                </div>

                                <span className="text-sm font-medium text-gray-700">
                                    {item.dist}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-md overflow-hidden bg-white shadow">
                    <iframe
                        src="https://www.google.com/maps?q=Ek+Murti+Chowk+Greater+Noida&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                        title="Location Map"
                    />
                </div>

            </div>
        </section>
    );
}
