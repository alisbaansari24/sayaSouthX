import React, { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Slider() {
  const sliderRef = useRef(null);

  const brands = [
    { name: "Cinépolis", src: "src/assets/image 56.png" },
    { name: "Sunburn", src: "src/assets/logo (5).png" },
    { name: "Badami's", src: "src/assets/image 56 (4).png" },
    { name: "McDonald's", src: "src/assets/image 56 (5).png" },
    { name: "MOB", src: "src/assets/image 56 (6).png" },
    { name: "Castle's Barbeque", src: "src/assets/image 56 (7).png" },
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
