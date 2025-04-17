import React from 'react'
import VideoSection from '../components/VideoSection'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#ffffff] via-[#c9f7ff] to-[#fef4cb]" >
      <div className="container mt-20 lg:mt-25 mx-auto px-10 py-4">
        <VideoSection/>
      </div>
    </main>
  )
}

export default page
