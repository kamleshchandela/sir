import React, { useState, useEffect } from 'react'
import { FaArrowRightLong, FaBars, FaXmark } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const [menuBar, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setMenu(false);
    }, [location.pathname]);

    // Handle scroll to add background blur/shadow dynamically
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-full fixed top-0 z-[80] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="flex items-center justify-between px-6 sm:px-12 md:px-24 lg:px-40 max-w-[1400px] mx-auto">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-amber-500 animate-ping absolute"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <p className="text-2xl font-extrabold text-gray-900 tracking-tight group-hover:text-amber-500 transition-colors">Gen-Z</p>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden sm:flex items-center space-x-8 font-semibold text-gray-600">
                    <Link to="/" className={`hover:text-amber-500 transition-colors ${location.pathname === '/' ? 'text-amber-500' : ''}`}>Home</Link>
                    <Link to="/about" className={`hover:text-amber-500 transition-colors ${location.pathname === '/about' ? 'text-amber-500' : ''}`}>About</Link>
                    <Link to="/carrer" className={`hover:text-amber-500 transition-colors ${location.pathname === '/carrer' ? 'text-amber-500' : ''}`}>Career</Link>
                    <Link to="/support" className={`hover:text-amber-500 transition-colors ${location.pathname === '/support' ? 'text-amber-500' : ''}`}>Support</Link>
                    <Link to="/contact" className={`hover:text-amber-500 transition-colors ${location.pathname === '/contact' ? 'text-amber-500' : ''}`}>Contact</Link>
                </div>

                {/* Desktop Button */}
                <div className="hidden sm:block">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-black hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                        Contact us
                        <FaArrowRightLong />
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                {menuBar ? (
                    <FaXmark onClick={() => setMenu(false)} className="text-3xl text-gray-900 cursor-pointer sm:hidden z-[100] relative" />
                ) : (
                    <FaBars onClick={() => setMenu(true)} className="text-3xl text-gray-900 cursor-pointer sm:hidden relative z-[100]" />
                )}

                {/* Mobile Navigation Sidebar */}
                <div className={`fixed top-0 right-0 h-screen w-full sm:hidden bg-amber-400 z-[90] transform transition-transform duration-300 ease-in-out ${menuBar ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col items-center justify-center space-y-8 h-full text-2xl font-bold text-gray-900">
                        <Link to="/" className="hover:text-white transition-colors" onClick={() => setMenu(false)}>Home</Link>
                        <Link to="/about" className="hover:text-white transition-colors" onClick={() => setMenu(false)}>About</Link>
                        <Link to="/carrer" className="hover:text-white transition-colors" onClick={() => setMenu(false)}>Career</Link>
                        <Link to="/support" className="hover:text-white transition-colors" onClick={() => setMenu(false)}>Support</Link>
                        <Link to="/contact" className="hover:text-white transition-colors" onClick={() => setMenu(false)}>Contact</Link>
                        
                        <button className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full mt-4 hover:bg-black transition-colors" onClick={() => setMenu(false)}>
                            Contact us
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                
                {/* Backdrop for mobile menu */}
                {menuBar && (
                    <div 
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[80] sm:hidden" 
                        onClick={() => setMenu(false)}
                    ></div>
                )}
            </div>
        </div>
    )
}
