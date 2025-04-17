"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMotionValueEvent, useScroll } from "framer-motion";
import NavMenu from './NavMenu';
import NavLink from './NavLink';

const navLinks = [
    { title: "Welcome", path: "/"},
    { title: "Pictures", path: "/photo"},
    { title: "Video", path: "/video"},
    { title: "Contact", path: "/contact"}
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    // This is to show and hide the task bar when we scoll up and down. Hide is scrolling down, else show
    const [showNavbar, setShowNavBar] = useState(true)
    // We need to know the previous scroll direction so we then knows if the user is scrolling up or down now
    const [prevScrollY, setPrevScrollY] = useState(0)
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > prevScrollY){
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
        setPrevScrollY(latest);
    })

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth >= 768) {
                setNavbarOpen(false);
            }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
        
    }, []);

    return (
        <nav className={`fixed mx-auto border-b-2 border-black top-0 left-0 right-0 z-10 bg-gradient-to-r from-[#ffffff] via-[#c9f7ff] to-[#fef4cb] bg-opacity-100 min-h-55px max-h-60px transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}> {/* Common NavBar Height = 60 to 100px bg-[#96affc]*/} 
            <div className="text-black flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-2xl md:text-5xl font-semibold"> My Portfolio</Link>
                <div className="mobile-menu block md:hidden">  {/* Hide the NavBar for small screens */}
                {
                    !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className="flex item-center px-3 py-2 border rounded border-black text-black hover:text-slate-800 hover:border-slate-800"><MenuIcon className="h-5 w-5"/></button>
                    ) : (
                    <button onClick={() => setNavbarOpen(false)} className="flex item-center px-3 py-2 border rounded border-black text-black hover:text-slate-800 hover:border-slate-800"><CloseIcon className="h-5 w-5"/></button>
                    )
                }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 font-bold">
                        {navLinks.map(link => (
                            <Link href={link.path} key={link.title} className="text-black underline px-4">
                                {link.title}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <NavMenu links={navLinks}/> : null}
        </nav>
    )
}

export default Navbar