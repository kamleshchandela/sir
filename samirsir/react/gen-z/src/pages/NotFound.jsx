import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-32 relative overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>

        <h1 className="text-[10rem] md:text-[15rem] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-amber-600 drop-shadow-sm mb-4">
          404
        </h1>
        
        <div className="bg-amber-50 px-6 py-2 rounded-full text-amber-600 font-bold uppercase tracking-widest text-sm mb-6 shadow-sm border border-amber-100">
          Page Not Found
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 z-10">
          Oops! Looks like you're completely lost.
        </h2>
        
        <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed z-10 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track to greatness.
        </p>
        
        <Link 
          to="/" 
          className="z-10 px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-black hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 transition-all duration-300"
        >
          Return to Home Base
        </Link>
      </div>
      
      <Footer />
    </div>
  );
}
