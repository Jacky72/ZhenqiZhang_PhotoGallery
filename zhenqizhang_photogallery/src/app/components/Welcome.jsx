import React from 'react'
import Image from "next/image";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const pictureData = [
    {
        img: '/image/welcome.jpg',
        title: 'pic1',
    },
    {
        img: '/image/welcome.jpg',
        title: 'pic2',
    },
    {
        img: '/image/welcome.jpg',
        title: 'pic3',
    },
    {
        img: '/image/welcome.jpg',
        title: 'pic4',
    },
    {
        img: '/image/welcome.jpg',
        title: 'pic5',
    },
    {
        img: '/image/welcome.jpg',
        title: 'pic6',
    },
    {
        img: '/image/welcome.jpg',
        title: 'pic7',
    }
]

const Welcome = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-6 text-black sm:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold mb-8">Welcome to my Photo Gallery !!!</h1>
                <p className="text-lg lg:text-xl">
                    Hi, my name is Zhang Zhenqi, or you can call me Jacky. This website is a project I use to strengthen my understanding of web development. <br /><br />
                    At the same time, I also hope to use this website to share with you the beautiful memories recorded during my travels. I hope these photos can show you the beauty of the world and these memories, so as to inspire everyone's interest in exploring, traveling and playing.                </p>
            </div>
            <div className="col-span-6 place-self-center mt-8 lg:mt-5">
                <div className="bg-[#323232] w-[400px] h-[300px] lg:w-[407px] lg:h-[305px] sm:w-[200px] sm:h-[200px] relative"> {/* Container and also background of the Profile Image */}
                        <Image src="/image/welcome.jpg" alt="pfp" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={400} height={300}/> 
                        {/* Profile Image (Making it rounded and in the center of the background container */}
                </div>
            </div>
        </div>
        <div className="w-full h-px bg-black mt-15" />
        <div className="w-full h-px bg-black mt-1 mb-15" />
        <Box className="w-full h-auto" sx={{ overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {pictureData.map((picture) => (
                    <ImageListItem key={picture.img}>
                        <img
                            srcSet={`${picture.img}`}
                            src={`${picture.img}`}
                            alt={picture.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    </section>
  )
}

export default Welcome
