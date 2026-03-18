import React from 'react'
import { assets } from "../assets/assets.js"

export default function Hero() {
    return (
        <div className='w-full pt-44 pb-32 bg-amber-50 relative overflow-hidden' >
            <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40 relative z-10'>
                <div className='flex items-center justify-center gap-4 mx-auto w-max rounded-full bg-white border border-amber-200 shadow-sm py-2 px-6 mb-10'>
                    <div className='flex items-center -space-x-3'>
                        <img className='w-8 h-8 rounded-full border-2 border-white object-cover object-center' src={assets.profile1Img} alt="" />
                        <img className='w-8 h-8 rounded-full border-2 border-white object-cover object-center' src={assets.profile2Img} alt="" />
                        <img className='w-8 h-8 rounded-full border-2 border-white object-cover object-center' src={assets.profile3Img} alt="" />
                        <img className='w-8 h-8 rounded-full border-2 border-white object-cover object-center' src={assets.profile4Img} alt="" />
                    </div>
                    <span className="font-semibold text-sm text-gray-700">Trusted by 10k+ Clients</span>
                </div>

                <h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight'>
                    We Grow brands with
                    <br />
                    <span className='text-amber-500'>Professional</span> Strategy
                </h1>

                <p className='text-center text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed'>
                    At our agency, we take pride in delivering projects that blend creativity, robust strategy, and cutting-edge technology to accelerate your growth.
                </p>

                <div className='flex flex-wrap items-center justify-center gap-6'>
                    <button className='font-bold bg-amber-400 text-black px-8 py-4 rounded-full hover:bg-amber-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300'>
                        Start a Project
                    </button>
                    <button className='font-bold bg-white text-gray-900 px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300'>
                        View Portfolio
                    </button>
                </div>

                <div className='mt-20 mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-amber-100'>
                    <img className='w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700' src={assets.heroImg} alt="Hero Banner" />
                </div>
            </div>
        </div>
    )
}