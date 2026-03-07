
import React, { useState } from 'react'
import { FaArrowRightLong, FaBars, FaXmark } from 'react-icons/fa6'
import img1 from '../assets/hero.jpg'

export default function Nav() {

    var [menuBar, setMenu] = useState(false);
    return (

        // Navigation Bar.....
        <div className="w-full fixed top-0 z-78 border-2 backdrop-blur-2xl">

            {/* Actual div which will contain the total three content used in navbar */}
            <div className="flex items-center justify-between px-6 py-8 border-2 border-amber-600 sm:px-12 md:px-24 lg:40 ">
                {/* Logo */}
                <div>
                    <p className="text-2xl font-bold">Gen-Z</p>
                    <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                </div>

                {/* Nav bar */}
                <div className="hidden sm:flex items-center justify-between space-x-6 font-semibold">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#Career">Career</a>
                </div>

                {/* Button */}
                <div className="hidden sm:block">
                    <button className=" flex items-center gap-2 px-4 py-4 bg-amber-500 rounded-full">
                        Contact us
                        <FaArrowRightLong />
                    </button>
                </div>

                {/* Mobile responsive bar */}
                {
                    menuBar ? <FaXmark onClick={() => { setMenu(!menuBar) }} className=" font-semibold text-3xl z-10 sm:hidden" /> :
                        <FaBars onClick={() => { setMenu(!menuBar) }} className=" text-3xl font-semibold sm:hidden" />
                }

                {/* mobile nav bar */}
                {
                    menuBar && <div className=" font-semibold text-2xl  flex flex-col items-center justify-center space-y-6 fixed top-0 right-0 h-screen w-40 bg-amber-400 sm:hidden">
                        <a onClick={() => { setMenu(!menuBar) }}  href="#home">Home</a>
                        <a onClick={() => { setMenu(!menuBar) }} href="#about">About</a>
                        <a onClick={() => { setMenu(!menuBar) }} href="#Career">Career</a>
                        <a onClick={() => { setMenu(!menuBar) }} href="#Career">Contact us</a>
                    </div>

                }
            </div>
        </div>
    )
}