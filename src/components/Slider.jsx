import React from 'react'

export default function Slider() {

    const brands = [
        { name: "Cinépolis", src: "src/assets/image 56.png" },
        { name: "Sunburn", src: "src/assets/logo (5).png" },
        { name: "Badami's", src: "src/assets/image 56 (4).png" },
        { name: "McDonald's", src: "src/assets/image 56 (5).png" },
        { name: "MOB", src: "src/assets/image 56 (6).png" },
        { name: "Castle's Barbeque", src: "src/assets/image 56 (7).png" },
    ];

    return (
        <div>
            <section className="w-full bg-white">
               
                <div className="border-b">
                    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center ">
                        {brands.map((brand) => (
                            <img
                                key={brand.name}
                                src={brand.src}
                                alt={brand.name}
                                className="mx-auto h-10 object-contain  hover:grayscale-0 transition max-w-3xl"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
