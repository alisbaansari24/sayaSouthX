
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Specifications() {
  const sliderRef = useRef(null);

  const specs = [
    { floor: "Floors 0 - 01" },
    { floor: "Floors 0 - 02" },
    { floor: "Floors 0 - 03" },
    { floor: "Floors 0 - 04" },
    { floor: "Floors 0 - 05" },
  ];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-2 sm:px-10 lg:px-8 py-16 ">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Explore The Specifications
        </h2>

        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="w-9 h-9 cursor-pointer border  border-gray-400 rounded-sm flex items-center justify-center hover:bg-gray-100"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={scrollRight}
            className="w-9 h-9 cursor-pointer border border-gray-400 rounded-sm flex items-center justify-center hover:bg-gray-100"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden ">
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-scroll scroll-smooth scrollbar-hide "
        >
          {specs.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px]  rounded-2xl p-6 mb-5
                         shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <p className="text-sm text-gray-500">{item.floor}</p>

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                Luxe Retail Plaza
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim Ad Minim Veniam, Quis...
              </p>

              <button className="mt-4 cursor-pointer text-sm font-medium text-orange-500 hover:underline">
                Read More..
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
