import React from 'react'
import {PictureData} from '@/app/components/data/PictureData'
import Image from "next/image"

const page = async ({ params }) => {

    const { location } = await params;
    const images = PictureData[location.toLowerCase()] || [];

    const locationTitles = {
        mingzhutower: "Shanghai Mingzhu Tower",
        greatwall: "Beijing Great Wall of China",
        tiananmensquare: "Beijing Tiananmen Square",
        nationalstadium: "Beijing National Stadium"
    };

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#ffffff] via-[#c9f7ff] to-[#fef4cb]" >
            <div className="container mt-30 mx-auto px-10 py-4">
                <h1 className="text-3xl text-black font-extrabold text-center mb-12 px-6 capitalize">{locationTitles[location.toLowerCase()] || location}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((src, index) => (
                        <div key={index} className="border p-2 shadow rounded bg-white">
                            <Image
                                src={src}
                                alt={`Image ${index + 1}`}
                                width={500}
                                height={300}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    ) 
}

export default page
