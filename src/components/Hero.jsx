import React from "react";

export default function Hero() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
        
        <div className="flex flex-col mb-10">
          <h1 className="uppercase text-2xl md:text-3xl font-bold text-gray-900">
            Saya South X
          </h1>
          <span className="text-sm text-[#515151]">
            Commercial
          </span>
        </div>

        <div className="md:ml-auto max-w-3xl">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
            Saya Group, established 25 years ago, is a trailblazer in the real
            estate industry with a strong presence in the Delhi NCR region.
            Known for pioneering luxury residential and commercial developments,
            Saya Group began with the development of low-rise floors and luxury
            villas, and soon expanded into high-rise luxury homes and commercial
            projects.
          </p>
        </div>

      </div>
    </section>
  );
}
