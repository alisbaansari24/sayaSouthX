import React, { useState } from "react";

export default function MasterPlan() {
    const [unit, setUnit] = useState("UNIT 1");

    return (
        <section className="bg-[#44557D] px-6 sm:px-10 lg:px-10 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                        Master Plan
                    </h2>

                    <div className="rounded-md overflow-hidden bg-white">
                        <img
                            src="src/assets/image 932.png"
                            alt="Master Plan"
                            className="w-full h-[430px] ob  ject-cover"
                        />
                    </div>
                </div>

                <div className="mt-6 lg:mt-16">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                            Floor Plans
                        </h3>

                        <div className="flex gap-2 flex-wrap">
                            {["UNIT 1", "UNIT 2"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setUnit(item)}
                                    className={`px-4 py-1.5 text-sm border rounded transition
            ${unit === item
                                            ? "bg-white text-[#44557D]"
                                            : "bg-transparent text-white border-white"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[1, 2].map((_, i) => (
                            <div
                                key={i}
                                className="bg-white p-5 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between"
                            >
                                <img
                                    src="src/assets/image 933.png"
                                    alt="Floor Plan"
                                    className="w-28 sm:w-36 object-contain mx-auto sm:mx-0"
                                />

                                <div className="text-justify sm:text-left ">
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        TypeA: 2B/R
                                    </h4>

                                    <p className="text-sm text-gray-600">
                                        Total Super Area: 1139 SQ FT
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Carpet Area: 752 SQ FT
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Balcony Area: 69 SQ FT
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
