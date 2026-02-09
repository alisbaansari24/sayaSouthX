import React from "react";
import img1 from "../assets/image 936.png";
import img2 from "../assets/image 937.png";
import img3 from "../assets/image 935.png";
// import img4 from "../assets/image 938.png";
import img5 from "../assets/image 936.png";
export default function Gallery() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-14 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Gallery
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          saya-southX Carnival
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

        <div className="lg:col-span-2">
          <img
            src={img1}
            alt=""
            className="w-full h-[220px] lg:h-[260px] object-cover rounded-2xl"
          />
        </div>

        <div className="lg:col-span-2">
          <img
            src={img2}
            alt=""
            className="w-full h-[220px] lg:h-[260px] object-cover rounded-2xl"
          />
        </div>

        <div className="lg:col-span-2 lg:row-span-2">
          <img
            src={img3}
            alt=""
            className="w-full h-[320px] lg:h-[540px] object-cover rounded-2xl"
          />
        </div>

        <div>
          <img
            src={img2}
            alt=""
            className="w-full h-[160px] lg:h-[250px] object-cover rounded-2xl"
          />
        </div>

        <div>
          <img
            src={img2}
            alt=""
            className="w-full h-[160px] lg:h-[250px] object-cover rounded-2xl"
          />
        </div>

        <div className="lg:col-span-2">
          <img
            src={img1}
            alt=""
            className="w-full h-[220px] lg:h-[260px] object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}
