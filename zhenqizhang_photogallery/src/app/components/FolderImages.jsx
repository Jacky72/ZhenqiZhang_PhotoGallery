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
    const [previewStart, setPreviewStart] = useState(0);
    const data = PictureData[location.toLowerCase()] || { description: "", images: [] };
    const images = data.images;
    const description = data.description;

    const locationTitles = {
        mingzhutower: "Shanghai Mingzhu Tower",
        greatwall: "Beijing Great Wall of China",
        tiananmensquare: "Beijing Tiananmen Square",
        nationalstadium: "Beijing National Stadium",
        shanghaicity: "Shanghai City Walk"
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePreviewPrev = () => {
        if (previewStart > 0) {
            setPreviewStart(previewStart - 1);
        }
    };

    return (
        <section>
            <h1 className="text-4xl sm:text-5xl text-black font-extrabold text-center mb-12 px-6 tracking-tight capitalize">{locationTitles[location.toLowerCase()] || location}</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative w-full md:w-2/3 items-center justify-center gap-2 shadow-2xl ring-2 ring-slate-300">

                    <div className="relative flex items-center justify-center gap-2 overflow-hidden mt-8 mb-10">
                        <ArrowBackIosIcon className="z-10 text-black" onClick={handlePreviewPrev}></ArrowBackIosIcon>
                        <div className="flex gap-2 overflow-x-auto">
                            {images.slice(previewStart, previewStart + 5).map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    onClick={() => setCurrentImage(previewStart + idx)}
                                    className={`w-20 h-20 object-cover rounded cursor-pointer ${
                                        currentImage === previewStart + idx ? 'ring-2 ring-blue-500' : ''
                                    }`}
                                />
                            ))}
                        </div>
                        <ArrowForwardIosIcon className="z-10 text-black" onClick={handlePreviewPrev}></ArrowForwardIosIcon>
                    </div>

                    <div className="relative flex  items-center justify-center gap-2 overflow-hidden">
                        <ArrowBackIosIcon
                            onClick={handlePrev}
                            fontSize='large'
                            className="absolute top-1/2 left-10 -translate-y-1/2 p-2 rounded-full text-black bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-slate-300/40 transition"
                        />
                        <Image
                            src={images[currentImage]}
                            alt={`Image ${currentImage + 1}`}
                            width={800}
                            height={600}
                            className="object-contain max-w-[82%] h-[530px] [@media(min-width:2560px)]:h-[900px] rounded mb-5 px-2 py-2"
                        />
                        <ArrowForwardIosIcon
                            onClick={handleNext}
                            fontSize='large'
                            className="absolute top-1/2 right-10 -translate-y-1/2 p-2 rounded-full text-black bg-white/60 backdrop-blur-sm border border-gray-300 hover:bg-slate-300/40 transition shadow"
                        />
                    </div>

                </div>



                <div className="p-6 md:w-1/3 rounded-lg text-black text-lg leading-relaxed">
                    <div className="shadow ring-1 ring-slate-300 px-4 py-4">
                        <h2 className="text-1xl lg:text-3xl font-semibold mb-4 text-center underline">About this location</h2>
                        <p className="text-lg [@media(min-width:2560px)]:text-xl">{description !== "" ? description : "This guy is too lazy to leave a description for this folder."}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FolderImages
