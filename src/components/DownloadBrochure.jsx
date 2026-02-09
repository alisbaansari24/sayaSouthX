import React from "react";

export default function DownloadBrochure() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-10 py-8">
      <div
        className="relative w-full max-w-7xl rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-5 sm:px-10 py-10 sm:py-16">
          <div className="flex items-start gap-4 mb-2">
            <span className="w-1 h-14 sm:h-20 bg-[#F6883E] rounded" />

            <div>
              <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                Download Brochure
              </h2>
              <p className="text-gray-200 mt-1 text-sm sm:text-base">
                Wish To Get A Call Back From Our Team? Fill In Your Details.
              </p>
            </div>
          </div>

          <form className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 sm:ml-5">
            <input
              type="text"
              placeholder="Name *"
              className="w-full sm:w-64 h-10 rounded-lg px-4 text-gray-700 bg-white focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile *"
              className="w-full sm:w-64 h-10 rounded-lg px-4 bg-white text-gray-700 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email *"
              className="w-full sm:w-64 h-10 rounded-lg px-4 bg-white text-gray-700 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full sm:w-auto h-10 px-8 rounded-full bg-[#22356C] text-white font-normal flex items-center justify-center gap-3 hover:bg-blue-800 transition"
            >
              Submit
              <span className="w-3 h-3 bg-white rounded-full" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
