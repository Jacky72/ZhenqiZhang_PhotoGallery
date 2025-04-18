"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import videoData from './data/VideoData';
import Tags from './Tags';
import { motion, useInView, AnimatePresence } from "framer-motion";

const VideoSection = () => {

  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredVideos = videoData.filter((video) =>
    video.tag.includes(tag)
  );

  return (
    <section id='video'>
        <h1 className="text-black text-center font-bold text-3xl sm:text-4xl lg:text-5xl lg:leading-normal mb-5">Video</h1>
        <div className="text-black flex flex-row justify-center item-center gap-2 py-6 mb-6">
          <Tags
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <Tags
            onClick={handleTagChange}
            name="Shanghai"
            isSelected={tag === "Shanghai"}
          />
          <Tags
            onClick={handleTagChange}
            name="Fujian"
            isSelected={tag === "Fujian"}
          />
          <Tags
            onClick={handleTagChange}
            name="Xiamen"
            isSelected={tag === "Xiamen"}
          />
        </div>
        <ul key={tag} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-15">
          <AnimatePresence>
            {filteredVideos.map((video, index) => (
                <motion.li
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h5 className="text-black text-xl font-bold text-center underline underline-offset-2 py-2 px-3 mt-2 mb-4">{video.title}</h5>
                  <video className="w-90 h-auto object-cover lg:mx-auto p-1 border bg-white border-white shadow" src={video.video} controls></video>
                  <div className="mb-5"></div>
                </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <div className="w-full h-px bg-black mt-15" />
        <div className="w-full h-px bg-black mt-1 mb-8" />
    </section>
  )
}

export default VideoSection
