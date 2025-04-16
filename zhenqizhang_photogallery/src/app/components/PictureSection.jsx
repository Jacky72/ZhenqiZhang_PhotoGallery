"use client"
import React, { useState, useRef  } from 'react'
import Tags from './Tags';
import PhotoCards from './PhotoCards';
import pictureData from './PictureData';
import { motion, useInView } from "framer-motion";

const PictureSection = () => {

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredPhotos = pictureData.filter((photo) =>
    photo.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='picture'>
        <h1 className="text-black text-center font-bold text-3xl sm:text-4xl lg:text-5xl lg:leading-normal mb-8">Picture</h1>
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
            name="Beijing"
            isSelected={tag === "Beijing"}
          />
          <Tags
            onClick={handleTagChange}
            name="Suzhou"
            isSelected={tag === "Suzhou"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-15">
          {filteredPhotos.map((photo, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              className="border-1 border-[#999999]"
            >
              <h5 className="text-black text-xl font-bold underline underline-offset-2 py-2 px-3 mt-2 mb-4">{photo.title}</h5>
              <PhotoCards
                key={photo.id}
                title={photo.title}
                description={photo.description}
                imgUrl={photo.image}
                gitUrl={photo.gitUrl}
              />
              <div className="mb-5"></div>
            </motion.li>
          ))}
        </ul>
        <div className="w-full h-px bg-black mt-15" />
        <div className="w-full h-px bg-black mt-1 mb-8" />
    </section>
  )
}

export default PictureSection
