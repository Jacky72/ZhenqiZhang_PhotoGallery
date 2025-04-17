"use client"
import React, { useState, useRef  } from 'react'
import Tags from './Tags';
import PhotoCards from './PhotoCards';
import folderData from './data/FolderData';
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from "framer-motion";

const PictureSection = () => {

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredFolders = folderData.filter((folder) =>
    folder.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='picture'>
      <h1 className="text-black text-center font-bold text-3xl sm:text-4xl lg:text-5xl lg:leading-normal mb-5">Picture</h1>
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
      <ul key={tag} ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-15">
        <AnimatePresence>
          {filteredFolders.map((folder, index) => (
            <Link key={folder.id} href={`/photo/${folder.location}`}>
              <motion.li
                key={folder.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <h5 className="text-black text-xl font-bold text-center underline underline-offset-2 py-2 px-3 mt-2 mb-4">{folder.title}</h5>
                <PhotoCards
                  key={folder.id}
                  title={folder.title}
                  imgUrl={folder.backgroundImage}
                />
                <div className="mb-5"></div>
              </motion.li>
            </Link>
          ))}
        </AnimatePresence>
      </ul>
      <div className="w-full h-px bg-black mt-15" />
      <div className="w-full h-px bg-black mt-1 mb-8" />
    </section>
  )
}

export default PictureSection
