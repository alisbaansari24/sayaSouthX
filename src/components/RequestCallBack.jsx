import React from "react";

export default function RequestCallBack() {
    return (
        <section className="relative w-full py-10 flex justify-center  overflow-hidden">
            <div
                className="absolute inset-0 "
                style={{
                    backgroundImage:
                        "url('src/assets/bg.png')",
                    backgroundRepeat: "repeat",
                }}
            />

            <div className="relative z-10 w-full max-w-6xl px-6 text-center">
                <h2 className="text-4xl font-semibold text-gray-900">
                    Got a project?{" "}
                    <span className="text-orange-500 font-bold">Let’s talk!</span>
                </h2>

                <p className="mt-4 text-gray-500 max-w-2xl mx-auto mb-4">
                    We value your privacy and promise to send you only the most important
                    and interesting information.
                </p>

                <div className="relative max-w-2xl items-center justify-center mx-auto bg-white rounded-2xl shadow-xl px-10 pt-14 pb-10 border border-gray-200 mt-10">

                    <span className="absolute -top-4 left-10  px-4 text-xl font-semibold text-gray-800">
                        Request a Call Back
                    </span>

                    <form className="space-y-6 ">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <input
                                type="text"
                                placeholder="Name *"
                                className="h-12 px-5 rounded-lg bg-gray-50   focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />

                            <input
                                type="tel"
                                placeholder="Phone No *"
                                className="h-12 px-5 rounded-lg bg-gray-50  focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                                className="h-12 px-5 rounded-lg bg-gray-50  focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <textarea
                            placeholder="Message"
                            rows={1}
                            className="w-full px-5 py-4 rounded-lg bg-gray-50  focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                        />

                        <button
                            type="submit"
                            className="w-full h-12 rounded-lg bg-[#F6883E] text-white font-normal text-lg cursor-pointer transition"
                        >
                            Get a Call Back
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
