"use client"
import FolderImages from '@/app/components/FolderImages'
import React from 'react'


const page = () => {

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#ffffff] via-[#c9f7ff] to-[#fef4cb]" >
            <div className="container mt-25 mx-auto px-10 py-4">
                <FolderImages/>
            </div>
        </main>
    ) 
}

export default page
