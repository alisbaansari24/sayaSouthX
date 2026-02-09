import React, { useState } from "react";

const faqs = [
    {
        id: "01",
        question: "What is the property rate in greater Noida?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
        id: "02",
        question: "What is the property rate in greater Noida?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "03",
        question: "What is the property rate in greater Noida?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "04",
        question: "What is the property rate in Dwarka Expressway?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

export default function Faqs() {
    const [open, setOpen] = useState(1);

    return (
        <section
            style={{
                backgroundImage: "url('src/assets/faqbg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative bg-[#0c0f1a] text-white px-6 sm:px-10 lg:px-20 py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8">FAQs</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                <div className="flex justify-center lg:justify-start">

                    <img
                        src="src/assets/image 903.png"
                        alt="FAQ"
                        className="rounded-2xl max-w-full lg:max-w-md"
                    />
                </div>

                <div>

                    <div className=" border-t border-white/20">
                        {faqs.map((item, index) => (
                            <div key={index} className="py-1 ">

                                <button
                                    onClick={() => setOpen(open === index ? null : index)}
                                    className="w-full flex justify-between items-center text-left"
                                >
                                    <div className="flex gap-4">
                                        <span className="text-white/60">{item.id}</span>
                                        <span className="font-medium">{item.question}</span>
                                    </div>

                                    <span className="text-xl cursor-pointer">
                                        {open === index ? "−" : "+"}
                                    </span>
                                </button>


                                {open === index && item.answer && (
                                    <p className="mt-3 text-sm text-white/70 max-w-xl">
                                        {item.answer}
                                    </p>
                                )}
                                <div className="h-[1px] bg-white/20 my-4" />
                                <div className="h-[1px] bg-white/20 mb-4" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
