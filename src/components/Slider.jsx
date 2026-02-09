import React, { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import brand1 from "../assets/image 56.png";
import brand2 from "../assets/logo (5).png";
import brand3 from "../assets/image 56 (4).png";
import brand4 from "../assets/image 56 (5).png";
import brand5 from "../assets/image 56 (6).png";
import brand6 from "../assets/image 56 (7).png";        
export default function Slider() {
  const sliderRef = useRef(null);

  const brands = [
    { name: "Cinépolis", src: brand1 },
    { name: "Sunburn", src: brand2 },
    { name: "Badami's", src: brand3 },
    { name: "McDonald's", src: brand4 },
    { name: "MOB", src: brand5 },
    { name: "Castle's Barbeque", src: brand6 },
  ];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 bg-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Big Brands, Fresh Launches — Arriving Shortly!
        </h2>

        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="w-8 h-8 flex cursor-pointer items-center justify-center border border-gray-400 rounded hover:bg-gray-100"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={scrollRight}
            className="w-8 h-8 cursor-pointer flex items-center justify-center border border-gray-400 rounded hover:bg-gray-100"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex flex-nowrap gap-6 overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[180px] bg-white rounded shadow border border-gray-100 shadow-md flex items-center justify-center h-20 mb-5"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
