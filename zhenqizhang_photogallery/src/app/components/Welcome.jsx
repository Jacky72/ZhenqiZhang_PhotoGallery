import React from 'react'
import Link from 'next/link'
import Image from "next/image"

const Welcome = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 text-black sm:text-left px-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold mb-15">Welcome to my Photo Gallery !!!</h1>
                <a
                    href="https://github.com/Jacky72"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-15 h-15 bg-white text-black rounded-full hover:bg-purple-300 transition duration-300 mr-20 lg:ml-20 p-1 border border-white shadow"
                    style={{
                        backgroundImage: `url("/image/Github.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                />
                <a
                    href="https://www.linkedin.com/in/zhenqi-zhang-680897283"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-15 h-15 bg-white text-black rounded-full hover:bg-purple-300 transition duration-300 p-1 border border-white shadow"
                    style={{
                        backgroundImage: `url("/image/Linkedin.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                />
            </div>
            <div className="col-span-5 text-black place-self-center mt-8 lg:mt-5 py-3">
                <p className="text-lg lg:text-xl">
                    Hi, my name is Zhang Zhenqi, or you can call me Jacky. This website is a project I use to strengthen my understanding of web development. <br /><br />
                    At the same time, I also hope to use this website to share with you the beautiful memories recorded during my travels. I hope these photos can show you the beauty of the world and these memories, so as to inspire everyone's interest in exploring, traveling and playing.                
                </p>
            </div>
        </div>
        <div className="w-full h-px bg-black mt-15" />
        <div className="w-full h-px bg-black mt-1 mb-15" />
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 text-black sm:text-left px-4 lg:mr-5">
                <Image src={'/image/welcome.jpg'} width={800} height={600} alt="Welcome Section image" className='p-1 border bg-white border-white shadow'/>  
            </div>
            <div className="col-span-5 text-black place-self-center">
                <h2 className="text-4xl font-bold text-black text-center mb-10 mt-8 lg:mt-0 underline">Photos</h2>
                <p className="lg:text-lg px-5 mb-10">
                    When traveling, we always encounter amazing scenery. Taking photos can help us preserve these moments. When we look back at them later, it's like returning to that place again and feeling the shock and joy at that time.<br /><br />
                    Although some people think that we should feel with our eyes instead of cameras, I agree with this point of view. But at the same time, I also want to share this beauty with my family and friends so that they can also feel my experience. In this way, we can recall those unforgettable moments together.
                </p>
                <div className="flex justify-center">
                    <Link href={"/photo"} key={"Pictures"} className="text-black border-2 border-black rounded-full px-4 py-2 justify-center">
                        {"Pictures"}
                    </Link>
                </div>
            </div>
        </div>
        <div className="w-full h-px bg-black mt-13" />
        <div className="w-full h-px bg-black mt-1 mb-15" />
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-5 text-black place-self-center lg:ml-10">
                <h2 className="text-4xl font-bold text-black text-center mb-10 underline">Videos</h2>
                <p className="lg:text-lg px-5 mb-10">
                    I like to add some sports to my travels. Hiking and skiing are my hobbies, and videos can capture these energetic moments. 
                    Every time I watch it, I can relive the excitement and happiness at that time. 
                    Videos not only record my adventures, but also let my family and friends feel the passion and excitement together.
                </p>
                <div className="flex justify-center">
                    <Link href={"/video"} key={"Video"} className="text-black border-2 border-black rounded-full px-4 py-2 justify-center">
                        {"Videos"}
                    </Link>
                </div>
            </div>
            <div className="col-span-7 text-black sm:text-left px-4 lg:px-0 lg:ml-5 mt-10 lg:mt-0">
                <video className="w-90 h-auto object-cover lg:mx-auto p-1 border bg-white border-white shadow" src="/video/welcomevid.mp4" controls>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div className="w-full h-px bg-black mt-15" />
        <div className="w-full h-px bg-black mt-1 mb-10" />
        <footer className="py-4 mb-5">
            <div className="container mx-auto">
                <p className="text-center text-black font-bold">Hope you have a wonderful time visiting this Web Page</p>
            </div>
        </footer>
    </section>
  )
}

export default Welcome
