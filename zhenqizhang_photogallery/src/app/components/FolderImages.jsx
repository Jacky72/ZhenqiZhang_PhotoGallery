"use client"
import React, { useState } from 'react'
import { useParams } from "next/navigation"
import {PictureData} from '@/app/components/data/PictureData'
import Image from "next/image"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FolderImages = () => {

    const params = useParams();
    const location = params.location.toLowerCase();
    const [currentImage, setCurrentImage] = useState(0);
    const data = PictureData[location.toLowerCase()] || { description: "", images: [] };
    const images = data.images;
    const description = data.description;

    const locationTitles = {
        mingzhutower: "Shanghai Mingzhu Tower",
        greatwall: "Beijing Great Wall of China",
        tiananmensquare: "Beijing Tiananmen Square",
        nationalstadium: "Beijing National Stadium"
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section>
            <h1 className="text-4xl sm:text-5xl text-black font-extrabold text-center mb-12 px-6 tracking-tight capitalize">{locationTitles[location.toLowerCase()] || location}</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative w-full md:w-2/3 flex items-center justify-center gap-2">

                    <ArrowBackIosIcon 
                        onClick={handlePrev} 
                        fontSize='large'
                        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full text-black bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-slate-300/40 transition"
                    />

                    <Image
                        src={images[currentImage]}
                        alt={`Image ${currentImage + 1}`}
                        width={800}
                        height={600}
                        className="object-contain max-w-[82%] h-[500px] rounded shadow-2xl px-2 py-2 ring-2 ring-slate-300"
                    />

                    <ArrowForwardIosIcon
                        onClick={handleNext}
                        fontSize='large'
                        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full text-black bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-slate-300/40 transition shadow"
                    />
                </div>
                <div className="p-6 md:w-1/3 rounded-lg text-black text-lg leading-relaxed">
                    <div className="shadow ring-1 ring-slate-300 px-4 py-4">
                        <h2 className="text-1xl lg:text-3xl font-semibold mb-4 text-center underline">About this location</h2>
                        <p className="text-lg">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FolderImages
